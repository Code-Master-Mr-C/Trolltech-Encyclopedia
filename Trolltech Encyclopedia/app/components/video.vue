<style lang='stylus'>
    video{
        width: 100%;
    }
    .kongshiqi{
     overflow :hidden;position: relative;
    .play{
        height :40px;width:40px;background :rgb(0,0,0);color:#fff;
        line-height:40px;z-index :2; ;text-align :center;float left;
    }
    .currentBar{
        position :absolute;width:70%;left :40px;
        .duration{
            height 3px;float left;background :red;display:block;width:100%;margin-top:18px;
        }
        .currentTime{
            height 3px;background :green;display:block;top:18px;
            position :absolute;
        }
    }

}
</style>
<template>
    <div>
        <video :src="item.src" :id="item.id">您的浏览器不支持video</video>
        <div class="kongshiqi">
            <p class="play" @click="play(item)">{{item.videoBtn}}</p>
            <p class="currentBar">
                <span class="duration" @click="durationClick(item,$event)"></span>
                <span class="currentTime" @click="durationClick(item,$event)" :style="{width : item.currentTime / item.duration * 100 + '%'}"></span>
            </p>
            <p>{{item.duration | duration}} / {{item.currentTime | duration}}</p>
            <p>
                <input type="range" min="0" max="1" step="0.01" style="width:100%" v-model="item.volume" @change="changeVolume(item)">
                <span>{{item.volume}}</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    props: ["item"],
    data() {
        return {

        }
    },
    methods: {
		play(item) {
			var vm = this;
			var videoBox = document.getElementById(item.id);
			if (this.item.videoBtn == "bofang") {
				vm.item.duration = videoBox.duration;
				videoBox.play();
				this.item.videoBtn = "zanting"
				var currentTimer = setInterval(function() {
					vm.item.currentTime = videoBox.currentTime
				}, 1000)
			} else if (this.item.videoBtn == "zanting") {
				videoBox.pause();
				clearInterval(currentTimer)
				this.item.videoBtn = "bofang"
			}
        },
        changeVolume(item){
            var videoBox = document.getElementById(item.id);
            videoBox.volume = item.volume
        },
        durationClick(item,event){
            var videoBox = document.getElementById(item.id);
            var currentSrc = event.clientX - ($(".box").outerWidth(true) - $(".box").width()) - 40
            var percentageCurrentTime = currentSrc / $(".duration").outerWidth(true);
            console.log(parseInt(videoBox.duration * percentageCurrentTime))
            videoBox.currentTime = parseInt(videoBox.duration * percentageCurrentTime)
        }
	},
    filters: {
		duration(s) {
			var t;
			if (s > -1) {
				var hour = Math.floor(s / 3600);
				var min = Math.floor(s / 60) % 60;
				var sec = s % 60;
				if (hour < 10) {
					t = '0' + hour + ":";
				} else {
					t = hour + ":";
				}

				if (min < 10) { t += "0"; }
				t += min + ":";
				if (sec < 10) { t += "0"; }
				t += sec.toFixed(2);
			}
			return t;
		}

	}
}
</script>


