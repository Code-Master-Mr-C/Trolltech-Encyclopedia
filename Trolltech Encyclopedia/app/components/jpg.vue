<style lang='stylus' scoped>
	
</style>
<template>
	<img v-lazy="child.wifi_img_url" alt="">
</template>
<script>
	export default{
		props:["child"],
		data(){
			return{

			}
		}
	}
</script>