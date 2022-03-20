import Vue from "vue";
import ElementUI from "element-ui";
import { registerMicroApps, start } from "qiankun";
import "element-ui/lib/theme-chalk/index.css";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(ElementUI);

const apps = [
  {
    name: "vueApp",
    // 默认会加载//localhost:5500的html，解析里面的js，是动态执行的
    // 内部用fetch来读取js文件的
    // 子应用必须支持跨域
    entry: "//localhost:5500",
    // 父应用中的容器元素id，用于挂载子应用
    container: "#vueApp",
    // 访问/vue-app时，把子应用挂载到元素#vueApp上
    activeRule: "/vue-app",
    props: { msg: "传递给vueApp的消息" },
  },
  {
    name: "reactApp",
    // http://localhost:6600
    entry: "//localhost:6600",
    container: "#reactApp",
    activeRule: "/react-app",
  },
];

// 注册应用
// 可以通过生命周期函数增加loading等效果
registerMicroApps(apps, {
  beforeMount() {},
  afterMount() {},
});

start({
  prefetch: false, // 取消预加载
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
