<template>
  <div class="main">
      
      <div class="main_item" v-for="(item,index) in props.main_left" :key="index">
          <!-- :class="[index==0? 'main_item_name_on':'main_item_name']" -->
          <div v-if="index==0" class="main_item_name_on">
              <div class="main_item_name_on_left">{{ item.name }}</div>
              <div @click="props.main_left_click(index,index1,item1)" :class="['main_item_name_on_right',index == props.main_left_on1 && index1 == props.main_left_on2 ? 'on' : '']" v-for="(item1,index1) in item.children" :key="index1">{{ item1.name }}</div>
          </div>
          <div v-else class="main_item_name">
              <div class="dasdasd">{{ item.name }}</div>
                <div @click="props.main_left_click(index,index1,item1)" :class="['main_item_name_children',index == props.main_left_on1 && index1 == props.main_left_on2 ? 'on' : '']" v-for="(item1,index1) in item.children" :key="index1">
                  {{ item1.name }}
                </div>
          </div>
          <!-- <div v-if="index==0" class="main_item_name_on_1">
              <div v-for="(item1,index1) in item.children" :key="index1">{{ item1.name }}</div>
          </div> -->

      </div>

  </div>
</template>
<script setup lang="ts">
  
  import { ref , onMounted , defineProps } from 'vue'

  let props = defineProps(['main_left','main_left_on1','main_left_on2','main_left_click'])

  console.log(props.main_left);
  
</script>
<style lang="scss" scoped>
  .main{
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 0.1rem;
    .on{
      background: rgb(209, 219, 236);
      color: rgb(18,97,255);
    }
    .main_item_name_on{
      display: flex;
      padding: 0.1rem 0;
      .main_item_name_on_right{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: start;
        height: 0.3rem;
        margin-top: 0.05rem;
        padding-left: 0.1rem;
      }
      .main_item_name_on_left{
        width: 0.35rem;
        text-align: center;
        padding: 0.03rem 0;
        border-radius: 50%;
        color: #fff;
        background: #298df0;
        font-size: 0.12rem;
      }
    }
    .main_item_name{
      margin-bottom: 0.1rem;
      // line-height: 0.3rem;
      // height: 0.3rem;
      .dasdasd{
        color: #ccc;
        font-size: 0.07rem;
      }
      .main_item_name_children{
        width: 60%;
        height: 0.3rem;
        display: flex;
        align-items: center;
        padding-left: 0.1rem;
        margin-left: 0.1rem;
        margin-top: 0.05rem;
        border-radius: 5px;
      }
    }
  }
</style>