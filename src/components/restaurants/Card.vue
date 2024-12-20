<script setup>

import helpers from "../../helpers.js";
import definition from "../../definition.js";

const def = definition.def

defineProps({
  restaurantInfo: {
    type: Object,
    required: true
  }
})

</script>


<template>
  <section class="restaurant-card">
    <router-link
        :to="{ name: 'RestaurantDetails', params: { restName: helpers.replaceSpacesWithDashesAndLowercase(restaurantInfo.restaurant_name) }}">
      <div class="main-photo">
        <img :src="restaurantInfo.photo" :alt="restaurantInfo.restaurant_name" class="responsive-image"/>
      </div>
    </router-link>

    <section class="details">
      <div>
        <div class="main">
          <h2>{{ restaurantInfo.restaurant_name }}</h2>
          <div class="together">
            <svg width="20" height="20" viewBox="0 0 137 124" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M68.5 0L86.6185 43.562L133.647 47.3323L97.8163 78.0255L108.763 123.918L68.5 99.325L28.2367 123.918L39.1837 78.0255L3.35263 47.3323L50.3815 43.562L68.5 0Z"
                  fill="#373C87"/>
            </svg>
            <h2>{{ restaurantInfo.rating }}</h2>
          </div>
        </div>
        <h3>{{ restaurantInfo.location }}</h3>
      </div>
    </section>

    <div class="elements">
      <h4 v-if="restaurantInfo.service !== 0">{{ def.service[restaurantInfo.service] }} Service</h4>
      <h4 v-if="restaurantInfo.serviceSpeed !== 0">{{ def.serviceSpeed[restaurantInfo.service_speed] }} Speed</h4>
      <h4 v-if="restaurantInfo.wear !== 0">Wear {{ def.wear[restaurantInfo.wear] }}</h4>
      <h4 v-if="restaurantInfo.vibes !== 0">{{ def.vibes[restaurantInfo.vibes] }} Vibes</h4>
      <h4 v-if="restaurantInfo.price !== 0">{{ def.price[restaurantInfo.price] }}</h4>
    </div>

  </section>
</template>


<style scoped>
section.restaurant-card {
  /* Mobile first */
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  gap: 1rem;
  padding: 0.5rem;

  &:hover {
    border-color: black;
    cursor: pointer;
  }

  .main-photo {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      display: block;
    }
  }

  section.details {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0;

    .main {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .together {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: left;
      gap: 0;
    }
  }

  .elements{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.25rem;
  }

  /* Tablet and up */
  @media screen and (width > 750px) {
    width: 45%;

  }
  @media screen and (width > 1230px) {
    width: 30%;
  }
}

h1, h2, h3, h4 {
  text-align: left;
  margin: 0;
}

</style>
