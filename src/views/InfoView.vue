<template>
    <div class="main">
        <Header1 class="top"></Header1>
        <main>
            <div class="main_left">

                <MainLeft class="main_zu" :main_left="main_left" :main_left_on1="main_left_on1" :main_left_on2="main_left_on2" :main_left_click="main_left_click"></MainLeft>

            </div>
            <div class="main_right">
                <RouterView />
            </div>
        </main>
    </div>
</template>
<script setup lang="ts">

import Header1 from '@/components/Header1.vue';
import MainLeft from '@/components/MainLeft.vue';
import { useRoute , RouterView } from 'vue-router';
import { ref , onMounted } from 'vue'
import router from '@/router';

const router1 = useRoute();

const main_left = ref([
    {
        name:'创建设计',
        children:[{name:'首页',path:'/info/index'}]
    },
    {
        name:'内容中心',
        children:[{name:'作品',path:'/info/zuo'},{name:'素材',path:'/info/su'},
                  {name:'模板',path:'/info/mu'},{name:'文件夹',path:'/info/wjj'},
                  {name:'回收站',path:'/info/hui'}]
    },
    {
        name:'推广中心',
        children:[
            {name:'获客活码',path:'/info/huo',},{name:'客户群发',path:'/info/kehu'},
            {name:'朋友圈转发',path:'/info/pyq'},{name:'智能雷达',path:'/info/leida'},
            {name:'智能分发',path:'/info/fenfa'},{name:'全员分发',path:'/info/quanyuan'},
            {name:'短信通知',path:'/info/duanxing'},{name:'商品管理',path:'/info/shop'},
            {name:'个人主页',path:'/info/my'}
        ]
    },
    {
        name:'客户中心',
        children:[
            {name:'企业微客户管理',path:'/info/qywkhgl'},
            {name:'线索客户管理',path:'/info/xskhgl'}
        ]
    },
    {
        name:'扩展服务',
        children:[
            {name:'创意工具',path:'/info/cygj'}
        ]
    }
])
const main_left_on1 = ref(0);
const main_left_on2 = ref(0);

const main_left_click=(index,index1,item1)=>{
    main_left_on1.value = index;
    main_left_on2.value = index1;
    router.push({path:item1.path,query:{...router1.query}})
}

console.log(router1.query);


</script>
<style scoped lang="scss">
.main::-webkit-scrollbar {
            display: none
}
.main {
    font-size: 0.1rem;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .top {
        width: 100vw;
        height: 7vh;
        background: #fff;
        box-shadow: 0px 3px 0px #dfdede;
        margin-bottom: 4px;
        display: flex;

        .nrzx {
            width: 60vw;
            height: 55vh;
            background: #fff;
            z-index: 999;
            position: absolute;
            left: -27vw;
            overflow: scroll;
            top: 5vh;
            border-radius: 20px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            color: #000;

            h3 {
                text-align: center;
                margin-bottom: 1vh;
            }

            .col111 {
                border: solid 1px rgb(74, 204, 236);
                border-radius: 20px;
            }

            .col11 {
                margin-top: 1vh;
                margin-right: 1vw;
                padding: 0.03rem;
            }

            .dl1 {
                width: 100%;
                overflow: hidden;
                margin-bottom: 0.2vh;
                height: 8vh;
                margin-top: 0.5vh;
                display: flex;

                dd {
                    margin-left: 5%;
                    flex: 1;

                    .div222 {
                        width: 100%;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3; //从第3行开始隐藏
                        margin-top: 1vh;
                    }

                    .div111 {
                        width: 100%;
                        font-weight: 900;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1; //从第1行开始隐藏
                    }
                }

                dt {
                    width: 30%;
                    height: 100%;
                    background: #4fb5e4;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-left: 1vw;

                    img {
                        width: 80%;
                        height: 80%;
                        border-radius: 50%;
                    }
                }
            }

            .top1_left1 {
                width: 70%;
                height: 100%;

                .asdasdfsghjgfdsa {
                    width: 100%;
                    height: 100%;
                    padding: 0 5%;
                }
            }

            .top1_right1 {
                flex: 1;
                background: rgb(245, 249, 255);
            }

            .top1 {
                height: 85%;
                width: 100%;
                border-bottom: solid 1px #000;
                display: flex;
            }

            .xia {
                flex: 1;

                div {
                    padding-left: 3%;
                    display: flex;
                    align-items: center;
                    height: 100%;
                }
            }
        }

        .top_div2 {
            width: 40vw;
            height: 100%;
            margin-left: 5vw;
            position: relative;
            font-size: 0.09rem;
            display: flex;
            align-items: center;
            justify-content: space-evenly;

            .item_div {
                position: relative;
            }

            .ziyuanhezuo {
                color: #000;
                position: absolute;
                z-index: 999;
                width: 2.2rem;
                height: 1.7rem;
                left: -0.9rem;
                top: 5dvh;
                display: flex;
                justify-content: space-evenly;
                padding-top: 0.3rem;
                background: #fff;

                div {
                    line-height: 3vh;
                }

            }

            .on1 {
                color: rgb(63, 131, 235);
            }

            .on {
                font-weight: 900;
            }

            .top_div2_top {
                position: absolute;
                left: 8%;
                top: 0;
                width: 0.2rem;
                height: 0.03rem;
                border-radius: 10px;
                background: rgb(63, 131, 235);
            }
        }

        .top_div1 {
            height: 100%;
            width: 10%;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 80%;
                height: auto;
            }
        }
    }

    main {
        flex: 1;
        display: flex;
        .main_left::-webkit-scrollbar {
            display: none
        }
        .main_left {
            width: 1.4rem;
            background: red;
            overflow: scroll;
            .main_zu{
                width: 100%;
                height: 100%;
            }
        }

        .main_right {
            flex: 1;
            // background: salmon;/
        }
    }
}</style>