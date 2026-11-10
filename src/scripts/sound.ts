/**
 * Opt-in sound. Nothing is created until the visitor turns sound on, so the
 * page stays silent (and AudioContext-free) by default.
 */

/** The five lines of a treble staff in E minor — together they spell Em9. */
export const STRING_NOTES = [
  { name: "E", freq: 329.63 },
  { name: "G", freq: 392.0 },
  { name: "B", freq: 493.88 },
  { name: "D", freq: 587.33 },
  { name: "F#", freq: 739.99 },
] as const;

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let enabled = false;
let voices = 0;
const MAX_VOICES = 14;
const listeners = new Set<(on: boolean) => void>();

function ensureContext() {
  if (ctx) return;
  const AC: typeof AudioContext | undefined =
    window.AudioContext ?? (window as any).webkitAudioContext;
  if (!AC) return;
  ctx = new AC();

  master = ctx.createGain();
  master.gain.value = 0.55;
  master.connect(ctx.destination);

  // A short, dark echo so plucks sit in a room instead of ending dry.
  const delay = ctx.createDelay(1);
  delay.delayTime.value = 0.29;
  const damp = ctx.createBiquadFilter();
  damp.type = "lowpass";
  damp.frequency.value = 1500;
  const feedback = ctx.createGain();
  feedback.gain.value = 0.34;
  const wet = ctx.createGain();
  wet.gain.value = 0.3;
  master.connect(delay);
  delay.connect(damp);
  damp.connect(feedback);
  feedback.connect(delay);
  damp.connect(wet);
  wet.connect(ctx.destination);
}

export function isSoundOn() {
  return enabled;
}

export function onSoundChange(fn: (on: boolean) => void) {
  listeners.add(fn);
  fn(enabled);
}

export function setSound(on: boolean) {
  if (on) {
    ensureContext();
    if (!ctx) return;
    void ctx.resume();
  }
  enabled = on && !!ctx;
  listeners.forEach((fn) => fn(enabled));
  if (enabled) {
    // Confirm with a soft rising triad.
    pluck(STRING_NOTES[0].freq, 0.5);
    setTimeout(() => pluck(STRING_NOTES[2].freq, 0.45), 110);
    setTimeout(() => pluck(STRING_NOTES[4].freq, 0.4), 220);
  }
}

/** A soft plucked tone. `velocity` is 0–1. */
export function pluck(freq: number, velocity = 0.6) {
  if (!enabled || !ctx || !master || voices >= MAX_VOICES) return;
  const v = Math.min(1, Math.max(0.05, velocity));
  const t = ctx.currentTime;
  const dur = 2.1;

  const tone = ctx.createBiquadFilter();
  tone.type = "lowpass";
  tone.frequency.setValueAtTime(1600 + v * 2600, t);
  tone.frequency.exponentialRampToValueAtTime(620, t + 1.3);

  const amp = ctx.createGain();
  amp.gain.setValueAtTime(0.0001, t);
  amp.gain.exponentialRampToValueAtTime(0.04 + v * 0.2, t + 0.008);
  amp.gain.exponentialRampToValueAtTime(0.0001, t + dur);

  const body = ctx.createOscillator();
  body.type = "triangle";
  body.frequency.value = freq;

  const shimmer = ctx.createOscillator();
  shimmer.type = "sine";
  shimmer.frequency.value = freq * 2.003;
  const shimmerAmp = ctx.createGain();
  shimmerAmp.gain.value = 0.16;

  const warmth = ctx.createOscillator();
  warmth.type = "sine";
  warmth.frequency.value = freq / 2;
  const warmthAmp = ctx.createGain();
  warmthAmp.gain.value = 0.35;

  body.connect(tone);
  shimmer.connect(shimmerAmp).connect(tone);
  warmth.connect(warmthAmp).connect(tone);
  tone.connect(amp).connect(master);

  voices++;
  body.onended = () => {
    voices--;
    amp.disconnect();
  };
  for (const osc of [body, shimmer, warmth]) {
    osc.start(t);
    osc.stop(t + dur + 0.05);
  }
}

/** Wires every `[data-sound-toggle]` control on the page to the shared state. */
export function initSoundToggles() {
  const toggles = document.querySelectorAll<HTMLElement>("[data-sound-toggle]");
  toggles.forEach((el) => el.addEventListener("click", () => setSound(!enabled)));
  onSoundChange((on) => {
    document.documentElement.classList.toggle("sound-on", on);
    toggles.forEach((el) => {
      el.setAttribute("aria-pressed", String(on));
      const label = el.querySelector<HTMLElement>("[data-sound-label]");
      if (label) label.textContent = on ? "Sound on" : "Sound off";
    });
  });
}
