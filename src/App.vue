<template>
  <div id="app">
    <Main></Main>
    <login></login>
    <!-- <router-link to="/hello">hello</router-link>
    <router-view></router-view> -->
  </div>
</template>

<script>
import Login from './views/Login.vue';
import Main from "./views/Main.vue";
export default {
  name: "App",
  components: {
    // pageA,
    Main,
    Login,
  },
  data() {
    return {
      
    }
  },
  mounted(){
    // console.log(JSON.stringify(this.orderData));
  }
};
</script>

<style>
html,
body {
  margin: 0 auto;
  padding: 0;
}
#app {
  height: 100vh;
}
</style>
