<template>
  <div class="detail">
    <p class="detail-p">办公室加班申请表</p>
    <p>申请人姓名：<input type="text" v-model="user"></p>
    <p>直接主管： <input type="text" v-model="userbox"></p>
    <div class="detail-send">
      <h3 class="detail-h3">申请信息</h3>
      <ul class="detail-ul">
        <li>
            <span class="demonstration">加班日期</span>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
        </li>
        <li>
          <span>加班类型</span>
          <select name="" id="" v-model="options">
            <option value="默认">默认</option>
            <option value="工作日加班">工作日加班</option>
            <option value="调休">调休</option>
          </select>
        </li>
        <li>
          <span>加班起始时间</span>
          <el-time-select
            v-model="value2"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30'
            }"
            placeholder="选择时间">
          </el-time-select>
        </li>
        <li>
          <span>加班截止时间</span>
          <el-time-select
            v-model="value3"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30'
            }"
            placeholder="选择时间">
          </el-time-select>
        </li>
        <li>
          <span>共计时数</span>
          <span>2</span>
        </li>
      </ul>
    </div>
    <div class="detail-ife">
      <h3>加班事由</h3>
      <textarea name="" id="" cols="30" rows="10" v-model="texts"></textarea>
    </div>
    <div class="detail-btn">
      <el-button @click="nobtn">取消</el-button>
      <el-button type="primary" @click="submit">提交</el-button>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'list'
    ])
  },
  data () {
    return {
      user: '',
      userbox: '',
      value1: '',
      value2: '',
      value3: '',
      options: '默认',
      texts: ''
    }
  },
  created () {
    // console.log(this.list[this.list.length - 1], 'detail---------')
  },
  watch: {
    value3 (v) {
      console.log(+v)
    }
  },
  methods: {
    // 点击确定
    submit () {
      const arr = {
        'name': this.user,
        'id': this.list[this.list.length - 1].id + 1,
        'isCheck': true,
        'tab2': this.userbox,
        'time': moment(this.value1).format('YYYY/M/D'),
        'isState': this.options,
        'starttime': this.value2,
        'endtime': this.value3,
        'regson': this.texts
      }
      console.log(arr, '------------')
      // 将新的数据发给vuex
      this.$store.commit('addvuex', arr)
      // 跳转页面
      this.$router.push({
        path: '/peding'
      })
    },
    // 点击取消
    nobtn () {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss">
  .detail {
    width: 100%;
    height: 100%;
  }
  .detail-p {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-bottom: 1px solid;
  }
  .detail-send {
    width: 100%;
  }
  .detail-h3 {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid;
  }
  .detail-ul {
    width: 100%;
    padding: 0 10px;
    li {
      width: 100%;
      height: 75px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .detail-ife {
    width: 100%;
    h3 {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid;
    }
    textarea {
      width: 100%;
      height: 50px;
    }
  }
  .detail-btn {
    width: 100%;
    height: 50px;
    display: flex;
    button {
      flex: 1;
      height: 100%;
    }
  }
</style>
