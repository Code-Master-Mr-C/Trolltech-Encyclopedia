<style lang='stylus' scoped>
	.box{
		width: 97%;margin: 0 auto; background: #fff;
		padding-top: 5px;
		-webkit-background-origin: content-box;
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
	.video-content{
		width: 97%;margin: 5px auto;position relative;


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
	<div>
		<div class="inner-box">
			<div class="box" v-for="item in videoSrc">
				<div class="header">
					<div class="touxiang">
						<img src="../../../assets/26_03.png" alt="">
					</div>
					<span class="title">123123</span>
					<span class="jubao">举报</span>
				</div>
				<div class="title">
					<p>{{item.title}}</p>
				</div>
				<div class="video-content">
					<vui-video :item="item"></vui-video>
				</div>
				<div class="footer">
					<span class="like">43</span>
					<span class="dislike">3</span>
					<span class="comment">9</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import VuiVideo from "../../components/video.vue"
export default {
	data() {
		return {
			videoSrc:[{
				src:"http://files.blueairplus.com/iqiyi/《爱妆达人》第132期.mp4",
				title : "《爱妆达人》第132期",
				id:"v01",
				videoBtn: "bofang",
				currentTime: 0,
				duration: 0,
				volume:1,
			},{
				src:"../../../assets/video/03.mp4",
				title : "03",
				id:"v03",
				videoBtn: "bofang",
				currentTime: 0,
				duration: 0,
				volume:1,
			}]
		}
	},

	components:{
		VuiVideo
	}
}
</script>