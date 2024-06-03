import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const port = env.VITE_PORT || 5000;
  const remoteA = env.VITE_REMOTE_A || "http://localhost:5001";
  const remoteB = env.VITE_REMOTE_B || "http://localhost:5002";

  return {
    plugins: [
      react(),
      federation({
        name: "host",
        remotes: {
          remoteA: `${remoteA}/assets/remoteEntry.js`,
          remoteB: `${remoteB}/assets/remoteEntry.js`,
        },
        shared: { ...pkg.dependencies },
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
