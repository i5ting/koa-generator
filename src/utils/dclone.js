var dclone = require("dclone");

export function dclone(dir) {
  return dclone({
    dir: dir,
  });
}
