<template>
    <div class="main1">
        <div class="top1">
            <ZuoTop class="ZuoTop" v-for="(item,index) in zuoTopArray" :key="index">
                <!-- {{ item.icon }} -->
                <template v-slot:topleft>
                    <div  :style="{'background':item.color , 'display':'flex' ,'alignItems': 'center', 'justifyContent': 'space-evenly', 'borderRadius':'10px' ,'width':'25%', 'height':'80%' , 'marginTop':'0.05rem' }">
                        <el-icon :size="20" color="#fff"><component :is="item.icon" /></el-icon>
                    </div>
                </template>

                <template v-slot:topright>
                    <div class="topright1">
                        <div :style="{'color':item.color}">
                            ￥ <b :style="{'marginLeft': '0.02rem','fontSize':'0.2rem'}">{{ item.price }}</b>
                        </div>
                        <div>{{ item.title }}</div>
                    </div>
                </template>

                <template v-slot:buttom1>
                    <div class="top1buttom1">
                        <span>{{ item.buttontitle }}</span>
                        <span :style="{'color':item.buttoncolor}">{{ item.buttontitle1 }}</span>
                        <el-icon :size="20" :color="item.buttoncolor"><component :is="item.buttonicon" /></el-icon>
                    </div>
                </template>
            </ZuoTop>
        </div>

        <div class="center1">

            <CenterLeft class="CenterLeft"></CenterLeft>

            <CenterRight class="CenterRight"></CenterRight>

        </div>


        <div class="dibu">

        </div>

        
    </div>
</template>
<script setup lang="ts">
    import router from '@/router';
    import { ref , onMounted } from 'vue'
    import ZuoTop from '../../components/ZuoTop.vue'
    import CenterLeft from '../../components/CenterLeft.vue'
    import CenterRight from '../../components/CenterRight.vue'

    const zuoTopArray = [
        {
            price:'200',
            color:'rgb(121, 246, 87)',
            title:'今日已售(元)',
            icon:'Key',
            buttontitle:'日同比',
            buttontitle1:'增高20%',
            buttonicon:'CaretTop',
            buttoncolor:'rgb(121, 246, 87)'
        },
        {
            price:'208',
            color:'rgb(41, 124, 232)',
            title:'今日已售(元)',
            icon:'ChatDotSquare',
            buttontitle:'日同比',
            buttontitle1:'增高20%',
            buttonicon:'CaretTop',
            buttoncolor:'rgb(121, 246, 87)'
        },
        {
            price:'328',
            color:'rgb(232, 184, 41)',
            title:'今日已售(元)',
            icon:'Edit',
            buttontitle:'日同比',
            buttontitle1:'增高20%',
            buttonicon:'CaretTop',
            buttoncolor:'rgb(121, 246, 87)'
        },
        {
            price:'200',
            color:'pink',
            title:'今日已售(元)',
            icon:'Fold',
            buttontitle:'日同比',
            buttontitle1:'增高20%',
            buttonicon:'CaretTop',
            buttoncolor:'red'
        }
    ]
    
</script> 
<style scoped lang="scss">
    .dibu{
        flex: 1;
        margin-top: 0.1rem;
        background: seagreen;
    }
    .CenterRight{
        width: 46%;
        height: 100%;
    }
    .CenterLeft{
        width: 46%;
        height: 100%;
    }
    .center1{
        height: 40%;
        margin-top: 0.1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .top1buttom1{
        span{
            display: inline-block;
            margin-right: 0.02rem;
        }
        
    }
    .topright1{
        width: 35%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .ZuoTop{
        width: 20vw;
        height: 13vh;
        background: #fff;
        border-radius: 10px;
    }
    .top1{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .main1{
        padding-top: 0.1rem;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90%;
        background: #ccc;
    }

</style>