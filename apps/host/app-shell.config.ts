import { loadEnv } from "vite";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    apps: {
      remoteA: env.VITE_REMOTE_A || "http://localhost:5001",
      remoteB: env.VITE_REMOTE_B || "http://localhost:5002",
    },

    mainPanel: {
      views: [
        { bundle: "@self/Home.js", route: "/" },
        { bundle: "@self/About.js", route: "/about" },
        { bundle: "@self/Contact.js", route: "/contact" },
        {
          bundle: "remoteA/Home.js",
          route: "/remoteA/",
        },
        {
          bundle: "remoteA/About.js",
          route: "/remoteA/about",
        },
        {
          bundle: "remoteA/Contact.js",
          route: "/remoteA/contact",
        },
        {
          bundle: "remoteB/Home.js",
          route: "/remoteB/",
        },
        {
          bundle: "remoteB/About.js",
          route: "/remoteB/about",
        },
        {
          bundle: "remoteB/Contact.js",
          route: "/remoteB/contact",
        },
      ],
    },
  };
};
