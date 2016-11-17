<template>
  <ul class="activity-Ul">
    <router-link :to="'/details/'+todo.id"  v-for="todo in todos" tag="li">
      <img :src="todo.img" class="pull-img"/>
      <i :class="{ iconEnd: todo.finshed }"></i>
      <h5 class="activity-title">{{todo.name}}</h5>
      <div class="activity-bottom">
        <h5>{{todo.release}}</h5>
        <p>
          <strong>{{todo.time}}</strong>
          <span>剩余席位：{{todo.num}}位</span>
        </p>
      </div>
    </router-link>
  </ul>      
</template>
<script>
  import  './../../scss/indexContent.scss';
 export default {
    data:function(){
      return {
        todos:[
          {
            img:'./src/img/event-1461815814017-4963.jpg',
            name:'所属品牌名称',
            release:'芬迪新品发布会',
            time:'2016.06.01 - 2016.06.01 深圳',
            num:5,
            id:1,
            finshed:true
          },
          {
            img:'./src/img/event-1462327721843-1860.jpg',
            name:'所属品牌名称',
            release:'芬迪新品发布会',
            time:'2016.06.02 - 2016.06.02 上海',
            num:10,
            id:2,
            finshed:false
          },
          {
            img:'./src/img/event-1463999821608-4986.jpg',
            name:'所属品牌名称',
            release:'芬迪新品发布会',
            time:'2016.06.03 - 2016.06.03 北京',
            num:15,
            id:3,
            finshed:false
          },
          {
            img:'./src/img/i-bg1.jpg',
            name:'所属品牌名称',
            release:'芬迪新品发布会',
            time:'2016.06.04 - 2016.06.04 香港',
            num:20,
            id:4,
            finshed:false
          }
        ]
      } 
    }
  }        
</script>