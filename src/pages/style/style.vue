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
</style>