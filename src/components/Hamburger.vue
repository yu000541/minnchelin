<script setup>
import {useRoute, useRouter} from "vue-router"
</script>

<template>
  <section class="hamburger">
    <header><router-link :to="{ name: 'Cities', params: { cityName: 'chicago' } }">CHICAGO</router-link></header>
    <header><router-link :to="{ name: 'Cities', params: { cityName: 'minneapolis-st.paul' } }">MSP</router-link></header>
    <header><router-link :to="{ name: 'Cities', params: { cityName: 'new-york-city' } }">NYC</router-link></header>
    <header><router-link :to="{ name: 'Cities', params: { cityName: 'bay-area' } }">BAY AREA</router-link></header>
    <header><router-link :to="{ name: 'About' }">ABOUT</router-link></header>
  </section>
</template>

<style scoped>
section.hamburger {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  a{
    text-decoration: none;
    color: #373C87;
  }
}
</style>