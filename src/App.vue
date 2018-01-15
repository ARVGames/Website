<template>
  <v-app>
    <arvg-navbar/>
    <router-view/>
    <arvg-footer/>
  </v-app>
  
</template>

<script>
  import arvgNavbar from "./components/HomeComponents/arvgNavbar"
  import arvgFooter from "./components/HomeComponents/arvgFooter"

  export default {
    components:{
      arvgNavbar,
      arvgFooter
    }
  }
</script>

<style>
  
</style>