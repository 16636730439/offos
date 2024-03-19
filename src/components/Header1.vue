<template>
    <div class="top">

      <div class="top_div1" @click="indexrouterClick">
        <img src="http://lib.eqh5.com/eqx.layout/images/new_logo.svg" alt="">
      </div>
      <div class="top_div2">
        <div class="top_div2_top"></div>

        <div v-for="(item, index) in top_div2" :key="index"
          :class="[top_div2_fontwidth == index ? 'on' : '', top_div2_color == index ? 'on1' : '', 'item_div']"
          @mouseover="onmouseover(item, index, 0)" @mouseleave="onmouseover(item, index, 1)">{{ item }}


          <!-- 资源合作 -->
          <div v-if="index == 5">
            <div class="ziyuanhezuo" style="border-radius: 20px;" v-show="index == top_div2_color"
              @mouseover="onmouseover(item, 5, 0)" @mouseleave="onmouseover(item, 5, 1)">
              <div v-for="(item, index) in ziyuanhezuo" :key="index" class="ziyuanhezuo_item">
                <div style="font-weight: 900; font-size: 0.12rem;"> {{ item.title }}</div>
                <div v-for="(item1, index1) in item.children" :key="index" class="huadong">
                  {{ item1 }}
                </div>
              </div>
            </div>
          </div>

          <!-- 内容中心 -->
          <div v-if="index == 4">
            <div class="nrzx" v-show="index == top_div2_color" @mouseover="onmouseover(item, 4, 0)"
              @mouseleave="onmouseover(item, 4, 1)">

              <div class="top1">

                <div class="top1_left1">

                  <div class="asdasdfsghjgfdsa">

                    <el-row>
                      <el-col :span="11" v-for="(item, index) in nrzxarr" :key="index"
                        @mouseover="onmouseover1(item, index, 0)" @mouseleave="onmouseover1(item, index, 1)">
                        <div :class="['col11', neirongpingborder == index ? 'col111' : '']">
                          <dl class="dl1">
                            <dt>
                              <img :src="item.img" alt="">
                            </dt>
                            <dd>

                              <div class="div111">{{ item.title }}</div>

                              <div class="div222">{{ item.nr }}</div>

                            </dd>
                          </dl>
                        </div>
                      </el-col>
                    </el-row>

                  </div>

                </div>
                <div class="top1_right1">
                  <div class="top1_right1_div1"> <img
                      src="https://pic1.zhimg.com/v2-70e686bea7cd1ef9a050cd10b5a61810_r.jpg?source=1940ef5c" alt="">
                  </div>
                  <h3>Hi, 我是您的专属购目向导</h3>
                  <div class="top1_right1_div2">为1000+ 企业提供内容数字化方案</div>
                  <div class="top1_right1_div12"><img
                      src="https://marketplace.canva.cn/EADi_D_H6FQ/1/0/1600w/canva-%E8%93%9D%E9%BB%84%E8%89%B2%E7%AE%80%E6%B4%81%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81-9xsWrcA28YU.jpg"
                      alt=""></div>
                  <div class="top1_right1_div2">立即扫码,真人资讯</div>
                </div>

              </div>
              <div class="xia">
                <div> 更多行业和场景解决方案></div>
              </div>

            </div>
          </div>

          <!-- 解决方案 -->
          <div v-if="index == 3">
            <div class="jjfa" v-show="index == top_div2_color" @mouseover="onmouseover(item, 3, 0)"
              @mouseleave="onmouseover(item, 3, 1)">
              <JjfaView class="JjfaView"></JjfaView>
            </div>
          </div>
          <!-- 产品服务 -->
          <div v-if="index == 2">
            <div class="jjfa1" v-show="index == top_div2_color" @mouseover="onmouseover(item, 2, 20)"
              @mouseleave="onmouseover(item, 2, 1)">
              <JjfaView class="JjfaView"></JjfaView>
            </div>
          </div>

          <!-- 开通会员 -->
          <div v-if="index == 1">
            <div class="jjfa3" v-show="index == top_div2_color" @mouseover="onmouseover(item, 2, 20)"
              @mouseleave="onmouseover(item, 2, 1)">
              <JjfaView1 class="JjfaView"></JjfaView1>
            </div>
          </div>

          <!-- 免费模版 -->
          <div v-if="index == 0">
            <div class="jjfa2" v-show="index == top_div2_color" @mouseover="onmouseover(item, 0, 20)"
              @mouseleave="onmouseover(item, 0, 1)">
              <JjfaView class="JjfaView"></JjfaView>
            </div>
          </div>


        </div>


      </div>


      <div class="top_div3">
        <div></div>
        <div></div>
        <div></div>

        <!-- <div class="top_div3_div4">登录/注册</div> -->
      </div>

    </div>
</template>
<script setup lang="ts">
import JjfaView from '@/components/JjfaView.vue';
import JjfaView1 from '@/components/JjfaView1.vue';
import right_heng from '@/components/right_heng.vue'
import DayMoun from '@/components/DayMoun.vue'
import router from '@/router';
import { el, fa } from 'element-plus/es/locale/index.mjs';
import LunarCalendar from "lunar-calendar";
import { onMounted, reactive, ref, toRefs } from 'vue';
import  png1 from "../../public/h5.png"

console.log(png1)

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue';
const data1 = ref([
  {
    name: "精选推荐",
    index: '1',
    img: import('../../public/shou.png')
  },
  {
    name: "工作台",
    index: '2',
    img: import('../../public/gongzuo.png')
  },
  {
    name: "创建设计",
    index: '3',
    img: import('../../public/sheji.png')
  },
  {
    name: "偏好设置",
    index: '4',
    img: import('../../public/shezhi.png')
  },
  {
    name: "我的收藏",
    index: '5',
    img: import('../../public/shoucang.png')
  }
])
const data2 = ref([
  {
    name: "H5",
    index: '6',
    img: import("../../public/h5.png")
  },
  {
    name: "海报",
    index: '7',
    img: import("../../public/haibao.png")
  },
  {
    name: "长页",
    index: '8',
    img: import("../../public/changye.png")
  },
  {
    name: "表单",
    index: '9',
    img: import("../../public/biaodan.png")
  },
  {
    name: "互动",
    index: '10',
    img: import("../../public/hudong.png")
  },
  {
    name: "电子画册",
    index: '11',
    img:import("../../public/huace.png")
  },
  {
    name: "视频",
    index: '12',
    img:import("../../public/shipin.png")
  },
  {
    name: "数字人",
    index: '13',
    img: import("../../public/shuziren.png")
  },
  {
    name: "AI创作",
    index: '14',
    img: import("../../public/AI.png")
  },
  
])
const data3 = ref([
  {
    name: "案例中心",
    index: '17',
    img: import("../../public/xiaoxi.png")
  },
  {
    name: "正版素材",
    index: '18',
    img: import("../../public/wenjianjia.png")
  },
  {
    name: "成为设计师",
    index: '19',
    img: import("../../public/wo.png")
  },
])
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

// 顶部免费模版数据
const top_div2 = ['免费模版', '开通会员', '产品服务', '解决方案', '内容中台', '资源合作']
// 资源与合作的数据
const ziyuanhezuo = [
  {
    title: '生态合作',
    children: ['招募合作人', '招募服务商', '招募设计师']
  },
  {
    title: '资源中心',
    children: ['客户案例', '实战攻略', '白皮书', '直播视频']
  },
  {
    title: '帮助',
    children: ['帮助中心', '在线客服']
  }
]
// 内容中心的数据
const nrzxarr = [
  {
    img: 'https://img-qn.51miz.com/Element/00/82/05/14/d0a83f16_E820514_3c2d3376.png',
    title: '小程序互动营销',
    nr: '丰富的活动整合营销,快速上新活动,支持微信小程序和支付宝小程序'
  },
  {
    img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.bUVK5EiCXfTNgPt2vQu9agHaHa?rs=1&pid=ImgDetMain',
    title: 'SasS行业内容平台解决方案',
    nr: '对接6大创意工具,嵌入海量模版素材,打通产品业务闭环',
  },
  {
    img: 'https://ts1.cn.mm.bing.net/th/id/R-C.3c1b2a57fde50a562991d394033f439d?rik=torsL7VR16Hhqg&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20171219%2f4cdcc7d5ac0f41f9b208c0873386ead7.jpeg&ehk=ZNfKDM4I74gkFCTfz8UuP2mq%2fqcDUoQ1zLNfrMEx8LQ%3d&risl=&pid=ImgRaw&r=0',
    title: 'APP运营',
    nr: '丰富的模版素材,覆盖APP拉新,促活,转化多应用场景',
  },
  {
    img: 'https://img.tukuppt.com/png_preview/00/31/42/dNgQFw9m8O.jpg!/fw/780',
    title: '金融保险行业内容中台解决方案',
    nr: '批量生成年度账单、产品落地页，营销协同，贼能全员厘地化营销'
  },
  {
    img: 'https://img.88icon.com/download/jpg/201912/53316367bddf7e6d248882ab3355429d.jpg!bg',
    title: '精准活动营销',
    nr: '访客与自有用户系统打通，客户分群运营.精准将福利匹配到高价值用户'
  },
  {
    img: 'https://bpic.588ku.com/element_origin_min_pic/19/07/25/3992c7425c44984cddc1768d63bc3df2.jpg',
    title: '零售连锁行业内容中台解决方案',
    nr: '紧跟热点，快速生成营销活动内容。打通社群、小程序、门店，持续引流'
  },
  {
    img: 'https://img.tukuppt.com/png_preview/00/07/72/OQcVCPfBLx.jpg!/fw/780',
    title: '门店引流',
    nr: '丰富的活动营销玩法，提升门店客流增长、新客首单、老客复购转化效率'
  },
  {
    img: 'https://upload.shejihz.com/2020/02/2be1c20402c78966710c5048904dd326.jpg?x-oss-process=image/resize,m_fill,w_1440,h_1440#',
    title: '融媒体内容中台解决方案',
    nr: '0研发高效创意内容供给，创新公益活动，自有品牌曝光，无第三方广告标识'
  }
]
// 顶部控制字体加粗的
const top_div2_fontwidth = ref(0);
// 顶部控制字体变换颜色的
const top_div2_color = ref(-1);
// 控制内容平台 dl 边框
const neirongpingborder = ref(-1);
// 搜索框左侧的显示数据
const right_top_center_left = ref('全部')
// 显示数据的
const right_top_center_left_arr = ['全部', 'H5', '海报', '长页', '表单', '互动', '电子画册', '视频', '解决方案']
// 控制显示的
const right_top_center_left_show = ref(false)

const state = reactive({
  fits: ['fill'],
  url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
})
const { fits, url } = toRefs(state)
// 控制顶部的一个定时器
let time;
let time1;

// 轮播图数据
const lun = ['https://img.zcool.cn/community/01540056de68de32f875520f745f67.jpg@2o.jpg', 'https://img.zcool.cn/community/013a1556de68dd6ac72531cba54c5d.jpg@2o.jpg', 'https://img.zcool.cn/community/013e2856de68d832f875520f52d6c8.jpg@2o.jpg']
const lunon = ref(0);


const indexrouterClick = () => {
  router.push('/')
}

const onmouseover = (item, index, pd) => {
  if (pd == 0) {
    clearTimeout(time);
    top_div2_color.value = index;
  } else {

    time = setTimeout(() => {
      top_div2_color.value = -1;
    }, 1000)
  }
}
const onmouseover1 = (item, index, pd) => {

  console.log(pd);

  if (pd == 0) {
    clearTimeout(time1);
    neirongpingborder.value = index;
  } else {
    neirongpingborder.value = -1;
    console.log(neirongpingborder.value);
  }
}
const onmouseover2 = (pd) => {
  if (pd == 0) {
    right_top_center_left_show.value = true;
  } else {
    right_top_center_left_show.value = false;
  }
}
const qiehuan = (item) => {
  right_top_center_left.value = item;
}

const input = ref('')


onMounted(() => {
  setInterval(() => {
    if (lunon.value >= 2) {
      lunon.value = 0;
    } else {
      lunon.value++
    }

  }, 3000)
})

let brr = [
  'https://ts1.cn.mm.bing.net/th/id/R-C.ad9336f1ee46975070f29d734ee30a2c?rik=7y5joclfZ58ZWw&riu=http%3a%2f%2fn.sinaimg.cn%2ftranslate%2fw600h887%2f20171211%2fustw-fypnsip6778093.jpg&ehk=ELT0I8m3rED8myxt7HuE85jvbxfG%2fLQqqpz42cuaE7E%3d&risl=&pid=ImgRaw&r=0',
  'https://n.sinaimg.cn/sinakd20118/470/w861h1209/20200715/e9b0-iwhseiu7647051.jpg',
  'https://ts1.cn.mm.bing.net/th/id/R-C.159f3df1dbfa6c3f8c8184f9401d507a?rik=hQ6EIUnpweZ%2fkw&riu=http%3a%2f%2fn.sinaimg.cn%2ftranslate%2f20170702%2fyeVP-fyhskrq0967274.jpg&ehk=iKnrqNmDNLd8Gdojgpz1BWseWlslxIkx0JfGF7r%2b2ko%3d&risl=&pid=ImgRaw&r=0',
  'https://tse2-mm.cn.bing.net/th/id/OIP-C.0RDmd4UwDKhtE-2Te8RYHAHaLF?rs=1&pid=ImgDetMain',
  'https://tse1-mm.cn.bing.net/th/id/OIP-C.WnEZLzsTr1RFoi8uXXJVjgHaLJ?rs=1&pid=ImgDetMain',
  'https://ts1.cn.mm.bing.net/th/id/R-C.c78316eac90270f8ed8116d547613090?rik=iwHX2FYUc9NjPg&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn%2f20170827%2f45ef-fykiufe7004199.jpg&ehk=DSK43itf30vJVVlQb0%2fdzbmuAPSy9usAF8kuehNgh7I%3d&risl=&pid=ImgRaw&r=0',
  'https://n.sinaimg.cn/sinakd10100/613/w1242h1771/20200326/c3eb-irkazzv1523425.jpg',
  'https://n.sinaimg.cn/translate/20170829/9V_W-fykiufe7410932.jpg',
]

let zuo = ref(false);
let you = ref(true)
let dingwei1 = ref(null)

const gundong1 = () => {
  console.log(dingwei1.value.scrollLeft);
  if (dingwei1.value.scrollLeft > 10) {
    zuo.value = true
  }
  if (dingwei1.value.scrollLeft < 10) {
    zuo.value = false
  }
  if (dingwei1.value.scrollLeft < 180) {
    you.value = true
  }
  if (dingwei1.value.scrollLeft > 180) {
    you.value = false
  }

}
const youclick = () => {
  you.value = false;
  zuo.value = true;
  dingwei1.value.scrollLeft = 180
}
const zouclick = () => {
  you.value = true;
  zuo.value = false;
  dingwei1.value.scrollLeft = 0
}

const shang_zuo_arr = ['精选推荐', '开工大吉', '元宵节', '3月你好', '爱耳日', '妇女节'];
const index11 = ref(0);
const onmouseover3 = (item, index, pd) => {
  index11.value = index;
}

const drr = ref(
  [
    {
      drr: [
        {
          img: [import('../../public/c.jpg'), import('../../public/i.jpg'), import('../../public/e.jpg'), import('../../public/f.jpg'), import('../../public/g.jpg'), import('../../public/h.jpg'), import('../../public/i.jpg')],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
        {
          img: [import('../../public/c.jpg'), import('../../public/i.jpg'), import('../../public/e.jpg'), import('../../public/f.jpg'), import('../../public/g.jpg'), import('../../public/h.jpg'), import('../../public/i.jpg')],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
        {
          img: [import('../../public/i.jpg')],
          span: '长图',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          transformtranslateY: 0,
        },
        {
          img: [import('../../public/f.jpg')],
          span: '长图',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          transformtranslateY: 0,
        },
        {
          img: [import('../../public/c.jpg'), import('../../public/i.jpg'), import('../../public/e.jpg'), import('../../public/f.jpg'), import('../../public/g.jpg'), import('../../public/h.jpg'), import('../../public/i.jpg')],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
        {
          img: [import('../../public/c.jpg'), import('../../public/i.jpg'), import('../../public/e.jpg'), import('../../public/f.jpg'), import('../../public/g.jpg'), import('../../public/h.jpg'), import('../../public/i.jpg')],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
        {
          img: [import('../../public/e.jpg')],
          span: '长图',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          transformtranslateY: 0,
        },
      ]
    },
    {
      drr: [
         {
          img: [import('../../public/i.jpg')],
          span: '长图',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          transformtranslateY: 0,
        },
        {
          img: [import('../../public/f.jpg')],
          span: '长图',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          transformtranslateY: 0,
        },
        {
          img: [import('../../public/c.jpg'), import('../../public/i.jpg'), import('../../public/e.jpg'), import('../../public/f.jpg'), import('../../public/g.jpg'), import('../../public/h.jpg'), import('../../public/i.jpg')],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
        {
          img: [import('../../public/c.jpg'), import('../../public/i.jpg'), import('../../public/e.jpg'), import('../../public/f.jpg'), import('../../public/g.jpg'), import('../../public/h.jpg'), import('../../public/i.jpg')],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
        {
         img: [import('../../public/c.jpg'), import('../../public/i.jpg'), import('../../public/e.jpg'), import('../../public/f.jpg'), import('../../public/g.jpg'), import('../../public/h.jpg'), import('../../public/i.jpg')],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
       
        {
          img: [import('../../public/c.jpg'), import('../../public/i.jpg'), import('../../public/e.jpg'), import('../../public/f.jpg'), import('../../public/g.jpg'), import('../../public/h.jpg'), import('../../public/i.jpg')],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
        {
          img: [import('../../public/e.jpg')],
          span: '长图',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          transformtranslateY: 0,
        },
      ]
    },
     {
      drr: [
        {
          img: [import('../../public/c.jpg'),import('../../public/i.jpg'),import('../../public/e.jpg'), import('../../public/f.jpg'), import('../../public/g.jpg'), import('../../public/h.jpg'), import('../../public/i.jpg')],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
        {
          img: [import('../../public/c.jpg'),import('../../public/i.jpg'),import('../../public/e.jpg'), import('../../public/f.jpg'), import('../../public/g.jpg'), import('../../public/h.jpg'), import('../../public/i.jpg')],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
        {
          img: ['../../public/i.jpg'],
          span: '长图',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          transformtranslateY: 0,
        },
        {
          img: ['../../public/f.jpg'],
          span: '长图',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          transformtranslateY: 0,
        },
        {
         img: [import('../../public/c.jpg'),import('../../public/i.jpg'),import('../../public/e.jpg'), import('../../public/f.jpg'), import('../../public/g.jpg'), import('../../public/h.jpg'), import('../../public/i.jpg')],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
        {
          img: [import('../../public/c.jpg'),import('../../public/i.jpg'),import('../../public/e.jpg'), import('../../public/f.jpg'), import('../../public/g.jpg'), import('../../public/h.jpg'), import('../../public/i.jpg')],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
        {
          img: [import('../../public/e.jpg')],
          span: '长图',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          transformtranslateY: 0,
        },
      ]
    },
    {
      drr: [
         {
          img: ['../../public/i.jpg'],
          span: '长图',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          transformtranslateY: 0,
        },
        {
          img: ['../../public/f.jpg'],
          span: '长图',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          transformtranslateY: 0,
        },
        {
          img: ['../../public/c.jpg', '../../public/i.jpg', '../../public/e.jpg', '../../public/f.jpg', '../../public/g.jpg', '../../public/h.jpg', '../../public/i.jpg'],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
        {
          img: ['../../public/c.jpg', '../../public/i.jpg', '../../public/e.jpg', '../../public/f.jpg', '../../public/g.jpg', '../../public/h.jpg', '../../public/i.jpg'],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
        {
          img: ['../../public/c.jpg', '../../public/i.jpg', '../../public/e.jpg', '../../public/f.jpg', '../../public/g.jpg', '../../public/h.jpg', '../../public/i.jpg'],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
       
        {
          img: ['../../public/c.jpg', '../../public/i.jpg', '../../public/e.jpg', '../../public/f.jpg', '../../public/g.jpg', '../../public/h.jpg', '../../public/i.jpg'],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
        {
          img: ['../../public/e.jpg'],
          span: '长图',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          transformtranslateY: 0,
        },
      ]
    },
     {
      drr: [
        {
          img: ['../../public/c.jpg', '../../public/i.jpg', '../../public/e.jpg', '../../public/f.jpg', '../../public/g.jpg', '../../public/h.jpg', '../../public/i.jpg'],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
        {
          img: ['../../public/c.jpg', '../../public/i.jpg', '../../public/e.jpg', '../../public/f.jpg', '../../public/g.jpg', '../../public/h.jpg', '../../public/i.jpg'],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
        {
          img: ['../../public/i.jpg'],
          span: '长图',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          transformtranslateY: 0,
        },
        {
          img: ['../../public/f.jpg'],
          span: '长图',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          transformtranslateY: 0,
        },
        {
          img: ['../../public/c.jpg', '../../public/i.jpg', '../../public/e.jpg', '../../public/f.jpg', '../../public/g.jpg', '../../public/h.jpg', '../../public/i.jpg'],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
        {
          img: ['../../public/c.jpg', '../../public/i.jpg', '../../public/e.jpg', '../../public/f.jpg', '../../public/g.jpg', '../../public/h.jpg', '../../public/i.jpg'],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
        {
          img: ['../../public/e.jpg'],
          span: '长图',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          transformtranslateY: 0,
        },
      ]
    },
    {
      drr: [
         {
          img: ['../../public/i.jpg'],
          span: '长图',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          transformtranslateY: 0,
        },
        {
          img: ['../../public/f.jpg'],
          span: '长图',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          transformtranslateY: 0,
        },
        {
          img: ['../../public/c.jpg', '../../public/i.jpg', '../../public/e.jpg', '../../public/f.jpg', '../../public/g.jpg', '../../public/h.jpg', '../../public/i.jpg'],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
        {
          img: ['../../public/c.jpg', '../../public/i.jpg', '../../public/e.jpg', '../../public/f.jpg', '../../public/g.jpg', '../../public/h.jpg', '../../public/i.jpg'],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
        {
          img: ['../../public/c.jpg', '../../public/i.jpg', '../../public/e.jpg', '../../public/f.jpg', '../../public/g.jpg', '../../public/h.jpg', '../../public/i.jpg'],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
       
        {
          img: ['../../public/c.jpg', '../../public/i.jpg', '../../public/e.jpg', '../../public/f.jpg', '../../public/g.jpg', '../../public/h.jpg', '../../public/i.jpg'],
          span: 'H5',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          ref1:'H5',
        },
        {
          img: ['../../public/e.jpg'],
          span: '长图',
          fei: '会员免费用',
          title: '鎏金公司开工大吉企业开',
          userimg: 'https://tupian.qqw21.com/article/UploadPic/2020-4/2020442225651771.jpg',
          username: '小北设计',
          ren: 218,
          drr_span: false,
          drr_fei: false,
          drr_img: 0,
          transformtranslateY: 0,
        },
      ]
    },
  ]
)

const x = ref(0);
const H5 = ref(null)
let timedrr = ref(null)
const onmouseover4 = (item, index, pd) => {
  console.log(drr.value[index11.value]);
  
  if (pd == 0) {
    drr.value[index11.value].drr.forEach((item1, index1) => {
      item1.drr_fei = false;
      item1.drr_span = false;
    })
    drr.value[index11.value].drr[index].drr_span = true;
    drr.value[index11.value].drr[index].drr_fei = true;
    if (item.span == 'H5') {
      console.log(H5.value);
        // console.log(H5.value[index].drr[index].ref1);
        
      onmouseover5(H5.value[index], item.img, index);
    }
  } else {
    drr.value[index11.value].drr.forEach((item1, index1) => {
      item1.drr_fei = false;
      item1.drr_span = false;
      item1.drr_img = 0;
    })
    clearInterval(timedrr.value);
  }
}
const pagesclick = (e) => {
  x.value = e.layerX;
}
const onmouseover5 = (dom1, imgarr, index) => {
  document.addEventListener("mousemove", pagesclick)
  drr.value[index11.value].drr[index].drr_img = parseInt((x.value - dom1.offsetLeft) / parseInt(dom1.offsetWidth / imgarr.length))
  // console.log(drr.value[index11.value].drr[index].drr_img);
  console.log( x.value , dom1.offsetLeft , dom1.offsetWidth , imgarr.length);
  
  if (drr.value[index11.value].drr[index].drr_img > 6) { 
    drr.value[index11.value].drr[index].drr_img = 6;
  }
}

const xia_right = ref(null);
const zuo1 = ref(false);
const you1 = ref(true)

const scroll1 = () => {
  console.log(xia_right.value.scrollLeft);
  if (xia_right.value.scrollLeft > 10) {
    zuo1.value = true;
  }
  if (xia_right.value.scrollLeft < 10) {
    zuo1.value = false;
  }
  if (xia_right.value.scrollLeft > 600) {
    you1.value = false
  }
  if (xia_right.value.scrollLeft < 600) {
    you1.value = true;
  }
}
const left1click1 = () => {
  xia_right.value.scrollLeft = 0;
  scroll1()
}
const you1click1 = () => {
  xia_right.value.scrollLeft = 610;
  scroll1()
}


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
console.log(year.value , month1.value , strDate.value);
const weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
const nowWeek = weeks[new Date().getDay()]

let month = LunarCalendar.solarCalendar(year.value,month1.value);

const month2= LunarCalendar.solarToLunar(year.value,month1.value,strDate.value)

// console.log();

let month3 = ref(LunarCalendar.calendar(year.value,month1.value).monthData)


const month1jia=async (item)=>{
  if(item == '回到今天'){
    getNowFormatDate()
  }else if(item == '下月'){
    console.log('下月');
    month1.value = parseInt(month1.value)+1;
    month1.value = month1.value < 10 ? '0' + month1.value : month1.value
  }else{
    month1.value = parseInt(month1.value)-1;
     month1.value = month1.value < 10 ? '0' + month1.value : month1.value
  }
  console.log(month1.value,'=================================================988');  
  if(parseInt(month1.value)>12){
    month1.value = 1;
    year.value = year.value+1
  }else if(parseInt(month1.value)<1)
  {
    month1.value =12;
    year.value = year.value-1
  }
  month3.value =await LunarCalendar.calendar(year.value,month1.value).monthData
}


const djqh=(item,index)=>{
  console.log(item,index);

  router.push({path:'/info',query:{...item}})
  
}

</script>
<style scoped lang="scss">
.xia_right_main {
  position: relative;
  width: 6.8rem;

  .xia_right_left {
    position: absolute;
    width: 0.3rem;
    height: 0.3rem;
    left: 0;
    top: 1rem;
    background: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.2rem;
    border-radius: 50%;
    color: #fff;
  }

  .xia_right_right {
    position: absolute;
    width: 0.3rem;
    height: 0.3rem;
    right: 0;
    top: 1rem;
    background: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.2rem;
    border-radius: 50%;
    color: #fff;
  }
}

.xia_right {
  overflow: scroll;
  position: relative;

}

.xia_right::-webkit-scrollbar {
  display: none
}

.xia_right_nr_item_div_div1_xia_left_div::-webkit-scrollbar {
  display: none
}

#xia_right_nr_item_div_div1_xia_left_div_img:hover {
  transform: translateY(-2.6rem);
}

.xia_right_nr_item_div_div1_xia_left_div {
  height: 2.16rem;
  overflow: scroll;

  #xia_right_nr_item_div_div1_xia_left_div_img {
    height: 5rem;
    transition-duration: 5s;
  }

  img {
    height: 5rem;
  }
}

.xia_right {
  // flex: 1;
  height: 100%;
  width: 100%;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;

  .xia_right_nr {
    width: 100%;
    height: 80%;
    background: aqua;
    display: flex;

    .xia_right_nr_item:hover {
      transform: translateY(-0.24rem);
      box-shadow: 0 0 0.2rem #000;
    }

    .xia_right_nr_item {
      width: 1.5rem;
      height: 100%;
      background: pink;
      margin-right: 0.1rem;

      .xia_right_nr_item_div {
        height: 100%;
        width: 1.5rem;
        background: seagreen;
        position: relative;

        img {
          width: 100%;
          height: 100%;
        }

        .xia_right_nr_item_div_div1 {
          position: absolute;
          width: 100%;
          height: 0.5rem;
          background: #fff;

          .xia_right_nr_item_div_div1_xia {
            width: 100%;
            height: 0.2rem;
            margin-top: 0.05rem;
            display: flex;

            .xia_right_nr_item_div_div1_xia_right {
              width: 20%;
              margin-left: 12%;
              height: 0.2rem;
              display: flex;
              align-items: center;

              span {
                margin-left: 0.01rem;
              }
            }

            .xia_right_nr_item_div_div1_xia_left {
              width: 45%;
              display: flex;
              margin-left: -0.1rem;
              align-items: center;

              img {
                border-radius: 50%;
                height: 0.2rem;
                width: auto;
                display: inline-block;
                margin-right: 0.05rem;
              }

              span {
                font-size: 0.08rem;
              }
            }
          }

          div {
            line-height: 0.2rem;
            padding-left: 0.1rem;
          }
        }

        .span2 {
          position: absolute;
          bottom: 0.03rem;
          right: 0.05rem;
          padding: 0.02rem 0.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgb(255, 224, 181);
          color: rgb(119, 61, 23);
          border-radius: 3px;
          display: inline-block;
        }

        .span1 {
          position: absolute;
          bottom: 0.03rem;
          left: 0.05rem;
          padding: 0.02rem 0.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          color: #fff;
          border-radius: 3px;
          display: inline-block;
        }

      }
    }


  }
}

.shang_zuo_arr {
  display: flex;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;

  span {
    display: inline-block;
    padding: 0.1rem 0.2rem;
    background: #ccc;
    border-radius: 20px;
  }

  .onn1 {
    color: #fff;
    background: rgb(18, 97, 255);
  }
}

.jingrituijian {
  width: 100%;
  height: 3.2rem;
  margin-top: 0.1rem;
  background: saddlebrown;
  display: flex;
  flex-direction: column;

  .shang {
    height: 0.5rem;
    background: #fff;
    display: flex;

    .shang_zuo {
      width: 90%;
      display: flex;

      .huiyuanmianfei {
        height: 70%;
        display: flex;
        align-items: flex-end;
        margin-right: 3%;
        color: rgb(194, 143, 102);
      }

      .shang_zuo_left {
        font-weight: 900;
        padding-left: 0.2rem;
        font-size: 0.17rem;
        width: 10%;
        display: flex;
        align-items: center;
        margin-right: 2%;
        justify-content: center;
      }
    }

    .shang_right {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #665f5f;
    }
  }

  .xia {
    flex: 1;
    display: flex;

    .xia_left {
      width: 20%;
      height: 100%;
      // background: orange;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .xia_left_img1:hover {
        box-shadow: 0px 0px 10px #000;
      }

      .xia_left_img2:hover {
        box-shadow: 0px 0px 10px #000;
      }

      .xia_left_img1 {
        width: 90%;
        margin-bottom: 0.1rem;
        border-radius: 10px;
      }

      .xia_left_img2 {
        width: 90%;
        border-radius: 10px;
      }
    }

    .xia_right {
      flex: 1;
    }
  }
}

.houzi {
  position: relative;

  .you {
    position: absolute;
    right: 0;
    top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0.3rem;
    height: 0.3rem;
    text-align: center;
    z-index: 998;
    background: #fff;
    border: solid 1px #000;
    border-radius: 50%;
  }

  .zuo {
    position: absolute;
    left: -0.12rem;
    top: 0.5rem;
    text-align: center;
    z-index: 998;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0.3rem;
    height: 0.3rem;
    background: #fff;
    border: solid 1px #000;
    border-radius: 50%;
  }
}

.dingwei1::-webkit-scrollbar {
  display: none
}

.dingwei1 {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.3rem;
  width: 100%;
  overflow: scroll;
  background: #fff;

  .you {
    position: absolute;
    right: 0;
    top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0.3rem;
    height: 0.3rem;
    text-align: center;
    z-index: 998;
    background: #fff;
    border: solid 1px #000;
    border-radius: 50%;
  }

  .zuo {
    position: absolute;
    left: 0rem;
    top: 0.5rem;
    text-align: center;
    z-index: 998;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0.3rem;
    height: 0.3rem;
    background: #fff;
    border: solid 1px #000;
    border-radius: 50%;
  }
}

.right_heng {
  height: 1rem;
  width: 100%;
  margin-top: 0.1rem;
  background: #fff;
  // overflow: scroll;
}

.right_lun {
  width: 100%;
  height: 2rem;
  display: flex;

  img {
    width: 181%;
    height: 100%;
  }
}

.right_top {
  height: 0.6rem;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .right_top_left {
    width: 15%;
    height: 60%;
    background: red;
    border-radius: 30px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .right_top_center {
    width: 50%;
    height: 40%;
    border: solid 1px rgb(18, 97, 255);
    display: flex;

    .right_top_center_center {
      flex: 1;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .right_top_center_right {
      width: 10%;
      background: rgb(18, 97, 255);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-weight: 900;
    }

    .right_top_center_left {
      width: 13%;
      border-right: solid 1px #000;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.07rem;
      font-style: 900;
      position: relative;

      .xiahe {
        position: absolute;
        left: 0;
        top: 0.25rem;
        width: 100%;
        height: 2rem;
        background: #fff;
        border: solid 1px #ccc;
        border-radius: 5px;
        box-shadow: inset;
        display: flex;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .right_top_center_left_on {
          color: rgb(18, 97, 255);
        }
      }

      .right_top_center_left:hover.donghua {
        transform: rotate(180deg);
        transition: all 1s;
      }

      div {
        margin-right: 0.02rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .right_top_right {
    width: 25%;
    height: 60%;
    border: solid 1px #000;
  }
}

.top_div3 {
  height: 100%;
  flex: 1;
  // padding-top: 20%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  div {
    width: 10vw;
  }

  .top_div3_div4 {
    height: 60%;
    width: 10vw;
    background: rgb(18, 97, 255);
    border-radius: 15px;
    color: #fff;
    font-weight: 900;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.jjfa3 {
  position: absolute;
  z-index: 999;
  width: 60vw;
  height: 3rem;
  background: #fff;
  color: #000;
  top: 5vh;
  left: -8vw;
  border-radius: 20px;
  overflow: hidden;

  .JjfaView {
    width: 100%;
    height: 100%;
  }
}

.jjfa2 {
  position: absolute;
  z-index: 999;
  width: 50vw;
  height: 2.5rem;
  background: #fff;
  color: #000;
  top: 5vh;
  left: -2vw;
  border-radius: 20px;
  overflow: hidden;

  .JjfaView {
    width: 100%;
    height: 100%;
  }
}

.jjfa1 {
  position: absolute;
  z-index: 999;
  width: 50vw;
  height: 2.5rem;
  background: #fff;
  color: #000;
  top: 5vh;
  left: -15vw;
  border-radius: 20px;
  overflow: hidden;

  .JjfaView {
    width: 100%;
    height: 100%;
  }
}

.jjfa {
  position: absolute;
  z-index: 999;
  width: 50vw;
  height: 2.5rem;
  background: #fff;
  color: #000;
  top: 5vh;
  left: -21vw;
  border-radius: 20px;
  overflow: hidden;

  .JjfaView {
    width: 100%;
    height: 100%;
  }
}

.top1_right1_div2 {
  text-align: center;
  color: #9b9696;
  margin-bottom: 2vh;
}

.top1_right1_div12 {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2vh;

  img {
    width: 40%;
    height: auto;
  }
}

.top1_right1_div1 {
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 50%;
    width: 30%;
    height: auto;

  }
}

.huadong:hover {
  color: rgb(63, 131, 235);
}
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
  width: 100vw;
  height: 100vh;
  background: #fff;
  font-size: 0.1rem;
  display: flex;
  flex-direction: column;

 

  .center::-webkit-scrollbar {
    display: none
  }

  .center {
    flex: 1;
    background: #fff;
    display: flex;
    overflow: scroll;

    .left {
      width: 15%;
      height: 100%;
      background: salmon;
      overflow: scroll;
    }

    .left::-webkit-scrollbar {
      display: none
    }

    .right {
      flex: 1;
      background: antiquewhite;
    }

  }
}</style>