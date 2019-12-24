<template>
  <div>
    <header class="home_header">
      <div class="header_main flex_row">
        <div class="header_first">1</div>
        <div class="header_second">
          <ul class="navList_ul clear">
            <li class="navList_li float_left" v-for="(item,index) in navList" :key="index">
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
        <div class="header_third">3</div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Home',
  data(){
    return {
      navList:[
        {id:'1',name:'Echarts'},
        {id:'2',name:'Echarts'},
        {id:'3',name:'Echarts'},
        {id:'4',name:'Echarts'},
        {id:'5',name:'Echarts'}
      ]
    }
  },
  methods:{

  }
}
</script>

<style scoped>
.home_header {
  height: 70px;
  background-color:#242424;
  border-bottom: 1px solid #000;
}
.header_main {
  width: 1100px;
  height: 100%;
  margin: auto;
}
.header_first {
  width: 10%;
}
.header_second {
  width: 78%;
}
.navList_ul {
  height: 100%
}
.navList_li {
  height: 100%;
  width: 20%;
  line-height: 70px;
  text-align: center;
  cursor: pointer;
}
.header_third {
  width: 10%;
}
</style>