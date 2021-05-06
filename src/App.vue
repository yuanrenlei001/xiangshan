<template>
  <div id="app">
      <v-header v-if="tabbarHeader" />
    <router-view/>
  </div>
</template>

<script>
    import header from './components/header'
export default {
  name: 'App',
    data(){
      return {
          tabbarHeader:true,
      }
    },
    components: {
        'v-header':header,
    },
}
</script>

<style>
    *{
        margin:0;padding:0;  outline: 0;  vertical-align: baseline;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
    html em {color: #fff !important;font-size: 22px;}
    html,body{overflow: hidden;}
    body {margin: 0;padding: 0;}
    html ,body, #app {width:100%;height:100%;}
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-image: url("./assets/index/bg.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100vh;
    }
    a, a:link, a:visited{
        text-decoration:none;
    }
    ul {

        list-style:none;

    }
</style>
