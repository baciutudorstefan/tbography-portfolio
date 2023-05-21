<script setup> 
import { RouterLink, RouterView } from 'vue-router'

import fbIcon from "../../assets/images/facebook-f.svg"
import instaIcon from "../../assets/images/instagram.svg"
import unsplashicon from "../../assets/images/unsplash_icon.svg"
</script>

<template class="home__page">
    <div class="home__page-header">
        <p class="home__page-title">Tudor Baciu  -  Photography</p>
        <h2 class="home__page-description">collections</h2>
    </div>
    <section class="home__page-images--grid">
        <span class="home__page-image"><img src="../../assets/images/img_wrapper.jpg" alt=""> <RouterLink to="/citiscapes" class="home__page-images-title">citiscapes</RouterLink></span>
        <span class="home__page-image"><img src="../../assets/images/img_wrapper-1.jpg" alt=""> <RouterLink to="/landscape" class="home__page-images-title">landscape</RouterLink></span>
        <span class="home__page-image"><img src="../../assets/images/img_wrapper-2.jpg" alt=""> <RouterLink to="/desk" class="home__page-images-title">desk</RouterLink></span>
        <span class="home__page-image"><img src="../../assets/images/img_wrapper-3.jpg" alt=""> <RouterLink to="/product" class="home__page-images-title">product</RouterLink></span>
    </section>
    <div class="home__page-footer--section">
        <div>
        <h2 class="home__page-footer--title">Let's chat</h2>
        <p class="home__page-footer--desciption">Tudor has a keen eye for detail and composition, and his images have a sense of drama and atmosphere that draws the viewer in. His passion for photography is evident in every image he creates, making him a true master of his craft.</p>
        <section class="home__page-footer--social">
            <img width="22" height="22" :src="fbIcon" alt="" class="home__page-footer--icons">
            <img width="22" height="22" :src="instaIcon" alt="" class="home__page-footer--icons">
            <img width="22" height="22" :src="unsplashicon" alt="" class="home__page-footer--icons">
        </section>
        </div>
        <div class="signature">
            <img style="height: 100%;" src="../../assets/images/signature.svg" alt="signature">
        </div>
    </div>

</template>

<style scoped>
@import url(../../assets/Style/base.css);
@import url(../../assets/Style/home.css);
@import url(../../assets/Style/mq-home.css);

</style>