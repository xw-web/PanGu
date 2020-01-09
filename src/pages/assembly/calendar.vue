<template>
  <div>
    <div class="calendar_box">
      <div class="calendar_header flex_row">
        <div>left</div>
        <div>{{nowDate}}</div>
        <div>right</div>
      </div>
      <div class="calendar_date">
        <div class="week_box">
          <!-- 周 -->
          <ul class="flex_row">
            <li  class="week_li" v-for="(item,index) in weekList" :key="index">
              {{item}}
            </li>
          </ul>
          <!-- 月天数 -->
          <div class="flex_wrap">
            <!-- 上个月的天数 -->
            <div class="day_box" v-for="(item,index) in preMonthWeekDay" :key="index+'p'">
              {{preMonthDays - preMonthWeekDay + item}}
            </div>
            <div class="day_box" v-for="(item,index) in monthDays" :key="index">
              {{item}}
            </div>
            <div class="day_box" v-for="(item,index) in lastMontyDays" :key="index+'l'">
              {{item}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      nowDate:'',
      weekList:['日','一','二','三','四','五','六'],
      daysList:[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      monthDays:0,
      preMonthWeekDay:0,
      preMonthDays:31,
      lastMontyDays:31,
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      this.getNowDate()
    },
    // 获取当前的年月日
    getNowDate(){
      let nowTime = new Date()
      let year = nowTime.getFullYear() + '';
      let month = nowTime.getMonth() + 1 ;
      this.getpreMonthDays((month - 1));
      
      // 获取当月天数
      this.monthDays = this.daysList[month - 1];
      if(month<9){
        month = '0'+month
      }
      let day = nowTime.getDate();
      if(day<9){
        day = '0' + day;
      }
      this.nowDate = year + '-' + month + '-' + day;
      console.log('year',year,typeof year,'month',month,typeof month);
      // 设置本月的一号
      let firstDay = year + '-'+ month + '-1';
      let lastDay = year + '-' + month + '-' + (this.daysList[month-1] + '');
      this.setUpfirstDay(firstDay)
      this.getLastMonthDays(lastDay)
    },
    setUpfirstDay(firstDay){
    // 获得本月的1号是周一
    let weekDay = new Date(firstDay).getDay();
    // 在1号前面填充多少个上个月的日期
    this.preMonthWeekDay = weekDay === 7 ? 0 : weekDay; 
    },
    // 获取上个月的天数
    getpreMonthDays(month){
      if((month + '') === '0'){
        this.preMonthDays = 31
      } else {
        this.preMonthDays = this.daysList[month-1]
      }
    },
    // 设置月末下个月的天数
    getLastMonthDays(lastDay){
      console.log('lastDay',lastDay);
      let lastWeekDay = new Date(lastDay).getDay();
      this.lastMontyDays = lastWeekDay === 7 ? 6 : 6 - lastWeekDay
    }
  }
}
</script>

<style scoped>
.calendar_box {
  margin-top: 10px;
  width: 500px;
  height: 500px;
  margin: auto;
  border: 1px solid #000;
  box-shadow: 0 0 5px 5px #000;
}
.calendar_header {
  padding: 10px 20px;
}
.week_box {
  padding: 0 20px;
}
.week_li {
  text-align: center;
  width: 14%;
  border: 1px solid #000;
}
.day_box {
  width: 14%;
  text-align: center;
  border: 1px solid red; 
}
</style>