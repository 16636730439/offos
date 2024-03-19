<template>
    <div class="df">
        <div class="top">
            <slot name="topleft"></slot>

            <slot name="topright"></slot>
        </div>

        <div class="button">
            <slot name="buttom1"></slot>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
    .button{
        flex: 1;
        margin-left: 5%;
    }
    .top{
        width: 90%;
        margin-left: 5%;
        border-bottom: solid 1px #000;
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .df{
       display: flex;
       flex-direction: column;
    }
</style>