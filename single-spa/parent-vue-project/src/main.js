import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerApplication, start } from "single-spa";

Vue.config.productionTip = false;

async function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

registerApplication(
  "childVueProject",
  async () => {
    // systemJS
    // 动态创建script标签，并引入该文件
    await loadScript("http://localhost:10000/js/chunk-vendors.js");
    await loadScript("http://localhost:10000/js/app.js");
    // window.childVueProject中有子应用的bootstrap、mount、unmount方法
    return window.childVueProject;
  },
  (location) => location.pathname.startsWith("/child-vue-project"),
  { msg: "传递到子应用的数据" }
);
start();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
