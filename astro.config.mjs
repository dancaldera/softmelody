import { defineConfig } from "astro/config";

// GitHub Pages serves this repo at /softmelody; Vercel and local builds
// serve from the domain root, so only apply the base path in CI.
const onGitHubActions = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: onGitHubActions
    ? "https://dancaldera.github.io"
    : "https://softmelody.dev",
  base: onGitHubActions ? "/softmelody" : "/",
});
