// 运行时，子应用会被打包，并把导出的方法挂载到window对象上
module.exports = {
  configureWebpack: {
    output: {
      // 打包出来的lib库的名字是childVueProject，且是umd模块
      // umd模块会把bootstrap、mount、unmount方法挂载到window.childVueProject上
      library: "childVueProject",
      libraryTarget: "umd",
    },
    devServer: {
      port: 10000,
    },
  },
};
