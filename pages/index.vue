<template>
    <swiper class="swiper"></swiper>
</template>

<script>
    import Swiper from '@/components/Swiper.vue'
    export default {
        components: {Swiper}
    }
</script>

<style scoped>
    .swiper {
        width: 800px;
        height: 480px;
        overflow: hidden;
        position: relative;
    }
</style>