# component-template

> Vue.js 组件库模板

## 需要的环境

- node.js >= 9.0.0
- npm >= 5.0.0

## npm 淘宝镜像

[镜像](https://gist.github.com/iq9891/96441b1b01ddd4710e06cc5e52b9c10a)

## 兼容的浏览器

- 样式( CSS )部分

  - 每个浏览器的最后2个版本
  - 不支持 IE6，IE7， IE8
  - 支持iOS 7 以上，不包含7
  - Android >= 4.0


- 脚本( JavaScript ) 部分

  - 不支持 IE8 及其以下版本
  - 支持所有兼容 ECMAScript 5 的浏览器

## 常用命令 ( package.json 的 scripts 中可以找到所有命令)

``` bash
# 安装依赖( package.json 中的 dependencies 部分 ) dependencies
npm install ( npm i )

# development 环境的本地热加载服务，访问地址: localhost:8080
# 在 config 中修改端口号
npm start

# 利用 jest 单元测试
npm test
# 打包官网
npm run build

# 打包官网，打包并查看捆绑分析器报表
npm run build --report

# 打包组件库
npm run build:water

# JavaScript 的代码规范监测
npm run eslint

# style 的代码规范监测
npm run stylelint

# 进行 style 和 JavaScript 的规范检测
npm run lint-staged

# 上传单元测试覆盖率报告
npm run codecov
```

## 修改热加载服务的端口

在 `/config/index.js` 文件中修改

## 技术资源

- 样式( SASS )部分

  - [CSS 预处理器( SASS )](http://sass-lang.com)
  - [用JavaScript转换CSS的工具( Postcss )](http://postcss.org)
  - [允许您今天使用未来的CSS功能（包括自动补全 CSS3 的兼容浏览器前缀)](http://cssnext.io)
  - [解开嵌套( postcss-nested )](https://github.com/postcss/postcss-nested)
  - [祖先选择器解开嵌套( postcss-nested-ancestors )](https://github.com/toomuchdesign/postcss-nested-ancestors)
  - [属性解开嵌套( postcss-nested-props )](https://github.com/jedmao/postcss-nested-props)
  - [样式( sass )规范( stylelint )](https://stylelint.io)


- 脚本( JavaScript )部分

  - [JavaScript 新语法 ECMA-262( ES6 | ES2015 | ECMA2015  )](http://es6.ruanyifeng.com)
  - [框架( Vue2 )](https://vuefe.cn)
  - [路由管理( Vue-Router )](https://router.vuejs.org/zh-cn)
  - [状态管理( Vuex )](https://vuex.vuejs.org/zh-cn)
  - [Ajax请求的库( Axios )](https://github.com/mzabriskie/axios)
  - [页面切换进度插件( nprogress )](http://ricostacruz.com/nprogress)
  - [JavaScript规范( eslint )](http://eslint.cn)


- 环境搭建

  - [Node.js](https://nodejs.org/en)
  - [Webpack2](https://webpack.js.org)
