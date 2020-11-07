# webpack + react + typescript + antd

## 安装

```
git clone https://gitee.com/meanyou/webpack-boilerplate.git
npm i
```

## 使用

### 启动开发环境

```bash
npm start
```

项目自动打开，默认端口8080

### 生产环境打包

普通打包
```bash
npm run build
```

生成sourcemap打包
```bash
npm run build_sourcemap
```

生成gzip打包
```bash
npm run build_compress
```

生成sourcemap和gzip打包
```bash
npm run build_sourcemap_compress
```

### 浏览项目

```bash 
npm i -g http-server
cd dist && http-server
```

### 一些提示

- 在src目录下面修改App.tsx即可开始编写业务代码
- 在 `/public` 目录下放静态资源，建议只用来存放一些外部js库，图片等资源放在 `/src` 下面让webpack编译
- 默认生产环境下publicPath为./，直接打开生成的index.html也可以浏览项目
- 项目默认集成了 `react` `react-router-dom` `redux` `react-redux` `typescript`
- 修改 `/tsconfig.json` 来配置typescript
