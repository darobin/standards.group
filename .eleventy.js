
module.exports = function (cfg) {
  cfg.addPassthroughCopy("img");
  cfg.addPassthroughCopy("css");
  cfg.addPassthroughCopy("fonts");
  cfg.addPassthroughCopy("**/*.jpg");
  cfg.addPassthroughCopy("**/*.png");
  cfg.addPassthroughCopy("**/*.svg");
  // add this back if things are slow, but it requires running build before committing
  // cfg.setServerPassthroughCopyBehavior("passthrough");
  cfg.ignores.add("README.md");
  cfg.addCollection("wgsByTitle", function (collectionApi) {
    return collectionApi.getFilteredByTag('wg').sort(function (a, b) {
      return (a.data.title || 'Untitled Group').localeCompare(b.data.title || 'Untitled Group');
    });
  });
  return {
    dir: {
      output: "docs",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
