<template>
  <div>
    <div>
      <h2>1.溢出单行省略号显示</h2>
      <div
        class="box1"
      >sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsfsdfsdfsdfdssssssssssssssssssssssssssssfsdfsdfsdf现场v现场v现场v现场v现场v撒旦发射点发射点手动阀手动阀士大夫撒地方士大夫士大夫十分撒旦发射点发射点夫士大夫士大夫士大夫士大夫的</div>
      <h2>2.溢出多行省略号显示</h2>
      <div
        class="box2"
      >sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsfsdfsdfsdfdssssssssssssssssssssssssssssfsdfsdfsdf现场v现场v现场v现场v现场v撒旦发射点发射点手动阀手动阀士大夫撒地方士大夫士大夫十分撒旦发射点发射点夫士大夫士大夫士大夫士大夫的</div>
    </div>
    <div class="xw_shadow clear">
      <h2>阴影与动画</h2>
      <div class="clear">
        <div class="shadow_box1 float_left"></div>
        <div class="float_left xw_transform">
          <img src="../../../static/pic/dsf.jpg" alt />
        </div>
      </div>
    </div>
    <div>
      <div>
        <p>
          <span>css伪类</span>
        </p>
        <p>作用：CSS 伪类用于向某些选择器添加特殊的效果。</p>
        <a class="pseudo_class" href="https://www.baidu.com/" target="right_body">百度</a>
      </div>
      <div class="pseudo_div">
        <p class="pseudo_p">
          <span>1</span>
          <span>2</span>
        </p>
        <p>
          <a href="#">second p first a</a>
          <a href="#">second p second a</a>
        </p>
        <ul>
          <li>first li</li>
          <li>second li</li>
        </ul>
      </div>
    </div>
    <!-- 无缝滚动 -->
    <div class="seamless_rolling">
      <ul class="seamless_rolling_ul" :class="{anim:animate===true}">
        <li class="seamless_rolling_li" v-for="(item,index) in dataList" :key="index">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animate: false,
      dataList: [
        { name: "JACK马" }, 
        { name: "雷布斯" }, 
        { name: "孙悟空" },
        { name: "步惊云" },
        { name: "QQ马" },
        { name: "唐昊" },
        { name: "哪吒" }
      ],
      timer:null, //定时器名称
    };
  },
  mounted() {
    this.timer = setInterval(
    this.scroll, 2000
  );
  },
  methods: {
    scroll() {
      this.animate = true;
      setTimeout(() => {
        this.dataList.push(this.dataList[0]);  // 将数组的第一个元素添加到数组的
        this.dataList.shift();
        this.animate = false;
      }, 500);
    }
  },
  beforeDestroy() {
    this.timer = null;
  }
};
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
  overflow: hidden;
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
  border: 1px solid rgb(50, 151, 132);
  overflow: hidden;
}
.xw_transform img {
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
}
.xw_transform:hover img {
  transform: scale(1.5, 1.5);
}
/* 锚伪类 样式 */
.pseudo_class:link {
  color: #ff0000;
}
.pseudo_class:visited {
  color: #00ff00;
}
.pseudo_class:hover {
  color: #ff00ff;
}
.pseudo_class:active {
  color: #0000ff;
}
/*  */
.pseudo_div:first-child {
  font-size: 24px;
}
p:first-of-type {
  color: red;
}
/* 无缝滚动 */
.seamless_rolling {
  width: 500px;
  margin: auto;
  height: 90px;
  overflow: hidden;
  padding-left: 30px;
  border: 1px solid #000;
  box-shadow: 0 0 10px 5px #000;
  margin-bottom: 10px;
}

.anim {
  transition: margin-top .5s;
  margin-top: -30px;
}
.seamless_rolling_li {
  height: 30px;
  line-height: 30px;
}
</style>