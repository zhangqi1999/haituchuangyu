<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Header></Header>
    <router-view/>
    <!-- 网站页脚和备案信息 -->
    <Footer></Footer>
  </div>
</template>

<script> 
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
html,body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td, a, span, img {
        margin: 0 ;
        padding: 0;
        word-break: break-all;
        text-shadow: none;
    }
a{
    text-decoration:none;
  }
</style>
