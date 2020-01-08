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
          <ul class="flex_row">
            <li v-for="(item,index) in weekList" :key="index">
              {{item}}
            </li>
          </ul>
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
      weekList:['日','一','二','三','四','五','六']
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      this.getNowDate()
    },
    getNowDate(){
      let nowTime = new Date()
      let year = nowTime.getFullYear() + '';
      let month = nowTime.getMonth() + 1 ;
      if(month<9){
        month = '0'+month
      }
      let day = nowTime.getDate();
      if(day<9){
        day = '0' + day;
      }
      this.nowDate = year + '-' + month + '-' + day
      console.log('year',year,typeof year,'month',month,typeof month);
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
</style>