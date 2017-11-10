<style lang='stylus' scoped>

 	.tabNav{
 		list-style: none;overflow: hidden;background-color: #ffb000;
 		li{
 			float: left;width: 25%;height: 40px;text-align: center;line-height: 40px;
 		}
 		li.cur{
 			color: red;
 			font-weight: bold;
 		}
 	}

</style>
<template>
  <div  >
     <ul class="tabNav">
     	<v-touch tag="li" v-for="(item,index) of tabNav" :class="{cur : item.click}"  @tap="routerGo(item.url,index)">{{item.title}}</v-touch>
     </ul>
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
       tabNav:[{
       	title : "精选",
       	click:true,
       	url : "/selected"
       },{
       	title : "视频",
       	click:false,
       	url : "/video"
       },{
       	title : "段子",
       	click:false,
       	url : "/satin"
       },{
       	title : "发现",
       	click:false,
       	url : "/find"
       }]
    }
  },
  methods:{
  	routerGo(url,index){
  		router.push({"path" : url});
  		this.tabNav.forEach(function(item){
  			item.click = false
  		});
  		this.tabNav[index].click = true
  	}
  }
}
</script>

