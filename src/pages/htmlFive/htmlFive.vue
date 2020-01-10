<template>
  <div>
    <div>
      <video ref="video" width="320" height="240" controls="controls" >
        <source src="../../../static/video/movie.ogg" type="video/ogg" />
        <source src="../../../static/video/movie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  mounted(){
    console.log(this.$refs.video,'1')
    this.$refs.video.autoplay = 'autoplay'
    console.log(this.$refs.video,'2')
  },
  methods: {

  }
};
</script>

<style scoped>
</style>