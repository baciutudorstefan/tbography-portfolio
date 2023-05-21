<script setup>
import fbIcon from "../../assets/images/facebook-f.svg"
import instaIcon from "../../assets/images/instagram.svg"
import unsplashicon from "../../assets/images/unsplash_icon.svg"
</script>

<template>
    <div class="about__page-header">
        <p class="about__page-title">Tudor Baciu  -  Photography</p>
        <h2 class="about__page-description">about</h2>
    </div>
    <div class="about__page-background--section">
        <span class="about__page-background--title">background</span>
        <p class="about__page-background--description">Tudor has always been drawn to photography, and after many years of honing his skills and perfecting his craft, he has established himself as a talented and creative photographer. He has a passion for capturing the beauty and essence of his subjects, whether they are portraits, landscapes, or products.</p>
    </div>
        <img class="about__page-background--image" src="../../assets/images/image 3 1.png" alt="">
    
    <div class="about__page-background--section">
        <span class="about__page-background--title">work</span>
        <p class="about__page-background--description">Tudor's work has been featured in galleries and exhibitions, and is highly sought after by art collectors and photography enthusiasts alike. He has a keen sense of drama and atmosphere, and his images are both powerful and memorable. Whether you are drawn to his portraits, landscapes, or still lifes, Tudor's work is sure to leave a lasting impression.</p>
    </div>
    <span style="padding: 32px 16px 32px 16px;">
    <a class="about__page-cta" href="http://unsplash.com">view collections</a>
</span>
<img class="about__page-background--image" src="../../assets/images/image 1 1.png" alt="">
<div class="about__page-background--section" style="padding-bottom: 60px ">
    <div class="philosophy">
        <span class="about__page-background--title">philosophy</span>
        <p class="about__page-background--description">Tudor's approach to photography is one of wonder and discovery. He believes that every image has the potential to tell a story and evoke emotion, and he strives to capture that in every shot. His images are not just mere representations of the world, but rather a reflection of his own personal vision and perspective.</p>
    </div>
    </div>
    <div class="home__page-footer--section" style="border-top: 1px solid black;">
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
<style>
@import url(../../assets/Style/home.css);
@import url(../../assets/Style/about.css);

</style>