var fs = require("fs");
// const readline = require("readline");
const os = require("os");

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
    let componentPath, routerName;
    if (is_direc) {
      componentPath = "@/views/" + filename + "/index.vue";
      routerName = filename;
    } else {
      var [name, ext] = filename.split(".");
      if (ext != "vue") {
        continue;
      }
      componentPath = "@/views/" + filename;
      routerName = name;
      const contentFull = fs.readFileSync(`${vueDir}${filename}`, "utf-8");
      var match = /\<\!\-\-\s*(.*)\s*\-\-\>/g.exec(
        contentFull.split(os.EOL)[0]
      );
    }
    if (match) {
      routerName = match[1];
    }

    routers += `{path: '/${
      routerName === defaultHomePath ? "" : routerName
    }',name: '${routerName}', component: ()=> import(/* webpackChunkName: '${routerName}' */ '${componentPath}')},\n`;
  }

  const result = `// 该文件由gen-router.js自动生成，请勿手动修改
    import { createRouter, createWebHistory } from 'vue-router'

    const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes: [
        ${routers}
      ]
    })

    export default router`;

  fs.writeFile("./src/router/index.ts", result, "utf-8", (err) => {
    if (err) throw err;
    // 如果没有错误
    console.log("./src/router/router.ts 生成成功！");
  });
});
