<template>
	<section>
		<swiper></swiper>
		<index-content></index-content>
 		<city></city>
	</section>
</template>

<script>
    import Swiper from './swiper.vue'
	import indexContent from './indexContent.vue'
    import city from './city.vue'
    export default {
      components: {Swiper,indexContent,city},
    }
</script>