<template>
  <div class="padding-two">
    <router-view></router-view>
    <footer class="flex-wrap nav footer-two">
      <a  class="flex-item-1" @click="collection">
        <div class="footer-box">
          <i class="icon-collection" :class="{ 'icon-collection-on' : isOn }"></i>
          <span>收藏活动</span>
        </div>
      </a>
      <a class="flex-item-1" >
        <div class="footer-box">
          <i class="icon-phone"></i>
          <span>电话预约</span>
        </div>
      </a>
      <router-link :to="'/appoint/'+$route.params.id"  class="flex-item-1 details-order">在线预约</router-link>
    </footer>
  </div>    
</template>
<script>
  import './../../scss/footerTwo.scss';
  export default {
    data:function(){
      return {
        isOn: false,  
      }
    },
    methods: {
      collection:function(){
        this.isOn=! this.isOn
      }
    }
  }
</script>