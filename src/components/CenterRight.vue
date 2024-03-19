<template>
    <div class="main2">
        <div class="top">
            <div>近一周售票量</div>
            <div>
                <el-select v-model="value" placeholder="Select" size="large" style="width: 240px">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>
        </div>
        <div class="center">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="出发城市" name="出发城市"></el-tab-pane>
                <el-tab-pane label="到达城市" name="到达城市"></el-tab-pane>
            </el-tabs>
        </div>
        <div class="xia" ref="echarts1"></div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import * as echarts from 'echarts';
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('出发城市')
const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab.props.label)
    activeName.value = tab.props.label
}

let echarts1 = ref(null);
var option;
const value = ref('data')
var myChart;

const Arr = [
    {
        sf: '出发城市',
        sj: {
            data: [{ name: "三亚", number: 100 }, { name: "深圳", number: 200 }, { name: "北京", number: 300 }, { name: "上海", number: 400 }, { name: "武汉", number: 500 }],
            day: [{ name: "三亚", number: 1000 }, { name: "深圳", number: 2000222 }, { name: "北京", number: 30012130 }, { name: "上海", number: 5000 }, { name: "武汉", number: 10000 }],
            mouny: [{ name: "三亚", number: 100000 }, { name: "深圳", number: 20000 }, { name: "北京", number: 30000 }, { name: "上海", number: 40000 }, { name: "武汉", number: 50000 }],
        }
    },
    {
        sf: '到达城市',
        sj: {
            data: [{ name: "太原", number: 100 }, { name: "临汾", number: 200 }, { name: "北京", number: 300 }, { name: "上海", number: 400 }, { name: "大同", number: 6000 }],
            day: [{ name: "太原", number: 1000 }, { name: "临汾", number: 12123 }, { name: "北京", number: 30012130 }, { name: "上海", number: 6000 }, { name: "大同", number: 1234 }],
            mouny: [{ name: "太原", number: 3200 }, { name: "临汾", number: 9872 }, { name: "北京", number: 3578 }, { name: "上海", number: 9921 }, { name: "大同", number: 2345 }],
        },
    }
]

function optionArr(rq, cs) {

    option = {
        tooltip: {
            trigger: "axis"
        },
        legend: {
            data: ["-"]
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: true
                },
                magicType: {
                    show: false,
                    type: ["line", "bar"]
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        xAxis: [
            {
                type: "value",
                boundaryGap: [0, 0.01],
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: "category",
                data: []
            }
        ],
        series: [
            {
                name: "-",
                type: "bar",
                data: [],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        color: "rgb(21, 140, 237)"
                    }
                }
            }
        ]
    }
    let brr = Arr.filter(item=>item.sf == cs)//获取到当前选择的数据
    let crr = brr.map((item)=>{
        let err = [];
        for(let key in item.sj){
            if(key == rq){
                err = item.sj[key]
            }
        }
        console.log(err)
        return err;
    })
    crr[0].forEach((item,index)=>{
        option.yAxis[0].data.push(item.name),
         option.series[0].data.push(item.number)
    })
    return option;
}

// 监听tab切换
watch(activeName, (a, b) => {
  let optionfu =  optionArr(value.value, activeName.value)
  myChart.setOption(optionfu)
}, { deep: true })
// 监听select下拉框变化
watch(value, (a, b) => {
    let optionfu =  optionArr(value.value, activeName.value)
    myChart.setOption(optionfu)
    myChart.setOption(optionfu)
}, { deep: true })

const options = [
    {
        value: 'data',
        label: '今日',
    },
    {
        value: 'day',
        label: '近一周',
    },
    {
        value: 'mouny',
        label: '近一月',
    }
]

onMounted(() => {
    myChart = echarts.init(echarts1.value);
    let optionfu =  optionArr(value.value, activeName.value)
    myChart.setOption(optionfu)

    window.addEventListener('resize', function () {
        myChart.resize();
    });

})
</script>
<style scoped lang="scss">
.center {
    height: 0.3rem;
    // background: sandybrown;
}

.top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        margin-right: 0.2rem;
    }
}

.main2 {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    margin-left: 0.1rem;
    padding: 0 0.1rem;
}

.xia {
    flex: 1;
}

.top {
    line-height: 0.4rem;
    font-weight: 900;
    color: rgb(29, 202, 29);
    height: 0.4rem;
    // background: saddlebrown;
    padding-left: 0.2rem;
}
</style>