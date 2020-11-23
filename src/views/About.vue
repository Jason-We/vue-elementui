<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="doPrint">执行打印</el-button>
    <div ref="print" id="printMe">
      <p>打印内容</p>
      <p class="no-print">非打印内容 方法1：添加no-print样式类</p>
      <p class="className">非打印内容 方法2：自定义类名</p>
    </div>
    <el-button v-print="printObj">打印</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        printObj: {
          id: "printMe",
          popTitle: 'good print',
        }
      };
    },
    methods: {
      print() {
        this.$print(this.$refs.print, { 'no-print': '.className' });
      },
      doPrint() {
        console.log('获取后台数据，生成打印格式');

      }
    },
  }
</script>