# vue-case

使用 vue3 + typescript + vite 案例 demo。

## `gen-router.js`自动生成路由文件

需要在`package.json`中配置启动打包时运行`gen-router.js`

```
"scripts": {
   "dev": "node gen-router.js && vite",
   "build": "node gen-router.js && run-p type-check build-only",
   "preview": "node gen-router.js && vite preview",
   "build-only": "node gen-router.js && vite build"
}
```

- 获取`views/`下的当前文件夹或文件名称作为路由的`path`
- 检索`.vue`文件中是否存在`name`，若不存在且为`views/`下无文件夹包裹的单文件则取当前单文件的名称，否则取`views/`下的当前文件夹名称
- 默认结构为每个路由访问的`.vue`文件都存放在一个文件夹内，命名为`index.vue`，`component`为`"@/views/" + 文件夹名称 + "index.vue"`，直接放在`views/`下单文件的`component`为`"@/views/" + 文件名称`
- `gen-router.js`根据`views/`目录下的文件以及文件夹名称来自动获取路由信息并生成文件，目录结构如下：
  ![avatar](/public/tree.png)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
