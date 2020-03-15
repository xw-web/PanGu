<template>
  <div>
    <a-upload 
      name="file"
      :fileList="fileList"
      :beforeUpload="beforeUpload">
      <a-button> <a-icon type="upload" />上传文件</a-button>
    </a-upload>
  </div>
</template>

<script>
export default {
  name:'ant',
  data(){
    return{
      fileList:[
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
        }
      ]
    }
  },
  methods:{
    handleChange(info){
      console.log('info',info,'info.fileList',info.fileList);
      return false;
    },
    beforeUpload(file){
      console.log('file',file,'this.fileList',this.fileList);
      this.fileList.splice(0,1)
      let obj = {
          uid: '-1',
          name: 'obj.png',
          status: 'done',
        }
      setTimeout(() => {
        this.fileList.push(obj)
      },100);
      return false;
    }
  }
};
</script>

<style>
</style>