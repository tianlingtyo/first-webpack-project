<template>
	<section class="padding-top">
        <div class="header">
            <div class="swiper-container swiper-enjoy">
                <div class="swiper-wrapper">
                    <div class="enjoy-color swiper-slide" v-for="(enjoyNme,k) in enjoyNmes" :class=" k==enjoyK?'enjoy-active':''" :title='k'>
                        <label>
                            <input type="radio" v-model="enjoyK" :value="k">
                            <span>{{enjoyNme}}</span>
                        </label>   
                    </div>
                </div>
            </div>
        </div>
        <index-content dataid="k"></index-content>
    </section>
</template>

<script>
	import './../../scss/enjoy.scss';
    import indexContent from './indexContent.vue';
    export default {
        components: {indexContent},
	 	mounted:function() {
	      	var mySwiper = new Swiper('.swiper-enjoy', {	
		        slidesPerView: 3,
		        paginationClickable: true,
		        spaceBetween: 30,
		        freeMode: true
	      	})
    	},
        data:function(){
            return {
               enjoyNmes:['旅游','生活','享受'],
               enjoyK:0,
            }
        },
      
        
    }
</script>