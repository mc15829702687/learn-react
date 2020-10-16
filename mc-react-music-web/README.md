# React实战之网易云音乐
### 1.1 项目简介

### 1.2 项目规范

**项目规范：项目中有一些规范和代码风格**

* 1.文件夹、文件名称统一使用小写，多个单词以连接符('-')连接；
* 2.javaScript变量名称采用小驼峰标识，常量全部使用大写字母，组件使用大驼峰标识；
* 3.CSS采用CSS和styled-component结合来编写（全局采用普通CSS、局部采用styled-component）；
* 4.整个项目不再使用class组件，统一使用函数式组件，并全面使用Hooks；
* 5.所有的函数式组件，为了避免不必要的渲染，全部使用memo进行包裹；
* 6.组件内部的状态使用useState、useReducer；业务数据全部放在redux中管理；
* 7.函数组件内部基本按着如下顺序编写代码：
  * 组件内部state管理；
  * redux的hooks代码；
  * 其他组件的hooks代码；
  * 其他业务逻辑代码；
  * 返回JSX代码；
* 8.redux代码规范如下：
  * redux结合immutableJS；
  * 每个模块有自己独立的reducer，通过combineReducer进行合并；
  * 异步请求代码使用redux-thunk，并且写在actionsCreators中；
  * redux直接采用redux hooks方式来编写，不再使用connect；
* 9.网络请求axios
  * 对axios进行二次封装；
  * 所有的模块请求会放到一个请求文件中单独管理；
* 10.项目中使用AntDesign
  * 项目中某些AntDesign中的组件会被拿过来使用；
  * 但是多部分组件还是自己进行编写；
* 其他规范在项目中根据实际情况进行决定和编写；



### 1.3 项目运行

clone项目：

```shell
  git clone 
```

安装项目依赖：

```shell
  npm install 或 yarn install
```

项目运行：

```shell
  npm run start 或 yarn start
```