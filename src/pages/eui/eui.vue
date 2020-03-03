<template>
  <div>
    <div>
      <span>upload组件</span>
      
    </div>
    <div>
      <span>导出</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      imageUrl:''
    }
  },
  methods:{
    handleAvatarSuccess(res, file){
      console.log('创建对象前',res,file);
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log('创建对象后',this.imageUrl);
    },
    beforeAvatarUpload(){},
    // 导出
    exportClock() {
      let params = { }
      this.$fetch('接口名称', params, {
        responseType: 'arraybuffer'
      }).then(res => {
        let blob = new Blob([res])
        let fileName = '健康打卡统计.xls'
        try {
          window.navigator.msSaveOrOpenBlob(blob, fileName)
        } catch (e) {
          const link = document.createElement('a')
          link.download = fileName
          link.style.display = 'none'
          link.href = window.URL.createObjectURL(blob)
          document.body.appendChild(link)
          link.click()
          URL.revokeObjectURL(link.href) // 释放URL 对象
          document.body.removeChild(link)
        }
      })
    }
  }
}
</script>

<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>