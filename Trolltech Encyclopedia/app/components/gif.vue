<style lang='stylus' scoped>
	div{
		position: relative;
		img{
			width: 100%;
		}
		p{
			position: absolute;top: 50%;left: 50%;height: 50px;width: 50px;
			background: rgba(0,0,0,0.7);border-radius: 9999px;text-align: center;
			line-height: 50px;color:#fff;transform: translate(-50%,-50%);
		}
	}
</style>
<template>
	<div>
		<v-touch tag="p" @tap="play" v-show="isShowPlay">play</v-touch>
		<img v-lazy="child.wifi_img_url" alt="">
	</div>
</template>
<script>
	export default{
		props:["child"],
		data(){
			return{
				isShowPlay : true
			}
		},
		methods:{
			play(){
				this.child.wifi_img_url = this.child.origin_img_url.origin_pic_url;
				this.isShowPlay = false
			}
		}
	}
</script>