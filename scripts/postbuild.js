// Runs automatically after `npm run build`.
//
// The site is a single-page app on GitHub Pages. A direct visit to a deep link
// such as /outreach-policy normally hits the 404.html redirect trick, which
// returns an HTTP 404 status before bouncing to the app. That is fine for
// people, but bad for reviewers and crawlers that check the status code.
//
// Copying the built index.html into a folder for each public route makes
// GitHub Pages answer with a real 200 and the full app shell.
const fs = require("fs");
const path = require("path");

const ROUTES = ["outreach-policy"];
const build = path.join(__dirname, "..", "build");
const indexHtml = path.join(build, "index.html");

for (const route of ROUTES) {
  const dir = path.join(build, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.copyFileSync(indexHtml, path.join(dir, "index.html"));
  console.log(`postbuild: wrote build/${route}/index.html`);
}
