import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import singleSpaVue from "single-spa-vue";

Vue.config.productionTip = false;

// 对于使用了动态路由的子应用，在切换路由时，无法找到JS文件
// 需要配置打包后的文件引用路径
if (window.singleSpaNavigate) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = "http://localhost:10000/";
}

// 子应用单独运行
if (!window.singleSpaNavigate) {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
}

const appOptions = {
  // 挂载到父应用中id为childVueProjectContainer的元素中
  el: "#childVueProjectContainer",
  router,
  store,
  render: (h) => h(App),
};

const lifeCycle = singleSpaVue({
  Vue,
  appOptions,
});

// 协议接入，父应用会调用这些方法
// 父应用加载子应用，需要将子应用打包成一个个lib，给父应用使用
export const bootstrap = lifeCycle.bootstrap;
export const mount = lifeCycle.mount;
export const unmount = lifeCycle.unmount;
