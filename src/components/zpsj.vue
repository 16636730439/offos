<template>
    <div class="main">
        <div class="main_left">
            <div class="main_left_top">
                <div class="main_left_top_div1">
                    <h3> 活动周报 </h3>
                    <span>2.19~2.25</span>
                </div>
                <div class="main_left_top_div2">去制作</div>
            </div>
            <div class="main_left_xia">
                <div ref="chartDom"></div>
            </div>
        </div>
        <div class="main_right">
            <div class="main_left_top">
                <div class="main_left_top_div1">
                    <h3> 数据分析 </h3>
                </div>
            </div>
            <div class="main_right_xia" ref="chartDom1"></div>
        </div>
    </div>
</template>
<script setup lang="ts">

import * as echarts from 'echarts';
import { ref, onMounted } from 'vue'

var app = {};

var chartDom = ref(null)
var chartDom1 = ref(null)

var option;
var option1;
const data = [
    {
        name: 'Apples',
        value: 70
    },
    {
        name: 'Strawberries',
        value: 68
    },
    {
        name: 'Bananas',
        value: 48
    },
    {
        name: 'Oranges',
        value: 40
    },
    {
        name: 'Pears',
        value: 32
    },
    {
        name: 'Pineapples',
        value: 27
    },
    {
        name: 'Grapes',
        value: 18
    }
];
option = {
    title: [
        {
            text: 'Pie label alignTo',
            left: 'center'
        },
        {
            subtext: 'alignTo: "none" (default)',
            left: '16.67%',
            top: '75%',
            textAlign: 'center'
        },
        {
            subtext: 'alignTo: "labelLine"',
            left: '50%',
            top: '75%',
            textAlign: 'center'
        },
        {
            subtext: 'alignTo: "edge"',
            left: '83.33%',
            top: '75%',
            textAlign: 'center'
        }
    ],
    series: [
        {
            type: 'pie',
            radius: '25%',
            center: ['50%', '50%'],
            data: data,
            label: {
                position: 'outer',
                alignTo: 'none',
                bleedMargin: 5
            },
            left: 0,
            right: '66.6667%',
            top: 0,
            bottom: 0
        },
        {
            type: 'pie',
            radius: '25%',
            center: ['50%', '50%'],
            data: data,
            label: {
                position: 'outer',
                alignTo: 'labelLine',
                bleedMargin: 5
            },
            left: '33.3333%',
            right: '33.3333%',
            top: 0,
            bottom: 0
        },
        {
            type: 'pie',
            radius: '25%',
            center: ['50%', '50%'],
            data: data,
            label: {
                position: 'outer',
                alignTo: 'edge',
                margin: 20
            },
            left: '66.6667%',
            right: 0,
            top: 0,
            bottom: 0
        }
    ]
};
option1 = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
        }
    ]
};
var myChart
var myChart1
onMounted(() => {

    myChart = echarts.init(chartDom.value);
    myChart1 = echarts.init(chartDom1.value);


    window.addEventListener('resize', function () {
        myChart.resize();
        myChart1.resize();
    });
    myChart.setOption(option);
    myChart1.setOption(option1);
})


</script>
<style scoped lang="scss">
.main_right_xia {
    flex: 1;
}

.main_right {
    flex: 1;
    display: flex;
    flex-direction: column;
    // background: red;
}

.main_left_xia {
    flex: 1;
    background: #fff;

    div {
        width: 50%;
        height: 60%;
        margin: 0 auto;
        margin-top: 3%;
    }
}

.main_left_top_div2 {
    margin-right: 0.3rem;
    padding: 0.02rem 0.1rem;
    border-radius: 5px;
    background: rgb(18, 97, 255);
    color: #fff;
}

.main_left_top_div1 {
    padding-left: 0.1rem;
    display: flex;
    align-items: center;

    span {
        display: inline-block;
        margin-left: 0.2rem;
        font-size: 0.08rem;
        color: #ccc;
    }
}

.main_left_top {
    height: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.main_left {
    width: 50%;
    display: flex;
    flex-direction: column;
}

.main {
    width: 95%;
    margin: 0 auto;
    height: 100%;
    border: solid 1px #000;
    display: flex;
}</style>