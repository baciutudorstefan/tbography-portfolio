<script setup> 
import fbIcon from "../../assets/images/facebook-f.svg"
import instaIcon from "../../assets/images/instagram.svg"
import unsplashicon from "../../assets/images/unsplash_icon.svg"
</script>

<template class="home__page">
    <div class="home__page-header">
        <p class="home__page-title">Tudor Baciu  -  Photography</p>
        <h2 class="home__page-description">Grateful to capture life’s joy with you</h2>
    </div>
    <section class="home__page-images--grid">
        <div class="home__page-image">
            <div class="home__page--modal">
                <p>citiscapes</p>   
                <p class="home__page--modal-details">A collection of cityscapes photography showcases stunning images of bustling metropolises and urban landscapes, capturing the unique architecture, lights, and energy of each city.</p>
                <a class="home__page--modal-cta" href="#">view gallery</a>
            </div>
            </div>
        <div class="home__page-image">landscape</div>
        <div class="home__page-image">desk</div>
        <div class="home__page-image">product</div>
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