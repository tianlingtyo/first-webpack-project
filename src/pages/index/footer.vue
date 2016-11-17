<template>
  <div class="padding-one">
    <router-view></router-view>
    <footer class="flex-wrap nav footer-one">
      <router-link to="/" class="flex-item-1" :class="$route.fullPath=='/'?'active':''">
        <i class="icon-home"></i>
        <span>体验</span>
      </router-link>
      <router-link to="/enjoy" class="flex-item-1" :class="$route.fullPath=='/enjoy'?'active':''"> 
        <i class="icon-enjoy"></i>
        <span>享受</span>
      </router-link>
      <router-link to="/brand" class="flex-item-1" :class="$route.fullPath=='/brand'?'active':''">
        <i class="icon-brand"></i>
        <span>品牌</span>
      </router-link>
      <router-link to="/my" class="flex-item-1" :class="$route.fullPath=='/my'?'active':''">
        <i class="icon-user"></i>
        <span>我的</span>
      </router-link>
    </footer>
  </div>
</template>
<script>
    import './../../scss/footerOne.scss'
</script>