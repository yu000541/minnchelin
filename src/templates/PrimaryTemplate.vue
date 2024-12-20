<script setup>

defineProps({
  mode: {
    type: String,
    default: 'light'
  },
})
</script>

<template>
  <section class="top-section" :class="{ 'dark-mode': mode === 'dark' }">

    <nav>
      <router-link :to="{ name: 'Home' }">
        <header><span>MINNchelin</span> Guide</header>
      </router-link>
      <div class="hamburger">
        <router-link :to="{ name: 'Hamburger' }"><svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_128_680)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 2H0V0H22V2Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 9H0V7H22V9Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 16H0V14H22V16Z" fill="currentColor"/>
          </g>
        </svg></router-link>
      </div>
      <div class="full-nav">
        <router-link :to="{ name: 'Cities', params: { cityName: 'chicago' } }">CHICAGO</router-link>
        <router-link :to="{ name: 'Cities', params: { cityName: 'minneapolis-st.paul' } }">MSP</router-link>
        <router-link :to="{ name: 'Cities', params: { cityName: 'new-york-city' } }">NYC</router-link>
        <router-link :to="{ name: 'Cities', params: { cityName: 'bay-area' } }">BAY AREA</router-link>
        <router-link :to="{ name: 'About' }">ABOUT</router-link>
      </div>
    </nav>

    <div class="top-container">
      <svg width="86" height="80" viewBox="0 0 300 276" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_143_666)">
          <path d="M300 223.357V62.1012C300 27.842 272.203 0 238 0C203.797 0 176 27.842 176 62.1012V266L300 223.461V223.357Z" fill="currentColor"/>
          <path d="M124 233.586V62.069C124 27.8276 96.2033 0 62 0C27.7967 0 0 27.8276 0 62.069V267C0 270 0.31 273 0.723333 276L124 233.69V233.586Z" fill="currentColor"/>
        </g>
      </svg>

      <header>
        <slot name="section-summary"/>
      </header>
    </div>
  </section>

  <section class="body">
    <slot name="content"/>
  </section>

  <section class="footer">
    <header><span>MINNchelin</span> Guide</header>
  </section>
</template>

<style>
section.top-section {
  /* Base styles for light mode */
  display: flex;
  gap: 1rem;
  flex-direction: column;
  background-color: #fff;
  color: #373C87;
  padding: 1rem 2rem;
  height: 100vh;
  border-top: 5px solid #373C87;
  margin-bottom: 4rem;

  .top-container {
    text-align: center;
    align-content: center;
    margin-bottom: 5rem;

    svg {
      color: #373C87;
    }
  }

  > * {
    height: 100%;
  }

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

    a:visited{
      color: #373C87;
    }
  }

  /*Tablet and up*/
  @media screen and (width > 700px) {
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

    .top-container {
      header {
        margin: 0 15%;
      }
    }
  }

  &.dark-mode {
    /* Styles for dark mode */
    background-color: #373C87;
    color: #fff;
    border-top: 5px solid white;
    padding: 1rem 2rem;

    nav{
      a:visited{
        color: #fff;
      }
    }

    .top-container {
      svg {
        color: #fff;
        margin-bottom: 1.5rem;
      }
    }

    a {
      color: white;
    }
  }
}

.body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  color: #373C87;
  margin: 5%;
  *{
    gap: 1rem;
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
}
</style>