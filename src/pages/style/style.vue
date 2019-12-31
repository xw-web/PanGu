<template>
  <div>
    <div>
      <h2>1.溢出单行省略号显示</h2>
      <div class="box1">
        sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsfsdfsdfsdfdssssssssssssssssssssssssssssfsdfsdfsdf现场v现场v现场v现场v现场v撒旦发射点发射点手动阀手动阀士大夫撒地方士大夫士大夫十分撒旦发射点发射点夫士大夫士大夫士大夫士大夫的
      </div>
      <h2>2.溢出多行省略号显示</h2>
      <div class="box2">
        sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsfsdfsdfsdfdssssssssssssssssssssssssssssfsdfsdfsdf现场v现场v现场v现场v现场v撒旦发射点发射点手动阀手动阀士大夫撒地方士大夫士大夫十分撒旦发射点发射点夫士大夫士大夫士大夫士大夫的
      </div>
    </div>
    <div class="xw_shadow">
      <h2>阴影与动画</h2>
      <div class="clear">
        <div class="shadow_box1 float_left"></div>
        <div class="float_left xw_transform">
          <img src="../../../static/pic/dsf.jpg" alt="">
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 单行省略号显示 */
.box1 {
  width: 300px;
  border: 1px solid red;
  width: 300px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
/* 多行文本显示 
  要确认文本是否溢出，溢出才能显示出需要的效果
*/
.box2 {
  width: 300px;
  border: 1px solid red;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
/* 阴影样式区域 */
.xw_shadow {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dashed #999;
}
.shadow_box1 {
  width: 300px;
  height: 300px;
  box-shadow: 0px 0px 10px 10px #999 inset;
  border: 1px solid red;
}

/* 动画 */
.xw_transform {
  margin: 10px;
  width: 300px;
  height: 300px;
  box-shadow: 0px 0px 5px 5px yellowgreen;
  border: 1px solid rgb(50,151,132);
  overflow: hidden;
}
.xw_transform img {
  width: 100%;
  height: 100%;
  transition: transform 0.5s; 
}
.xw_transform:hover img{
  transform: scale(1.5,1.5);
}
</style>