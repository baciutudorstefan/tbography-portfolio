<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {onMounted, watch, ref } from 'vue';
import menuicn from "../../assets/images/menuicn.svg";
import { MDBCollapse} from "mdb-vue-ui-kit";

let collapse9 = ref(false);

watch(collapse9, (value) => {
      if (value) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    });

</script>

<template>
    <div class="menu">
        <span class="brand__logo">
        <img class="menu__logo" src="../../assets/images/logo_mark.png" alt="logo__nav" width="48" height="48"> 
        </span>
        <div class="menu__route">
            <MDBCollapse v-model="collapse9" id="navbarToggleExternalContent9" class="menu__navigation">
                <nav class="menu__wrapper">
                  <Transition name="fade">

                  <span class="menu__route-nav" style="overflow: hidden !important;">  
                    <RouterLink @click="collapse9 = !collapse9" to="/">home</RouterLink>
                    <RouterLink @click="collapse9 = !collapse9" to="/about">about</RouterLink>
                    <RouterLink @click="collapse9 = !collapse9" to="/collections">collections</RouterLink>
                    <RouterLink @click="collapse9 = !collapse9" to="/chat">let's chat</RouterLink>
                  </span>
                  </Transition>
                  <!-- <span class="menu__route-image"></span> -->
                  <img class="menu__route-image" src="/src/assets/images/tb_menu_pic 1.png" alt="">

                </nav>
            </MDBCollapse>
        </div>
        <button @click="collapse9 = !collapse9" class="navbar-toggler first-button"
          :aria-expanded="collapse9" aria-label="Toggle navigation"
          aria-controls="navbarToggleExternalContent9">
          <div class="animated-icon1" :class="[collapse9 && 'open']">
            <span></span><span></span><span></span>
          </div>
        </button>
    </div>
</template>

<style>
@import url(../../assets/Style/navigation.css);
@import url(../../assets/Style/mq-navigation.css);

.menu__route-image{
  display: none;
}
.navbar{
    margin: none !important;
    padding: none !important;
}
.navbar-toggler{
    border: 1px solid black !important;
    padding: 8px 8px 10px 8px !important;
}
.animated-icon1,
  .animated-icon2,
  .animated-icon3 {
    width: 30px;
    height: 20px;
    position: relative;
    margin: 0px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
  }

  .animated-icon1 span,
  .animated-icon2 span,
  .animated-icon3 span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }

  .animated-icon1 span {
    background: black;
  }

  .animated-icon2 span {
    background: #e3f2fd;
  }

  .animated-icon3 span {
    background: #f3e5f5;
  }

  .animated-icon1 span:nth-child(1) {
    top: 0px;
  }

  .animated-icon1 span:nth-child(2) {
    top: 10px;
  }

  .animated-icon1 span:nth-child(3) {
    top: 20px;
  }

  .animated-icon1.open span:nth-child(1) {
    top: 11px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  .animated-icon1.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
  }

  .animated-icon1.open span:nth-child(3) {
    top: 11px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }
</style>