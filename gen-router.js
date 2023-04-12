const fs = require("fs");

const vueDir = "./src/views/";
const defaultHomePath = "homeView";

fs.readdir(vueDir, function (err, files) {
  if (err) {
    console.log(err);
    return;
  }
  let routers = ``;
  for (const filename of files) {
    const stat = fs.statSync(vueDir + filename);
    const is_direc = stat.isDirectory();
    let componentPath, routerName, routerPath, match;
    if (is_direc) {
      componentPath = "@/views/" + filename + "/index.vue";
      routerPath = filename;
    } else {
      const [name, ext] = filename.split(".");
      if (ext != "vue") {
        continue;
      }
      componentPath = "@/views/" + filename;
      routerPath = name;
      const content = fs.readFileSync(`${vueDir}${filename}`, "utf-8");
      match = content.match(/name:\s*['"](.+)['"]/);
    }
    if (match) {
      routerName = match[1];
    } else {
      routerName = routerPath;
    }

    routers += `
    {path: '/${
      routerPath === defaultHomePath ? "" : routerPath
    }', name: '${routerName}', component: ()=> import(/* webpackChunkName: '${routerName}' */ '${componentPath}')},\n`;
  }

  const result = `// 该文件由gen-router.js自动生成，请勿手动修改
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ${routers}
  ]
});

export default router;`;

  fs.writeFile("./src/router/index.ts", result, "utf-8", (err) => {
    if (err) throw err;
    // 如果没有错误
    console.log("./src/router/router.ts 生成成功！");
  });
});
