<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<v-card class="buttom mb-5"  color="blue darken-2">
					<div class="title text-xs-center">
						<p class="white--text">Websites</p>
					</div>
					<v-card-media src="static/img/s20info.png" height="330px"></v-card-media>
					<v-card-text class="text-xs-center ml-3 white--text">
						<h4>Developers working on your best website for your product here, Beautiful design and clean Code1.</h4>
					</v-card-text>
					<v-card-actions>
						<v-layout wrap>
							<v-btn class="mb-1" to="/Clients">
							<v-icon left>web</v-icon>
							Previous page.
						</v-btn>
						</v-layout>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
  
</script>

<style scoped>
	h4{
		padding: 2px;
		text-align: center;
		margin-left: -30px;
	}
</style>
