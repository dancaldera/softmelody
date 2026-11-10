export type ProductKey = "melody" | "shield" | "relay" | "vault" | "pos" | "mic" | "db";

export interface Product {
  name: string;
  url: string;
  icon: ProductKey;
  badge: { text: string; kind: "live" | "oss" };
  desc: string;
  tags: string[];
  /** Columns the card spans on the 12-column desktop grid. */
  span: 4 | 5 | 7;
}

export const products: Product[] = [
  {
    name: "Softmelody App",
    url: "https://app.softmelody.dev/",
    icon: "melody",
    badge: { text: "Live", kind: "live" },
    desc: "Voice AI services for every customer conversation. AI-powered call workflows — inbound, outbound, and support — designed, deployed, and tuned for production.",
    tags: ["Voice AI", "Agents", "Telephony", "SaaS"],
    span: 7,
  },
  {
    name: "ID",
    url: "https://id.softmelody.dev/",
    icon: "shield",
    badge: { text: "Live", kind: "live" },
    desc: "Enterprise AI agentic security workflows — triage incidents, model threats, and write detections in a private chat workspace. Encrypted chats, a secure vault, and two-factor sign-in.",
    tags: ["Security", "AI Agents", "SecOps"],
    span: 5,
  },
  {
    name: "Relay",
    url: "https://relay.softmelody.dev/",
    icon: "relay",
    badge: { text: "Live", kind: "live" },
    desc: "Share files safely — signed, expiring HTTPS links over a private bucket. Temporary uploads auto-expire, passwords hashed with argon2id, and signups are agent-only: accounts are created by AI agents following /agents.txt — no invite codes, no human form.",
    tags: ["File Sharing", "Security", "Web"],
    span: 5,
  },
  {
    name: "Creator Vault",
    url: "https://cv.softmelody.dev/",
    icon: "vault",
    badge: { text: "Live", kind: "live" },
    desc: "A home for creators — exclusive posts and paid memberships. Publish gated content, monetize your audience, and keep ownership of your community.",
    tags: ["Creator Economy", "Memberships", "SaaS"],
    span: 7,
  },
  {
    name: "OpenPOS",
    url: "https://www.openpos.xyz/",
    icon: "pos",
    badge: { text: "Open Source", kind: "oss" },
    desc: "The intelligent point of sale — offline-first, real-time sync, cross-platform desktop, with AI-powered retail insights on the roadmap.",
    tags: ["POS", "Desktop", "Retail"],
    span: 4,
  },
  {
    name: "Flow",
    url: "https://github.com/dancaldera/flow",
    icon: "mic",
    badge: { text: "Open Source", kind: "oss" },
    desc: "Push-to-talk dictation for macOS. Hold fn, speak, release — text lands at your cursor. Lean, private, multi-provider STT.",
    tags: ["macOS", "STT", "Electron"],
    span: 4,
  },
  {
    name: "XDB",
    url: "https://github.com/dancaldera/xdb",
    icon: "db",
    badge: { text: "Open Source", kind: "oss" },
    desc: "Local database client for PostgreSQL, MySQL & SQLite — browse tables, run SQL, back up and restore, all from your browser.",
    tags: ["Databases", "Dev Tools"],
    span: 4,
  },
];

/** Counts derived from the list above, so the page never states a number the data doesn't back. */
export const productStats = {
  total: products.length,
  live: products.filter((p) => p.badge.kind === "live").length,
  oss: products.filter((p) => p.badge.kind === "oss").length,
};
