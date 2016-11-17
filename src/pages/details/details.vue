<template>
    <section>
        <div v-for="item in detailsItem">
        <div id="details-Box">
            <div class="img-box">
            <img :src="item.img" class='pull-img'>
        </div>
        <div class="brand-logo" style="background-image: url('./src/img/icon-logo.png')"></div>
        <div class="details-top">
            <div class="top-box  details-places">剩余名额：
                <span>{{item.number}}/20</span>
            </div>
            <div class="top-box details-brand">
                <i class="icon-brand"></i>
                <span>关于品牌</span>
            </div>
        </div>
        <div class="details-content">
            <div class="clearfix">
                <span>活动时间：</span>
                <p>{{item.time}}</p>
            </div>
            <div class="clearfix">
                <span>地<i class="wit">地址</i>址：</span>
                <p>{{item.address}}</p>
            </div>
            <div class="clearfix">
                <span>等级要求：</span>
                <p>{{item.level}}</p>
            </div>
            <div class="clearfix">
                <span>定金支付：</span>
                <p>&yen; {{item.deposit}}</p>
            </div>
            <div class="clearfix">
                <span>赠送积分：</span>
                <p>{{item.integral}}</p>
            </div>
        </div>
        </div>
        <div class="card" v-if="isHide">
            <a class="view-box" @click='showClick'>
                <div class="view-content">
                    <p>查看详情</p>
                </div>
            </a>
        </div>
        <div class="card-reveal" v-if="isShow">
            <div class="card-title">
                <i></i>
                <p>活动规则</p>
            </div>
            <div class="card-content">
                <p>{{item.rules}}</p>
                <img :src="item.rulesImg"/>
            </div>
            <a href="javascript:;" class="card-content">
                <img src="../../img/i-ewm.png" class="detail-img">
                <img src="../../img/i-touch.png" class="detail-img">
            </a>
        </div>
    </section>
</template>

<script>
	import '../../scss/details.scss'
    export default {
       data:function(){
            return {
                detailsItem:[],
                isHide:true,
                isShow:false
            }   
        },
        methods: {
            showClick:function(){
                var oHeight=$("#details-Box").height();
                $("html,body").animate({scrollTop: oHeight},500);
                this.isHide=false;
                this.isShow=true;
            }
        },
        created: function (){
            var num=parseInt(this.$route.params.id)
            switch(num){
                case 1:
                    this.detailsItem.push({
                        img:'./src/img/event-1461815814017-4963.jpg',
                        number:5,
                        time:'2016.06.01 8:00 - 2016.06.01 18:00',
                        address:'深圳',
                        level:'银卡及以上会员（您当前等级为银卡会员）',
                        deposit:500,
                        integral:200,
                        rules:'1、啊',
                        rulesImg:'./src/img/event-1461815814017-4963.jpg'
                    })
                    break;
                case 2:
                    this.detailsItem.push({
                        img:'./src/img/event-1462327721843-1860.jpg',
                        number:10,
                        time:'2016.06.02 8:00 - 2016.06.02 18:00',
                        address:'上海',
                        level:'金卡及以上会员（您当前等级为金卡会员）',
                        deposit:1500,
                        integral:500,
                        rules:'1、哦',
                        rulesImg:'./src/img/event-1462327721843-1860.jpg'
                    })
                    break;
                case 3:
                    this.detailsItem.push({
                        img:'./src/img/event-1463999821608-4986.jpg',
                        number:15,
                        time:'2016.06.03 8:00 - 2016.06.03 18:00',
                        address:'北京',
                        level:'您当前等级为钻卡会员',
                        deposit:15000,
                        integral:2000,
                        rules:'1、噢',
                        rulesImg:'./src/img/event-1463999821608-4986.jpg'

                    })
                    break;
                case 4:
                    this.detailsItem.push({
                        img:'./src/img/i-bg1.jpg',
                        number:20,
                        time:'2016.06.04 8:00 - 2016.06.04 18:00',
                        address:'香港',
                        level:'您当前等级为钻卡会员',
                        deposit:20000,
                        integral:8000,
                        rules:'1、奥',
                        rulesImg:'./src/img/i-bg1.jpg'
                    })
                    break;        
            }
        }
    }
</script>