<template>
    <div class="ddd">
        <img :src="item" v-for="(item,index) in props.brr" :key="index">
    </div>
</template>
<script setup lang="ts">

    import { defineProps } from 'vue'

    let props = defineProps(['brr'])
    console.log(props.brr);
    
</script>
<style scoped lang="scss">
    img:hover{
        transform:translateY(-8px);
        transform: all 1s;
    }
    .ddd{
        display: flex;
        img{
            display: inline-block;
            margin-left: 8%;
            width: 1rem;
            height: 1rem;
        }
    }
</style>