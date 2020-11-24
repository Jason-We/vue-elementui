<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/table">Table</router-link> |
      <router-link to="/select">Select</router-link>
    </div>
    <router-view></router-view>
    <webview style="width:0;height:0;" :src="html" nodeintegration></webview>
  </div>
</template>

<script>
  const absPath = fileNameOrFolder => {
    //获取根目录，开发环境与安装环境区别
    const path = require('path');
    let route = process.env.NODE_ENV == 'development' ?
      `../../../../${fileNameOrFolder}` : `../${fileNameOrFolder}`;
    return path.join(process.resourcesPath, route);

  }
  export default {
    name: 'app',

    data() {
      return {
        html: absPath('print/print.html')
      }
    },
    created() {
      //初始化监听，然后在你想用的地方调用this.$Printer.printPage()传入你想打印的dom结构
      this.$Printer.bindIpcMessage()
    }

  }


</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>