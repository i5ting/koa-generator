import { dclone } from "dclone";

export function clone(dir) {
  // 检查当前是否是git管控

  return dclone({
    dir: dir,
  });
}
