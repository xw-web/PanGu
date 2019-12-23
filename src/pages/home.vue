<template>
  <div>
    <header class="home_header">
      <div class="header_main">

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
}
</style>