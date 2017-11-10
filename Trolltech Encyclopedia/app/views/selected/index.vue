<style lang='stylus' scoped>
	.content{
		background: #ccc;overflow-y: scroll;
	}
	.box{
		width: 97%;margin: 0 auto; background: #fff;
		padding-top: 5px;-webkit-background-origin: content-box;
		background-origin: content-box;
		background-clip:  content-box
	}
	.header{
		overflow-y: hidden;padding: 16px;
		.touxiang{
			border-radius: 9999px;overflow-y: hidden;width: 30px;height:30px;float: left;
			img{
				width: 100%;
			}
		}
		span.title{
			float: left;line-height: 30px;height: 30px;display: block;padding-left: 15px;
			color: #888;
		}
		span.jubao{
			border:1px solid #888;font-size: 12px;padding: 2px;float: right;
			border-radius: 3px;position: relative;top: 4px;color: #888;
		}
	}
	div.title{
		width: 93%;margin: 0 auto;

	}
	.img-content{
		width: 97%;margin: 5px auto;
		img{
			width: 100%;
		}
	}
	.footer{
		height: 60px;
		span{
			display: block;
			float: left;line-height: 36px;height: 36px;margin-top: 12px;margin-left: 10px;
			padding-left: 28px;color: #888;
		}
		span.like{
			margin-right: 20px;
			background: url(../../../assets/26_03.png) center left /25px 25px no-repeat;
		}
		span.dislike{
			background: url(../../../assets/26_05.png) center left /25px 25px no-repeat;
		}
		span.comment{
			float: right;margin-right: 50px;
			background: url(../../../assets/26_07.png) center left /25px 25px no-repeat;
		}
	}

</style>
<template>
	<div class="content" v-height="40">
		<vui-swiper :swiperSrc="swiperSrc"></vui-swiper>
		<div class="inner-box">
			<div class="box" v-for="item in mapList">
				<div class="header">
					<div class="touxiang" >
						<img :src="item.avatar" alt="">
					</div>
					<span class="title">{{item.user_name}}</span>
					<span class="jubao">举报</span>
				</div>
				<div class="title">
					<p>{{item.title}}</p>
				</div>
				<div class="img-content" v-for="child in item.media_data">
					<jpg v-if="child.format == 'JPEG'" :child="child"></jpg>
					<png v-if="child.format == 'PNG'" :child="child"></png>
					<gif v-if="child.format == 'GIF'" :child="child"></gif>
				</div>
				<div class="footer">
					<span class="like">{{item.like_start + item._incrs.like}}</span>
					<span class="dislike">{{item.dislike_start + item._incrs.dislike}}</span>
					<span class="comment">{{item.comment_total}}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import jpg from "../../components/jpg.vue"
import png from "../../components/png.vue"
import gif from "../../components/gif.vue"
import vuiSwiper from "../../components/swiper.vue"
	export default{
		data(){
			return{
				mapList:[],
				swiperSrc:[{
					src:"http://bq-img.peco.uodoo.com/qiqu/img/buz/banner/2074569f5bd1c3bea184848beb19092e.png",
					title:"小贱热词 · 第二期"
				},{
					src:"http://bq-img.peco.uodoo.com/qiqu/img/buz/banner/263e97fd04d9a14a6661d62488c6805c.jpg",
					title:"现在这个年代，没有几个表情包神辅助怎么混？"
				},{
					src:"http://bq-img.peco.uodoo.com/qiqu/img/buz/banner/7d534795a43ead0f5a8811fcd8d627f5.png",
					title :"奇趣伐木累形象大PK 快来投票吧！"
				}]
			}
		},
		created (){
			var vm = this
			this.axios.get("../../../data/data.json").then((res)=> {
				vm.mapList = res.data.mapList
			})
		},
		directives:{
			height:{
				inserted(el,binding){
					console.log(binding.value);
					var content = $(window).height() - binding.value
					$(el).height(content)
				}
			}
		},
		components:{
			jpg,png,gif,vuiSwiper
		}
	}
</script>