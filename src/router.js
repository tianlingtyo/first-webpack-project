import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
	routes: [
	  	{
	  		path:'/',
	  		name: '底部',
	  		component: require('./pages/index/footer.vue'),
	  		children: [
	  			 { 
			    	path: '/', 
			    	name: '首页',
			    	component: require('./pages/index/index.vue'),
			    },
			    { 
			    	path: '/enjoy', 
			    	name: '享受',
			    	component: require('./pages/enjoy/index.vue'),
			    },
			    { 
			    	path: '/brand', 
			    	name: '品牌',
			    	component: require('./pages/brand/index.vue'),
			    },
			    { 
			    	path: '/my', 
			    	name: '我的',
			    	component: require('./pages/my/index.vue'),
			    }
		    ]
	  	},
	  	{
	  		path:'/details/:id',
	  		name: '活动详情',
	  		component: require('./pages/details/footer.vue'),
	  		children: [
	  			{
	  				path:'',
			  		name: '活动详情',
			  		component: require('./pages/details/details.vue'),
			  	},
	  		]
	  	},
  		{
	  		path:'/appoint/:id',
	  		name: '预约详情',
	  		component:require('./pages/details/appoint.vue'),
	  	},
	  	{
			path:'/succeed',
	  		name: '预约成功',
	  		component: require('./pages/details/succeed.vue'),
	  	},
	]
})
