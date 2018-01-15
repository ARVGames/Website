<template>
  <div class="mb-5">
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large class="blue darken-4" router to="/quienesomos">About Us</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large class="blue darken-4" router to="/Clients">Clients</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex class="xs12 sm6 offset-sm3">
        <v-container>
          <v-carousel>
            <v-carousel-item  v-for="meetup in meetups" :src="meetup.imageUrl" :key="meetup.id"></v-carousel-item>
          </v-carousel>
      </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        meetups: [
          { imageUrl: 'static/img/coologo.jpeg', id: 'prueba prueba', title: 'God Fist Lee sin'},
          { imageUrl: 'static/img/logocool.jpeg', id: 'prueba prueba', title:'Muay Thai Lee sin'}
        ]
      }
    }
  }
</script>