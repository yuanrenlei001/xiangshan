<template>
  <div>
      <div class="footer">首页</div>
  </div>
</template>

<script>
export default {
  name: 'tabbarFooter',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer {position: fixed;z-index: 1;width:100%;height:59px;
        background-image: url("../assets/index/foot.png");
        background-repeat: no-repeat;
        background-size: 100% 59px;
        bottom:0;left:0;
        color: #fff;
        text-align: center;
        line-height: 88px;
        overflow: hidden;
    }
</style>
