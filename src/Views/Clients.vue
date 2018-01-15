<template>
  <body class="blue accent-1">
    <v-container>
    <v-layout row wrap>
    <v-flex xs12 mb-4>
       <h2 class="white--text clients">Clients</h2>
        <v-card class="indigo darken-3">
          <v-card-media src="static/img/s20banner.jpg" height="200px"></v-card-media>
          <v-card-text class="text-xs-center ml-1 white--text"><h4>Surrender@20 Website</h4></v-card-text>
          <v-card-actions>
            <v-btn color="primary" to="/Clients1">
              <v-icon left>arrow_forward</v-icon>
               More Info...
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 mb-4>
        <v-card class="indigo darken-3">
          <v-card-media src="static/img/LOLbanner.png" height="200px"></v-card-media>
          <v-card-text class="text-xs-center ml-1 white--text"><h4>League of legends Website</h4></v-card-text>
          <v-card-actions>
            <v-btn color="primary" to="/Clients2">
              <v-icon left>arrow_forward</v-icon>
               More Info...
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 mb-4>
        <v-card class="indigo darken-3">
          <v-card-media src="static/img/Blizzardbanner.jpg" height="200px"></v-card-media>
          <v-card-text class="text-xs-center ml-1 white--text"><h4>Blizzard Company Website</h4></v-card-text>
          <v-card-actions>
            <v-btn color="primary" to="/Clients3">
              <v-icon left>arrow_forward</v-icon>
               More Info...
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 pb-5>
        <v-card class="indigo darken-3">
          <v-card-media src="static/img/microsoftbanner.jpg" height="220px"></v-card-media>
          <v-card-text class="text-xs-center ml-1 white--text"><h4>Microsoft Website</h4></v-card-text>
            <v-card-actions>
              <v-btn color="primary" to="/Clients4">
                <v-icon left>arrow_forward</v-icon>
                 More Info...
              </v-btn>
            </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </body>
</template>

<style scoped>
  .clients{
    font-size: 270%;
    text-align: center;
    padding-bottom: 0.3cm;
  }
</style>