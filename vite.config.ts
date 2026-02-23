import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const isGitHubPages = mode === "ghpages";

  return {
    plugins: [react()],
    base: isGitHubPages ? "/raaj-portfolio-v2/" : "/",
  };
});