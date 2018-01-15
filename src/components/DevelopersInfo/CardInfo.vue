<template>
<v-flex xs12>
  <v-card color="blue darken-2" class="white--text mt-3 mb-2">
    <v-container>
      <v-layout row wrap>
        <v-flex xs3>
          <v-card-media src="/static/img/coologo.jpeg" height="200px" contain></v-card-media>
          <v-card-text> <h4> {{dev_name}} </h4></v-card-text>
          <p class="texto"><h4> {{dev_title}} </h4></p>
          <p class="texto"><h4> {{dev_profession}} </h4></p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</v-flex>
</template>

<script>
  export default{
    props:{
    dev_name: '',
    dev_title: '',
    dev_profession: ''
    },
  }
</script>

<style scoped>
	h4{
		padding: 2px;
		text-align: center;
		margin-left: -30px;
	}
	.texto{
		margin-left: 10cm;
	}
	</style> 