<template>
    <div class="main" @mouseenter="shubiao" @mouseleave="shubiao1">
        <div class="left">
            <div class="left_top">
                <span class="span1">{{ props.strDate }}</span>
                <span class="span2">/{{ props.month1 }}</span>
                <span class="span3">{{ props.year }}</span>
            </div>
            <div class="left_xia">
                <span>{{ props.nowWeek }}</span>
                <span>农历{{ props.month2.lunarMonthName }} {{ props.month2.lunarDayName }}</span>
            </div>
        </div>
        <div class="right">
            <img src="../../public/AI.png" alt="">
            <span>{{ parseInt(props.month1) + 1 }}月你好</span>
        </div>

        <div class="box" v-show="show1">
            <FullCalendar ref="myCalendar" :options="calendarOptions" />
        </div>
    </div>
</template>
<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { defineProps, onMounted, ref } from 'vue';

const show1 = ref(false);

let props = defineProps(['month', 'strDate', 'month1', 'year', 'nowWeek', 'month2', 'month3', 'month1jia']);

const shubiao = () => {
    show1.value = true;
    changeCalendar('TODAY')
}
const shubiao1 = () => {
    show1.value = false;
}

/*定义公历节日*/
var sFtv = new Array(
    "0101 元旦",
    "0214 情人节",
    "0307 女生节",
    "0308 妇女节",
    "0312 植树节",
    "0401 愚人节",
    "0404 清明节",
    "0501 劳动节",
    "0504 青年节",
    "0601 儿童节",
    "0701 建党节",
    "0801 建军节",
    "0910 教师节",
    "1001 国庆节",
    "1031 万圣节",
    "1224 平安夜", //
    "1225 圣诞节", //
);
function judgeFestival(y, m, d) {
    // 公历节日
    for (var i in sFtv) {
        if (sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/)) {
            if (Number(RegExp.$1) == m && Number(RegExp.$2) == d) {
                return RegExp.$4;
            }
        }
    }
}
//判断某一天是什么节日
let arr = ref([]);

const hqjr = () => {
    props.month.monthData.forEach((item, index) => {

        if (judgeFestival(props.year, props.month1, item.day)) {
            const day = item.day < 10 ? '0'+item.day: item.day
            arr.value.push({ title: judgeFestival(props.year, props.month1, item.day), date: `${props.year}-${props.month1}-${day}` })
        }

    })
    // console.log('arr',arr.value)
}
hqjr();

const hqjr1 = () => {
    // props.month.monthData.forEach((item, index) => {

    //     if (judgeFestival1(props.year, props.month1, item.day)) {
    //         arr.value.push({ title: judgeFestival1(props.year, props.month1, item.day), date: `${props.year}-${props.month1}-${item.day}` })
    //     }

    // })
}
hqjr1();

// 二十四节气
function judgeFestival2(y, m, d) {
    var solarTerm = new Array("小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至");
    var sTermInfo = new Array(0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758);
    var mon = m - 1;
    var solarTerms = "";
    // while (solarTerms == "") {
    var sotmp1 = new Date((31556925974.7 * (y - 1900) + sTermInfo[mon * 2 + 1] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
    var sotmp2 = sotmp1.getUTCDate(); //根据世界时返回一个月 (UTC) 中的某一天
    if (sotmp2 == d) {
        solarTerms = solarTerm[mon * 2 + 1];
        return solarTerms;
    }
    sotmp1 = new Date((31556925974.7 * (y - 1900) + sTermInfo[mon * 2] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
    sotmp2 = sotmp1.getUTCDate();
    if (sotmp2 == d) {
        solarTerms = solarTerm[mon * 2];
        return solarTerms;
    }
}
//判断某一天是什么节气
const hqjr2 = () => {
    props.month.monthData.forEach((item, index) => {

        if (judgeFestival2(props.year, props.month1, item.day)) {
             const day = item.day < 10 ? '0'+item.day: item.day
            arr.value.push({ title: judgeFestival2(props.year, props.month1, item.day), date: `${props.year}-${props.month1}-${day}` })
        }

    })
}
hqjr2();
const hqjr3 = () => {
    props.month3.forEach((item, index) => {
        if (item.lunarFestival) {
             const day = item.day < 10 ? '0'+item.day: item.day
            arr.value.push({ title: item.lunarFestival, date: `${props.year}-${props.month1}-${item.day}`, date: `${props.year}-${props.month1}-${day}` })
        }
    })
}
hqjr3();

const calendarOptions = ref({
    // 引入的插件，比如fullcalendar/daygrid，fullcalendar/timegrid引入后才可显示月，周，日
    height: '3.2rem', // 日历高度
    plugins: [ //  需要的插件
        dayGridPlugin,
        interactionPlugin,
        // timeGridPlugin,
        // listPlugin
    ],
    buttonText: { // 重新定义默认文本
        today: '今天',
        month: '月',
        week: '周',
        dayGrid: '日'
    },
    customButtons: {
        _prev: { // 自定义按钮 fullCalendar没有提供按钮的回调方法，想增加功能放置需设置
            text: '上月',
            click: () => {
                changeCalendar('PREV');
            }
        },
        _next: {
            text: '下月',
            click: () => {
                changeCalendar('NEXT');
            }
        },
        _today: {
            text: '回到今天',
            click: () => {
                changeCalendar('TODAY');
            }
        }
    },
    headerToolbar: {
        // 日历头部按钮位置
        // left: '', // 左边部分放置自定义
        left: '_prev,_next,_today', // 默认左边放置
        center: 'title',
        right: '' // 右边视图部分
    },
    // slotLabelFormat: { // 规定日时间格式 日视图中需要使用
    //     hour: 'numeric',
    //     minute: '2-digit',
    //     omitZeroMinute: true,
    //     meridiem: 'short'
    // },
    firstDay: 1, // 一周默认 0周日or 1周一 哪个是第一天
    editable: true, // 事件是否可编辑，可编辑是指可以移动, 改变大小等。
    selectable: true, // 允许用户单击或拖动选择日历中的对象
    // navLinks: true, // 日期可以点击
    initialView: 'dayGridMonth', // 默认显示视图
    locale: 'zh-cn', // 语言
    weekNumberCalculation: 'ISO', // 周次的显示格式。
    weekNumbers: true, // 显示周次
    aspectRatio: 2,
    dayMaxEvents: 2,
    events: [...arr.value],
    // dateClick: this.handleDateClick, // 点击日期
    // eventClick: this.handleEventClick, // 点击日程
    eventsSet: ()=>{handleEvent()} // 事件数据更改后调用
})
const myCalendar = ref(null);

const handleEvent=()=>{
    console.log(calendarOptions.value.events,'===========================207');    
}

let calendarApi = ref({})

onMounted(() => {
    calendarApi.value = myCalendar.value.getApi(); // 方式2 获取api对象;
})

const changeCalendar = (type) => {
    if (type === 'TODAY') {
        props.month1jia('回到今天')
        setTimeout(()=>{
            calendarApi.value.today();
        },200)
         arr.value = [];
    } else if (type === 'PREV') {
        props.month1jia('上月')
        arr.value = [];
        setTimeout(()=>{
          calendarApi.value.prev(); // 自动api
       },200)
       
        
    } else {
        props.month1jia('下月')
       setTimeout(()=>{
         calendarApi.value.next();
       },200)
        arr.value = [];
    }

    setTimeout(()=>{
        console.log(props.month1,'=================229');
        hqjr();
        hqjr1()
        hqjr2()
        hqjr3()
        calendarOptions.value.events = arr.value;
        console.log(calendarOptions.value.events,'=================================================274');
    },200)
};

</script>
<style scoped lang="scss">
.box {
    width: 80vw;
    height: 3.3rem;
    position: absolute;
    z-index: 999;
    top: 0.38rem;
    right: 0;
    background: #fff;
    z-index: 999;
    border: solid 1px #000;
}

.main {
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    position: relative;

    .left {
        width: 60%;
        height: 100%;

        .left_top {
            .span1 {
                font-size: 0.15rem;
                margin-right: 0.02rem;
            }

            .span2 {
                margin-right: 0.03rem;
            }

            height: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            span {
                font-weight: 900;
            }
        }

        .left_xia {
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            span {
                margin-right: 0.02rem;
                color: #6d6767;
                font-style: 0.1rem;
            }
        }
    }

    .right {
        flex: 1;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 30%;
            height: 50%;
        }

        span {
            font-weight: 900;

        }
    }
}</style>