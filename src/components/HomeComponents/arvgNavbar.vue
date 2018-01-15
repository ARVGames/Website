<template>
  <div>
    <v-toolbar dark class="blue darken-4">
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-md-and-up"></v-toolbar-side-icon>
      <router-link to = "/" tag="span" style="cursor: pointer">
        <v-btn left icon flat>
          <v-icon>home</v-icon>
        </v-btn>
      </router-link>
          <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: Pointer">ARVGames</router-link>
          </v-toolbar-title>
      <v-spacer/> 
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for=" item in menuItems" :key="item.title" router :to="item.link"> 
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer dark absolute temporary v-model="sideNav" class="blue darken-4 hidden-md-and-up">
        <v-list>
         <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link">
           <v-list-tile-action>
             <v-icon> {{item.icon}} </v-icon>
           </v-list-tile-action>
           <v-list-tile-content> {{item.title}} </v-list-tile-content>
         </v-list-tile>
        </v-list>
      </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'ARVGames',
        sideNav: false,
        menuItems:[
          {icon:'person',title:'About Us',link: '/quienesomos'},
          {icon:'web',title:'Clients',link: '/Clients'},
          {icon:'account_circle',title:'Sign Up',link: '/Signup'},
          
          
          ],
        }
      },
    filters: {
    capitalize: function (value) {
      return value.toLowerCase

  }
}
  };
</script>

<style>
  .btn--active, .list__tile--active {
    color: black !important;
  }
  v-toolbar{
    display: inline-block;
  }
</style>