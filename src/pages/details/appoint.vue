<template>
	<section>
		<div v-for="appointItem in appointItems">
			<img :src="appointItem.img" class="pull-img"/>
		</div>
    <ul class="subscribe-title">
      <li>尊敬的余飞，请输入您的预约信息：</li>
      <li class="clearfix">
        <span>预约人数</span>
        <input type="text" placeholder="请输入预约人数" id="number">
      </li>
      <li class="clearfix">
        <div class="subscribe-time" @click="toggleClick">
          <span>预约时间</span>
          <p id="appointTime">{{ appointYears[yearsK]}} {{appointHours[hoursK]}}</p>
        </div>
       </li>
    </ul>
    <div class="time-Box" v-show="toggleBtn">
      <div class="time-years">
        <label :class="k==yearsK?'yearsActive':''" v-for="(yearsItem,k) in appointYears">
          <input type="radio" v-model="yearsK" :value="k">{{yearsItem}}
        </label>
      </div>
      <ul>
        <li>&nbsp;</li>
        <li>
         <div class="time-hours">
          <label :class="k==hoursK?'hoursActive':''" v-for="(hoursItem,k) in appointHours">
            <input type="radio" v-model="hoursK" :value="k">{{hoursItem}}
          </label>
         </div>
        </li>
      </ul>
    </div>
    <div class="order-text">
      <textarea placeholder="告诉我们您的其他需求（0～30字）..."></textarea>
    </div>
    <button type="button" class="order-btn" @click="submitBtn">提交</button>
	</section>
</template>

<script>
  import './../../scss/appoint.scss';
	export default {
   	data:function(){
      return {
        appointItems:[],
        toggleBtn:false,
        appointYears:['今天 周四','明天 周五','10-29 周六','10-30 周日','10-31 周一','11-01 周二','11-02 周三'],
        appointHours:['15:00','08:00','10:00','16:00','14:00','09:00','13:00'],
        yearsK:0,
        hoursK:0,
      }
    },
    methods: {
      toggleClick:function(){
        this.toggleBtn=!this.toggleBtn;
      },
      submitBtn:function(){
        if($("#number").val()==""){
          alert("预约人数不能为空")
        }
        else{
          this.$router.push({ path: '/succeed' })
        }  
      }  
    },
    created: function (){
      var num=parseInt(this.$route.params.id)
      switch(num){
        case 1:
          this.appointItems.push({
            img:'./src/img/event-1461815814017-4963.jpg'
          })
          break;
        case 2:
          this.appointItems.push({
              img:'./src/img/event-1462327721843-1860.jpg'
            })
          break;  
        case 3:
          this.appointItems.push({
            img:'./src/img/event-1463999821608-4986.jpg'
          })
          break;  
        case 4:
          this.appointItems.push({
              img:'./src/img/i-bg1.jpg'
          })
          break;  
      }
    }
  }
</script>