<style lang='stylus' scoped>
	.swiper-slide{
		position: relative;
		img{
			width: 100%;
		}
		p{
			position: absolute;bottom:0;left:0;width: 100%;height: 40px;padding: 5px;
			background: rgba(0,0,0,0.6);color: #fff;font-size: 14px;box-sizing:border-box;
		}
	}
</style>
<template>
	<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide" v-for="item in swiperSrc">
				<img :src="item.src" alt="">
				<p>{{item.title}}</p>
	        </div>
	    </div>
	    <div class="swiper-pagination"></div>
	</div>
</template>
<script>
	import Swiper from "../../lib/swiper-3.4.2.min.js"
	export default{
		props:["swiperSrc"],
		data(){
			return{

			}
		},
		mounted(){
			var mySwiper = new Swiper ('.swiper-container', {
			    loop: true,
			    pagination: '.swiper-pagination'
			})
		}
	}
</script>