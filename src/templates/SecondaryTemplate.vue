<script setup>
</script>

<template>
  <section class="top">
    <nav>
      <router-link :to="{ name: 'Home' }">
        <header><span>MINNchelin</span> Guide</header>
      </router-link>
      <div class="hamburger">
        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_128_680)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 2H0V0H22V2Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 9H0V7H22V9Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 16H0V14H22V16Z" fill="currentColor"/>
          </g>
        </svg>
      </div>
      <div class="full-nav">
        <router-link :to="{ name: 'Cities', params: { cityName: 'chicago' } }">CHICAGO</router-link>
        <router-link :to="{ name: 'Cities', params: { cityName: 'minneapolis-st.paul' } }">MSP</router-link>
        <router-link :to="{ name: 'Cities', params: { cityName: 'new-york-city' } }">NYC</router-link>
        <router-link :to="{ name: 'Cities', params: { cityName: 'bay-area' } }">BAY AREA</router-link>
        <router-link :to="{ name: 'About' }">ABOUT</router-link>
      </div>
    </nav>
  </section>

  <section class="body">
    <div class = "slot"><header><slot name="section-summary"/></header></div>
    <slot name="content"/>
  </section>

  <section class="footer">
    <header><span>MINNchelin</span> Guide</header>
  </section>
</template>

<style>
section.top {
  display: flex;
  /*  gap: 1rem;*/
  flex-direction: column;
  background-color: #fff;
  color: #373C87;
  padding: 1rem 2rem;
  border-top: 5px solid #373C87;

  a {
    text-decoration: none;
  }

  nav {
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-basis: 5%;

    .full-nav {
      display: none;
    }

    span {
      font-family: PoppinsBlack, sans-serif;
    }

    a:visited {
      color: #373C87;
    }
  }

  /*Tablet and up*/
  @media screen and (width > 700px) {
    margin-bottom: 4rem;
    nav {
      .hamburger {
        display: none;
      }

      .full-nav {
        display: block;

        * {
          margin: 0 1rem;

          &:hover {
            text-decoration: underline;
          }
        }
      }

    }

  }
}

section.body {
  .slot{
  margin: 4rem 0 10rem 0;
  }

  @media screen and (width > 550px) {
    margin: 0 15%;
  }
}

section.footer {
  display: flex;
  justify-content: center;
  background-color: #373C87;
  color: #fff;
  padding: 1rem 2rem;
  margin-top: 8%;
  bottom: 0;
}

</style>