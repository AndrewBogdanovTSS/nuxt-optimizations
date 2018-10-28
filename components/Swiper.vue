<template>
    <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
    <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="banner in banners">
                <img :src="banner">
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                banners: [
                    'https://placeimg.com/800/480/any?1',
                    'https://placeimg.com/800/480/any?2',
                    'https://placeimg.com/800/480/any?3'
                ],
                swiperOption: {
                    slidesPerView: 1,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                }
            }
        }
    }
</script>