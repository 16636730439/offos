<template>
    <div class="box">
        <div class="left">

            <dl v-for="(item,index) in ziyuanhezuo" :key="index">
              <dt><img :src="item.img" alt=""></dt>
              <dd>
                <h3>{{ item.title }}</h3>

                <ul>
                  <li v-for="(item1,index1) in item.children" :key="index1">{{ item1 }}</li>
                </ul>
              </dd>
            </dl>

        </div>
        <div class="right">

          <div>
            查看不同方案对比>
          </div>
          
        </div>

    </div>
</template>
<script setup lang="ts">


const ziyuanhezuo = [
  {
    img:'https://tse4-mm.cn.bing.net/th/id/OIP-C.3n4dz5jnJat2XAthR42P9QHaEo?rs=1&pid=ImgDetMain',
    title: '设计个人版本',
    children:['适合个人使用','版权授权:个人商用','个人模版免费用']
  },
  {
    img:'https://ts1.cn.mm.bing.net/th/id/R-C.0b31e840a54f0b2968476cbbf55e866f?rik=SO06%2b%2b%2bOsjO38w&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50110%2f8335.jpg_wh1200.jpg&ehk=xt%2by6EhO2LkQhWDEmfv1z57lGksvQ7eOUIAEXgDPTqc%3d&risl=&pid=ImgRaw&r=0',
    title: '设计专业版',
    children:['适合个体户、小微企业','版权授权:企业商用','全场模版免费用']
  },
  {
    img:'https://img.zcool.cn/community/011aad554be56f000001bf72c38864.jpg@1280w_1l_2o_100sh.jpg',
    title:'营销旗舰版',
    children:['适合金融、教育、传媒、政府等大型企事业单位使用','版权授权:企业商用','支持多人协作']
  },
  {
    img:'https://www.keaitupian.cn/cjpic/frombd/2/253/2107631312/3178897554.jpg',
    title:'内容中心',
    children:['适合具有研发能力的大型企业或平台使用','平台使用·API无缝对接自有产品/小程序等','3分钟把易企秀搬回家']
  }
]


</script>
<style scoped lang="scss">
  .box{
    display: flex;
    flex-direction: column;
    .left{
      flex: 1;
      display: flex;
      // align-items: center;
      justify-content: space-evenly;

      dl{
        width: 22%;
        margin-top: 0.5rem;
        dt{
          width: 100%;
          height: auto;
          img{
            width: 100%;
            height: auto;
          }
        }
        dd{
          margin-top: 0.1rem;
          h3{
            margin-bottom: 0.1rem; 
          }
          ul{
            padding-left: 0.12rem;
          }
          ul li{
            line-height: 0.15rem;
          }
        }
      }
    }
    .right{
      width: 100%;
      height: 15%;
      border-top: solid 1px #000;
      div{
        display: flex;
        align-items: center;
        height: 100%;
        padding-left: 3%;
      }
    }
  }
</style>