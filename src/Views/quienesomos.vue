<template>
  <div>
    <card-info
      :dev_name= "'Alexander Labrador'"
      :dev_title= "'Director'"
      :dev_profession= "'Web Developer'"
    >
    </card-info>
    <card-info
      :dev_name= "'Roberto Mendoza'"
      :dev_title= "'Creator'"
      :dev_profession= "'Web Designer'"
      >
      </card-info>
      
  </div>
</template>

<script>
  import CardInfo from "@/components/DevelopersInfo/CardInfo.vue"
  export default{
    components:{
      CardInfo
    }
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