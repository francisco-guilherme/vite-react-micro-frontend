export default () => {
  return {
    mainPanel: {
      views: [
        { bundle: "@self/Home.js", route: "/" },
        { bundle: "@self/About.js", route: "/about" },
        { bundle: "@self/Contact.js", route: "/contact" },
      ],
    },
  };
};
