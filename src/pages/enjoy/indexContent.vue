<template>
    <div id="111">
        <div>{{dataid}}</div>
    </div>    
        
       <!--  <ul class="activity-Ul">
           <router-link to="" tag="li" v-for='enjoyContent in enjoyContents'>
               <div class="img-box">
                   <img :src="enjoyContent.img" class="pull-img"/>
                   <div class="activity-bottom integral">
                       <p>
                           <strong>{{enjoyContent.title}}</strong>
                           <span>{{enjoyContent.address}}</span>
                       </p>
                   </div>
               </div>
               <div class="enjoy-Box flex-wrap">
                   <router-link to="" tag="div" class="flex-item-1" v-for="enjoyMenu in enjoyContent.menu">
                       {{enjoyMenu.enjoyMenu}}
                   </router-link>
               </div>
           </router-link>
       </ul>      
           </div> -->
</template>
<script>
    import './../../scss/enjoy.scss';
    export default {
        data:function(){
            return {
                enjoyContents:[
                    {
                        img:'./src/img/event-1461815814017-4963.jpg',
                        title:'眼观生活美，品享制餐',
                        address:'深圳',
                        menu:[
                            {enjoyMenu:'9折优惠',},
                            {enjoyMenu:'预定优先',},
                            {enjoyMenu:'消费赠送',}
                        ]
                    },
                    {
                        img:'./src/img/event-1462327721843-1860.jpg',
                        title:'眼观生活美，品享制餐',
                        address:'上海', 
                         menu:[
                            {enjoyMenu:'预定优先',},
                            {enjoyMenu:'消费赠送',}
                        ]                  
                    },
                    {
                        img:'./src/img/event-1463999821608-4986.jpg',
                        title:'眼观生活美，品享制餐',
                        address:'北京',
                         menu:[
                            {enjoyMenu:'9折优惠',}
                        ]
                    },
                    {
                        img:'./src/img/i-bg1.jpg',
                        title:'眼观生活美，品享制餐',
                        address:'香港',
                         menu:[
                            {enjoyMenu:'9折优惠',},
                            {enjoyMenu:'预定优先',},
                            {enjoyMenu:'消费赠送',}
                        ]  
                    },
                ],
            }
        },
        props:['dataid']
    }
</script> 