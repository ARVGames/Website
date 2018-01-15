<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<v-card class="mb-2">
					<div class="title text-xs-center pt-4 pb-3">
						<p class="grey--text">Websites</p>
					</div>
					<v-card-media src="static/img/banner4.png" height="130px" contain></v-card-media>
					<v-card-text class="text-xs-center ml-3 grey--text">
						<h4>Developers working on your best website for your product here, Beautiful design and clean Code.</h4>
					</v-card-text>
					<v-card-actions>
						<v-btn to="/quienesomosinfo">
							<v-icon left>arrow_forward</v-icon>
							More Info...
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
			<v-flex xs12>
				<v-card color="blue darken-2" class="white--text mt-3 mb-2">
          <v-container>
            <v-layout row wrap>
              <v-flex xs3>
                <v-card-media src="/static/img/coologo.jpeg" height="200px" contain></v-card-media>
                <v-card-text> <h4>Alexander Labrador</h4></v-card-text>
                <p class="texto"><h4>Director</h4></p>
                <p class="texto"><h4>Web Developer</h4></p>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
			</v-flex>
      <v-flex xs12>
        <v-card color="blue darken-2" class="white--text mb-5">
          <v-container>
            <v-layout row wrap>
              <v-flex xs3>
                <v-card-media src="/static/img/coologo.jpeg" height="200px" contain></v-card-media>
                <v-card-text> <h4>Roberto Mendoza</h4></v-card-text>
                <p class="texto"><h4>Creator</h4></p>
                <p class="texto"><h4>Web Designer</h4></p>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
		</v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-md2>
       <v-card class="carta" color="blue darken-2">
        <v-container fluid>
          <v-layout row>
            <v-flex xs5 sm4 md3>
              <v-card-media src="static/img/ARVG140.png" height="130px"></v-card-media>
              <v-card-text> <h4>Roberto Mendoza</h4></v-card-text>
                <p class="texto"><h4>Creator</h4></p>
                <p class="texto"><h4>Web Designer</h4></p>
            </v-flex>

            
            <!-- hacia abajo es pura prueba -->
            

            <v-flex xs7 sm9>
              <v-card-title>
                <div>
                  <h2 >ARVGames</h2>
                </div>
              </v-card-title>
                <div class="text-xs-left ml-3">
                  Developers working on your best website for your product here, Beautiful design and clean Code.
                </div>
            </v-flex>
          </v-layout>
        </v-container>
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
	.texto{
		margin-left: 10cm;
	}
	</style> 