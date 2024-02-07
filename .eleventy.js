
const tasks = require("markdown-it-task-lists");

module.exports = function (cfg) {
  cfg.amendLibrary("md", mdLib => mdLib.use(tasks));
  cfg.addPassthroughCopy("img");
  cfg.addPassthroughCopy("css");
  cfg.addPassthroughCopy("fonts");
  // these started failing for no obvious reaon, creating docs/docs
  cfg.addPassthroughCopy("people/**/*.jpg");
  // cfg.addPassthroughCopy("**/*.png");
  // cfg.addPassthroughCopy("**/*.svg");
  // add this back if things are slow, but it requires running build before committing
  // cfg.setServerPassthroughCopyBehavior("passthrough");
  cfg.ignores.add("README.md");
  cfg.addCollection("wgsByTitle", function (collectionApi) {
    return collectionApi.getFilteredByTag('wg').sort(function (a, b) {
      return (a.data.title || 'Untitled Group').localeCompare(b.data.title || 'Untitled Group');
    });
  });
  cfg.addShortcode('personCard', function (id) {
    const p = getPersonBySlug(this, id);
    if (!p) return `<div class="person-card">Person not found: "${id}"</div>`;
    const img = p.data.pic ? `<img src="${p.url}${p.data.pic}" alt="Picture of ${p.data.title}"> ` : '';
    return `<a class="person-card" href="${p.url}">${img}${p.data.title}</a>`;
  });
  cfg.addShortcode('date', function () {
    return this.page.date.toISOString().replace(/T.*/, '');
  });
  return {
    dir: {
      output: "docs",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};

function getPersonBySlug (self, slug) {
  return self.ctx.collections.person.find(p => p.fileSlug === slug);
}
