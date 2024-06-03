import { HvAppShellVitePlugin } from "@hitachivantara/app-shell-vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const port = env.VITE_PORT || 5000;

  return {
    plugins: [
      react({}),
      HvAppShellVitePlugin({
        mode,
        modules: ["src/Home", "src/About", "src/Contact"],
      }),
    ],
    server: {
      port,
      strictPort: true,
    },
    preview: {
      port,
      strictPort: true,
    },
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  };
});
