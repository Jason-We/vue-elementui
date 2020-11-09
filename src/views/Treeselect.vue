<template>
  <div class="search-box">
    <el-row :gutter="25">
      <el-col :span="3">
        <div>
          <el-select v-model="value1" placeholder="按机构名查询">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="3">
        <div>
          <el-input v-model="input" placeholder="请输入订单号"></el-input>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="至"
            start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions">
          </el-date-picker>
        </div>
      </el-col>
      <el-col :span="3">
        <div>
          <el-button type="primary" icon="el-icon-search" @click="handleSleect">搜索</el-button>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '呼和浩特市邮政局'
        }, {
          value: '选项2',
          label: '巴彦淖尔市邮政局'
        }, {
          value: '选项3',
          label: '包头市邮政局'
        }, {
          value: '选项4',
          label: '乌兰察布市邮政局'
        }, {
          value: '选项5',
          label: '锡林郭勒盟邮政局'
        }],
        value1: [],
        value2: '',
        input: '',
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
      }
    },
    methods: {
      handleSleect() {
        console.log(this.value1);
        console.log(this.input);
        console.log(this.value2[0]);
        console.log(this.value2[1]);
      }
    },

  }
</script>

<style>
  .search-box {
    margin-top: 10px;
    height: 80px;
    max-height: 120px;
    border: 1px solid rgb(24, 20, 20);
  }

  .el-row {
    margin-top: 10px;
  }

  .el-col {
    margin-left: 10px;
  }
</style>