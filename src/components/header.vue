<template>
     <div>
         <div class="header">
             <div class="headerLeft">
               <iframe src="https://tianqiapi.com/api.php?style=ta&skin=pitaya&color=fff&fontsize=16&city=象山" frameborder="0"></iframe>
             </div>
             <div class="back"  @click="goUrl('/','首页')" ></div>
             <div class="headerRight">
                 <div class="sort" :class="active=='/development'?'active':''" @click="goUrl('/development','产业发展')">产业发展</div>
                 <div class="sort" :class="active=='/traceability'?'active':''" @click="goUrl('/traceability','防伪溯源')">防伪溯源</div>
                 <div class="sort" @click="goUrl('/','一图感知')">一图感知</div>
                 <div class="sort" @click="goUrl('/','智能农业')">智能农业</div>
             </div>
         </div>
         <div class="footer">{{title}}</div>
     </div>
</template>

<script>
export default {
  name: 'tabbarHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
        active:'',
        title:'首页'
    }
  },
    methods:{
        goUrl(e,str){
            this.$router.push(e);
            this.active=e
            this.title=str
        }
    },
    mounted(){
        const to = window.location.hash;
        console.log(to)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {position: relative;z-index: 1;width:100%;height:98px;
        background-image: url("../assets/index/header.png");
        background-repeat: no-repeat;
        background-size: 100% 98px;
    }
    .back {width: 30%;height:85px;position: absolute;left: 30%;top:0;cursor: pointer;}
    .headerRight {float:right;margin-right: 40px;}
    .headerLeft {width: 30%;}
    .headerRight div {
        float:left;
        width:125px;height:34px;
        background-image: url("../assets/index/menu.png");
        background-repeat: no-repeat;
        background-size: 100% 34px;
        text-align: center;
        font-size: 14px;
        line-height: 28px;
        color: #8ca7f5;
        cursor: pointer;
    }
    .headerRight div.active {color: #f3ff2d;}
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
