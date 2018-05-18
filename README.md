<p align="center">
  <a href="https://fe6.github.io/water" target="\_blank">
    <img width="400" src="https://avatars2.githubusercontent.com/u/38205290?s=400&u=e73d0e918dbf3d73a31c09ac28a2aee1d32b3044&v=4)](https://fe6.github.io/water" alt="水滴 - water">
  </a>
</p>

# 水滴 - water

[![Greenkeeper badge](https://badges.greenkeeper.io/fe6/water.svg)](https://greenkeeper.io/)
[![water 持续集成](https://img.shields.io/travis/fe6/water.svg?style=flat-square)](https://travis-ci.org/fe6/water)
[![Codecov 单元测试覆盖率](https://img.shields.io/codecov/c/github/fe6/water/master.svg?style=flat-square)](https://codecov.io/gh/fe6/water/branch/master)

>一套企业级的 UI 设计语言和 Vue.js 实现。

## 特性

- 提炼自企业级中后台产品的交互语言和视觉风格。
- 开箱即用的高质量 Vue.js 组件。
- 全链路开发和设计工具体系。
- 按需加载系统。

## 支持环境

| <img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/1215767/34348380-93e77ae8-ea4d-11e7-8696-9a989ddbbbf5.png" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :---------: | :---------: | :---------: | :---------: | :---------: |
| Yes | +9 | Yes | Yes | Yes |

## 需要的环境

- node.js >= 9.0.0
- npm >= 5.0.0

## 常用命令 ( package.json 的 scripts 中可以找到所有命令)

``` bash
# 安装依赖( package.json 中的 dependencies 部分 ) dependencies
npm install

# development 环境的本地热加载服务，访问地址: localhost:8080
# 在 config 中修改端口号
npm start

# 利用 jest 单元测试
npm test

# 打包组件库
npm run build

# 打包官网
npm run build:site

# 打包官网，打包并查看捆绑分析器报表
npm run build --report

# JavaScript 的代码规范监测
npm run eslint

# style 的代码规范监测
npm run stylelint

# 进行 style 和 JavaScript 的规范检测
npm run lint-staged

# 上传单元测试覆盖率报告
npm run codecov
```
