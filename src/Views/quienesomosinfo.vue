<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <div class="title text-xs-center pt-4 pb-3">
            <p class="grey--text">Websites</p>
          </div>
          <v-card-media src="static/img/banner4.png" height="130px" contain></v-card-media>
          <v-card-text class="text-xs-center ml-3 grey--text">
            <h4>Developers working on your best website for your product here, Beautiful design and clean Code4.</h4>
          </v-card-text>
          <v-card-actions>
            <v-btn router to="/quienesomos">
              <v-icon left>person</v-icon>
              Previous Page
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style scoped>
  h4{
    padding: 2px;
    text-align: center;
    margin-left: -30px;
  }
  .buttom{
    margin-left: 20.8cm;
  }
</style>
