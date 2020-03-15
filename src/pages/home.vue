<template>
  <div class="xw_body">
    <header class="home_header">
      <div class="header_main flex_row">
        <div class="header_content_box header_content_first">logo</div>
        <div class="header_content_box header_content_second">
          <ul class="clear">
            <li 
              class="float_left headerNav_li" 
              :class="{activeLi:activeId === item.id}" 
              v-for="(item,index) in headerNav" :key="index"
              @click='liActive(item)'>
              <span>
                {{item.name}}
              </span>
              <div class="triangle" v-show="activeId === item.id"></div>
            </li>
          </ul>
        </div>
        <div class="header_content_box header_content_third" >登录</div>
      </div>
    </header>
    <main class="home_main">
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
export default {
  name:'Home',
  data(){
    return {
      headerNav:[
        {id:'1',name:'样式',path:'/style'},
        {id:'2',name:'Echarts',path:'/echarts'},
        {id:'3',name:'组件',path:'/assembly'},
        {id:'4',name:'html5',path:'/html5'},
        {id:'5',name:'ElementUI',path:'/eui'},
        {id:'6',name:'antDesignVue',path:'/ant'},
        {id:'7',name:'菜单'},
      ],
      activeId:'1'
    }
  },
  methods:{
    liActive(item){
      this.activeId = item.id;
      if(item.path){
        console.log('菜单',item)
        this.$router.push({path:item.path,query:{}})
      }
    }
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
  margin: auto;
}
.header_content_box {
  height: 70px;
}
.header_content_first {
  width: 20%;
}
.header_content_second {
  width: 60%;
  line-height: 70px;
}
.headerNav_li {
  position: relative;
  padding: 0px 19px;
  cursor: pointer;
}
.headerNav_li:hover {
  background-color:#000; 
}
.activeLi {
  background-color: #000;
}
.header_content_third {
  width: 20%;
}
.home_main {
  width: 1100px;
  margin: auto;
  
}
.triangle {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom:0;
  width: 0;
  height: 0;
  border-width: 7px ;
  border-style: solid;
  border-color: transparent transparent red transparent;
}
</style>