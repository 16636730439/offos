<template>
    <div class="main2">
        <div class="top">近一周售票量</div>
        <div class="xia" ref="echarts1"></div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts';
let echarts1 = ref(null);
var option;
onMounted(() => {
    var myChart = echarts.init(echarts1.value);
    option = {
        tooltip: {
            trigger: "axis"
        },
        legend: {
            data: ["售票量", "销售额"]
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
                type: "category",
                data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                axisTick: {
                    length: 0
                }
            }
        ],
        yAxis: [
            {
                type: "value",
                position: "right",
                axisTick: {
                    length: 0,
                    // interval: 100,
                    show: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgb(7, 7, 7)"
                    }
                },
                splitLine: {
                    show: true
                },
                splitNumber: 4
            },
            {
                type: "value",
                position: "left",
                axisTick: {
                    length: 0,
                    interval: 0,
                    show: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgb(7, 7, 7)"
                    }
                }
            }
        ],
        series: [
            {
                name: "售票量",
                type: "line",
                data: [20, 10, 100, 50, 11, 22, 33, 44, 55, 88, 99, 31],
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: "rgb(43, 242, 212)"
                        },
                        borderWidth: 2,
                        borderColor: "rgb(43, 242, 212)",
                        color: "rgb(43, 242, 212)"
                    }
                },
                yAxisIndex: 1
            },
            {
                name: "销售额",
                type: "bar",
                data: [2000, 1000, 10000, 5000, 1100, 2200, 3300, 4400, 5500, 8800, 9900, 3100],
                barGap: "15%",
                barCategoryGap: "20%",
                itemStyle: {
                    normal: {
                        color: "rgb(244, 9, 135)"
                    }
                }
            }
        ]
    }

    myChart.setOption(option)

     window.addEventListener('resize', function() {
        myChart.resize();
    });

})
</script>
<style scoped lang="scss">
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