var ejs = require("ejs");

export function tpl(str, data) {
  return ejs.render(str, data, options || {});
}
