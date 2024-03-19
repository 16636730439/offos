<template>
    <div class="div1">
        <div class="top">
            <div class="top_left">
                <div class="top_left_top">{{ user }}</div>
                <div class="top_left_center">
                    <div class="top_left_center_left">低至
                        <span>3.8</span>
                        元/天
                    </div>
                    <div class="top_left_center_right">开通会员</div>
                </div>
                <div class="top_left_button">
                    <span>开通会员,全场模板免费用</span>
                    <span>查看会员特权></span>
                </div>

            </div>
            <div class="top_right">
                <div class="top_right_top">
                        <DayMoun :month="month" :nowWeek="nowWeek" :year="year" :month1="month1" :strDate="strDate"
                            :month2="month2" :month3="month3" :month1jia="month1jia"></DayMoun>
                </div>
                <div class="top_right_xia">
                    <ul>
                        <li v-for="(item,index) in top_right_xia_ul" :key="index">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 我的数据 -->
        <div class="myarr">
            <div class="myarr_top">
                <h3>我的数据</h3>
                <span :class="myarr_top==0?'on1':''">作品数据</span>
                <span :class="myarr_top==1?'on1':''">分发数据</span>
            </div>
            <div class="myarr_xia">

                <zpsj v-if="myarr_top==0"></zpsj>

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import zpsj from '@/components/zpsj.vue'
import JjfaView from '@/components/JjfaView.vue';
import JjfaView1 from '@/components/JjfaView1.vue';
import right_heng from '@/components/right_heng.vue'
import DayMoun from '@/components/DayMoun.vue'
import router from '@/router';
import { el, fa } from 'element-plus/es/locale/index.mjs';
import LunarCalendar from "lunar-calendar";
import { onMounted, reactive, ref, toRefs } from 'vue';

// 我的数据和分发数据区分
const  myarr_top = ref(0);


const user = ref('eqs54022614460782404 weixin');
const top_right_xia_ul = ['[妇女节快乐]巾帼综芳华，最美女神评选!开启>》','[获客活码]企业都在用的私域运营工具，了解一下>>']
//获取当前日期函数

let year = ref('');
let month1 = ref('');
let strDate = ref('');
function getNowFormatDate() {
    let date = new Date()
    year.value = date.getFullYear(), //获取完整的年份(4位)
        month1.value = date.getMonth() + 1, //获取当前月份(0-11,0代表1月)
        strDate.value = date.getDate() // 获取当前日(1-31)
    if (month1.value < 10) month1.value = `0${month1.value}` // 如果月份是个位数，在前面补0
    if (strDate.value < 10) strDate.value = `0${strDate.value}` // 如果日是个位数，在前面补0

    return `${year.value}-${month1.value}-${strDate.value}`
}
getNowFormatDate()
console.log(year.value, month1.value, strDate.value);
const weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
const nowWeek = weeks[new Date().getDay()]
let month = LunarCalendar.solarCalendar(year.value, month1.value);
const month2 = LunarCalendar.solarToLunar(year.value, month1.value, strDate.value)
let month3 = ref(LunarCalendar.calendar(year.value, month1.value).monthData)
const month1jia = async (item) => {
    if (item == '回到今天') {
        getNowFormatDate()
    } else if (item == '下月') {
        console.log('下月');
        month1.value = parseInt(month1.value) + 1;
        month1.value = month1.value < 10 ? '0' + month1.value : month1.value
    } else {
        month1.value = parseInt(month1.value) - 1;
        month1.value = month1.value < 10 ? '0' + month1.value : month1.value
    }
    console.log(month1.value, '=================================================988');
    if (parseInt(month1.value) > 12) {
        month1.value = 1;
        year.value = year.value + 1
    } else if (parseInt(month1.value) < 1) {
        month1.value = 12;
        year.value = year.value - 1
    }
    month3.value = await LunarCalendar.calendar(year.value, month1.value).monthData
}

</script>
<style scoped lang="scss">
.myarr_xia{
    flex: 1;
    // background: red;
}
.myarr_top{
    height: 0.5rem;
    display: flex;
    align-items: center;
    padding-left: 0.2rem;
    h3{
        margin-right: 0.5rem;
    }
    .on1{
        font-weight: 900;
        color: rgb(18,97,255);
    }
    span{
        display: inline-block;
        margin-right: 0.1rem;
        padding: 0.02rem 0.1rem;
        background: rgb(245,247,251);
        border-radius: 20px;
    }
}
.myarr{
    margin-top: 0.1rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
}
.top_right_xia{
    width: 85%;
    margin: 0 auto;
    height: 50%;
    ul{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        li:hover{
            color: rgb(18,97,255);
        }
    }
}

.top_right_top {
    width: 90%;
    margin: 0 auto;
    height: 50%;
    border-bottom: solid 1px #000;
}

.top_left_button {
    width: 90%;
    height: 0.15rem;
    margin: 0 auto;
    background: rgb(240, 247, 255);
    margin-top: 0.05rem;
    border-radius: 5px;
    display: flex;
    font-size: 0.08rem;
    padding: 0.02rem 0.1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.top_left_center_right {
    margin-left: 1.3rem;
    height: 100%;
    width: 0.7rem;
    background: rgb(224, 163, 84);
    text-align: center;
    border-radius: 5px;
    color: rgb(102, 52, 9);
}

.top_left_center_left {
    font-weight: 900;

    span {
        color: red;
        font-weight: 900;
        font-size: 0.15rem;
    }
}

.top_left_center {
    margin-top: 0.3rem;
    margin-left: 0.1rem;
    display: flex;
    align-items: center;
}

.top_left_top {
    margin-top: 0.1rem;
    margin-left: 0.1rem;
    font-size: 0.1rem;
    font-weight: 900;
}

.top {
    margin-top: 0.1rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .top_left {
        width: 35%;
        height: 100%;
        background: rgb(213, 231, 254);
        border-radius: 10px;
    }

    .top_right {
        width: 60%;
        height: 100%;
        border: solid 1px #000;
        border-radius: 10px;
    }
}

.div1 {
    width: 100%;
    height: 100%;
    background: #fff;
    overflow: scroll;
    display: flex;
    flex-direction: column;
}
</style>