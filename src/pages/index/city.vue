<template>
	<section>
		<div class="city"  @click="cityShow">
	        <div class="index-city"><span>切换城市</span></div>
	    </div>
     	<div class="city-Box" v-show="cityIf">
	        <div class="city-content">
	            <div class="city-title">城市</div>
	            <div class="city-nav" id="cityNav">
	                <ul class="clearfix" id="oCityHeight">
						<li v-for="(city,k) in citys" :class=" k==cityK?'cityActive':''">
							<label>
								<input type="radio" v-model="cityK" :value="k">
								<span>{{city}}</span>
							</label>
						</li>
	                </ul>
	            </div>
             	<div class="city-btn" @click="cityHide">确认</div>
	        </div>  
        </div>          	
	</section>
</template>
<script>
	import '../../scss/city.scss';
	export default {
	    data:function(){
		    return {
		    	citys:['全部','北京','上海','天津','乌鲁木齐','安徽','福建','甘肃','贵州','海南','湖北','黑龙江','湖南','吉林','江苏'],
		    	cityK:1,
		    	cityIf:false,
		    }
	  	},
  	 	methods: {
		    cityShow:function(){
		    	this.cityIf=true;
		    	setTimeout(function(){
		    		var height=document.getElementById("oCityHeight").offsetHeight;
					var cityNav=document.getElementById("cityNav");
					if(height>150){
						cityNav.style.overflowY="scroll"
					};
		    	},50)
		    },
		    cityHide:function(){
		    	this.cityIf=false;
		    },
	  	}
}
</script>