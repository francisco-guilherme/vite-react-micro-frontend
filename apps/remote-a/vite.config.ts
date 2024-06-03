import { createRequire } from "node:module";
import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

const require = createRequire(import.meta.url);

// Read the package.json file from the current working directory.
const pkg = require(`${process.cwd()}/package.json`);

// Dependencies should be treated as external and not included in the bundle.
const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
].map((ext) => new RegExp(`^${ext.split("/")[0]}`));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const port = env.VITE_PORT || 5001;

  return {
    plugins: [react()],
    server: {
      port,
      strictPort: true,
    },
    preview: {
      port,
      strictPort: true,
    },
    build: {
      lib: {
        name: "remote-a",
        entry: path.resolve(__dirname, "src/App.tsx"),
      },
      rollupOptions: {
        output: [
          {
            format: "esm",
            preserveModules: true,
            entryFileNames: "[name].js",
            interop: "auto",
          },
        ],
        external,
      },
    },
  };
});
