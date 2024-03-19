<template>
    <div class="box">
        <div class="left">
            <div v-for="(item,index) in ziyuanhezuo" :key="index" class="didi">

                <div class="dividv">{{ item.title }}</div>

                <div v-for="(item1,index1) in item.children" :key="index1" class="huadong">{{ item1 }}</div>

            </div>
        </div>
        <div class="right">

            <div class="top1_right1_div1">
                <img src="https://pic1.zhimg.com/v2-70e686bea7cd1ef9a050cd10b5a61810_r.jpg?source=1940ef5c" alt="">
            </div>
            <h3>Hi, 我是您的专属购目向导</h3>
            <div class="top1_right1_div12"><img
                    src="https://marketplace.canva.cn/EADi_D_H6FQ/1/0/1600w/canva-%E8%93%9D%E9%BB%84%E8%89%B2%E7%AE%80%E6%B4%81%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81-9xsWrcA28YU.jpg"
                    alt=""></div>
            <div class="top1_right1_div2">立即扫码,真人资讯</div>

        </div>

    </div>
</template>
<script setup lang="ts">


const ziyuanhezuo = [
  {
    title: '行业解决方案',
    children: ['银行保险', '文化传媒', '企业服务' , '兴趣教育' , '政府融媒' , '医疗健康' , '婚庆' , '旅游' , '物业']
  },
  {
    title: '场景解决方案',
    children: ['会议活动营销', '企业微信运营', '活动策划', '招聘' , '方案模板']
  },
]


</script>
<style scoped lang="scss">
.huadong:hover{
    color: rgb(0, 162, 255);
}
.box {
    display: flex;

    .left {
        width: 70%;
        margin-right: 1vw;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        .didi{
            padding-top: 3vh;
        }
        div{
            line-height: 0.18rem;
        }
        .dividv{
            font-weight: 900;
            font-style: 0.2rem;
        }
    }

    .right {
        flex: 1;
    }
}
.top1_right1_div2{
  text-align: center;
  color: #9b9696;
  margin-bottom: 2vh;
}
.top1_right1_div12{
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2vh;
  img{
    width: 40%;
    height: auto;
  }
}
.top1_right1_div1{
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    border-radius: 50%;
    width: 30%;
    height: auto;

  }
}
h3{
        text-align: center;
        margin-bottom: 1vh;
      }
</style>