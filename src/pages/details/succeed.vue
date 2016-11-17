<template>
	<section>
		<div class="pay-success"></div>
		<p class="success-p1"><i></i>预约成功！</p>
		<p class="success-p2">您可以到<router-link to="/order" class="text-darky">我的订单</router-link>查看</p>
		<p class="success-p2">或者<router-link to="/" class="text-darky">返回继续预约</router-link></p>
	</section>
</template>

<script>
	import './../../scss/succeed.scss';
</script>