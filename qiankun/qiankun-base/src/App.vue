<template>
  <div>
    <el-menu :router="true" mode="horizontal">
      <!-- 自己的路由 -->
      <el-menu-item index="/">Home</el-menu-item>
      <!-- 引用其它子应用 -->
      <el-menu-item index="/vue-app">Vue应用</el-menu-item>
      <el-menu-item index="/react-app">React应用</el-menu-item>
    </el-menu>
    <router-view></router-view>
    <div id="vueApp"></div>
    <div id="reactApp"></div>
  </div>
</template>
