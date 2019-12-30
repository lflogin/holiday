<template>
  <div class="detail">
    <p class="detail-p">办公室调休申请表</p>
    <p>申请人姓名：<input type="text" v-model="user"></p>
    <p>直接主管： <input type="text" v-model="userbox"></p>
    <div>
      <h3>申请信息</h3>
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: '',
      userbox: '',
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date()
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
</style>
