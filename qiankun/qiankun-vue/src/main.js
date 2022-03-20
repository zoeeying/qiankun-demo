import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

let instance = null;
function render(props) {
  instance = new Vue({
    router,
    render: (h) => h(App),
    // 挂载到自己的HTML中，基座会拿到这个挂载后的HTML，插入到基座#vueApp元素中
  }).$mount("#app");
}

// qiankun将会在微应用bootstrap之前注入一个运行时的publicPath变量
// runtime publicPath主要解决的是微应用动态载入的脚本、样式、图片等地址不正确的问题
// 动态添加publicPath
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 应用独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap(props) {}

export async function mount(props) {
  // 父应用通过props传递数据过来
  // console.log(props);
  render(props);
}

export async function unmount(props) {
  instance.$destroy();
  instance = null;
}
