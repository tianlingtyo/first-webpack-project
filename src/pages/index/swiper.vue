<template>
	 <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="todo in todos">
            	<router-link :to="'/details/'+todo.id">
            		<img :src="todo.img" class='pull-img'>
            	</router-link>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
    import '../../scss/swiper.scss';
    export default {
       mounted:function() {
	      	var mySwiper = new Swiper('.swiper-container', {
	         pagination: '.swiper-pagination',
	        paginationClickable: true,
	        autoplay : 5000,
	        autoplayDisableOnInteraction : false,  
	        loop: true
	      })
    	},
    	data:function(){
    		return {
	    		todos:[
	    			{img:'./src/img/event-1461815814017-4963.jpg',id:1},
	    			{img:'./src/img/event-1462327721843-1860.jpg',id:2},
	    			{img:'./src/img/event-1463999821608-4986.jpg',id:3},
	    			{img:'./src/img/i-bg1.jpg',id:4}
	    		]
    		}	
    	}
    }
</script>