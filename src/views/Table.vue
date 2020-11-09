<template>
  <div>
    <h3>第一种导出excel方法</h3>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="table">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="sex" label="性别" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
          <download-excel class="blueBtn" :data="tableData" :fields="json_fields" name="用户统计列表" type="xlsx">
            <el-button type="primary" size="medium">导出至Excel</el-button>
          </download-excel>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <h4>导出方法 使用的是vue-json-excel插件，需要npm install vue-json-excel 下载插件。具体操作可参考 <el-link
              href="https://blog.csdn.net/qq_26282869/article/details/88640788" target="_blank" type="success"
              :underline="false">blog</el-link>
          </h4>
          <h4>项目入口文件main.js引进注册并且使用:</h4>
          <p>import JsonExcel from 'vue-json-excel'</p>
          <p>Vue.component('downloadExcel', JsonExcel)</p>
          <h5>
            其他参考blog：
          </h5>
          <el-link href="https://www.cnblogs.com/zengjielin/p/9667476.html" target="_blank" type="success"
            :underline="false">blog1</el-link>
          <span> || </span>
          <el-link
            href="https://blog.csdn.net/qq_42313028/article/details/103069876?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~sobaiduend~default-3-103069876.nonecase&utm_term=vue%E5%81%9A%E4%B8%80%E4%B8%AA%E5%AF%BC%E5%87%BA%E8%A1%A8%E6%A0%BC%E7%9A%84%E5%8A%9F%E8%83%BD&spm=1000.2123.3001.4430"
            target="_blank" type="success" :underline="false">blog2</el-link>
        </div>
      </el-col>
    </el-row>
    <h3>第二种导出excel方法</h3>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="table">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
          <el-button type="primary" size="medium" @click="exportExl">导出至Excel</el-button>
        </div>
      </el-col>
      <el-col :span="12">
        <h4>此方法有问题，xlsx.js调用的库依赖有问题，报错</h4>
        <p>[Vue warn]: Error in v-on handler: "TypeError: Cannot read property 'getElementsByTagName' of null"</p>
      </el-col>
    </el-row>
  </div>



</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          sex: '男',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          sex: '男',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          sex: '男',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          sex: '男',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        json_fields: {
          '日期': 'date',
          '姓名': 'name',
          '地址': 'address'
        }
      }

    },
    methods: {
      exportExl() {
        this.excel_export.exportExcel('表格名称', 'id1')
      }
    },
  }
</script>
<style>
  .blueBtn {
    margin-top: 10px;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
    border-radius: 4px;
  }
</style>