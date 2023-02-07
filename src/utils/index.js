import config from "./const.json";
import dclone from "./dclone";
import walk from "./walk";
import tpl from "./tpl";
import fs from "fs";

export async function add(pageName, option) {
  const repo = config.repo;
  const data = config.data;
  // 根据repo地址，加上页面名称，确定dclone的具体目录。
  const dir = repo + pageName;

  // 通过dclone稀疏索引，将目录内容下载下来
  // TODO：此处需要确认，是否需要将下载的内容移动到其他目录
  await dclone(dir);

  // 通过walk，获得目录下面的所有文件，flat之后，变成数据
  // 注意，walk是同步方法，此处不需要await
  const files = walk(pageName);

  // 遍历文件数组，进行模板替换
  files.forEach((file) => {
    const path = file.split(".").join("/");
    const tplString = fs.readFileSync(path).toString();
    const newString = tpl(tplString, data);
    fs.writeFileSync(path, newString);
  });
}
