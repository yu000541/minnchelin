<script setup>
import PrimaryTemplate from "../../templates/PrimaryTemplate.vue";
import Card from "./Card.vue";
import restaurant_data from "../../restaurant_data.js";
import helpers from "../../helpers.js";
import { watch } from "vue";
import { useRoute } from "vue-router";

// Getting City Names
const route = useRoute();
const city = route.params.cityName;

// Filter the restaurants for the city
const restaurants = restaurant_data.data
    .filter(restaurants => helpers.replaceSpacesWithDashesAndLowercase(restaurants.location) === city);

// Sorting
const groupedRestaurants = {
  5: [],
  4: [],
  3: [],
  2: [],
  1: []
};

restaurants.forEach(restaurants => {
  if (groupedRestaurants[restaurants.rating]) {
    groupedRestaurants[restaurants.rating].push(restaurants);
  }
});

Object.keys(groupedRestaurants).forEach(rating => {
  groupedRestaurants[rating].sort((a, b) => a.restaurant_name.localeCompare(b.restaurant_name));
});

const cityName = restaurants.length > 0 ? restaurants[0].location : city;
</script>

<template>
  <primary-template mode="dark">
    <template #section-summary>
      <h1>{{ cityName }} Restaurants</h1>
      <p>Discover the top-rated restaurants in {{ cityName }}.</p>
    </template>

    <template #content>
      <!-- 5-Star Restaurants -->
      <section class="rating-section" v-if="groupedRestaurants[5].length > 0">
        <header>
          <h1>5 Stars</h1>
          <h3>The Best Experience, Worth Every Penny</h3>
        </header>
        <div class="cards">
          <Card
              v-for="(restaurant, index) in groupedRestaurants[5]"
              :key="index"
              :restaurant-info="restaurant"
          />
        </div>
      </section>

      <!-- 4-Star Restaurants -->
      <section class="rating-section" v-if="groupedRestaurants[4].length > 0">
        <header>
          <h1>4 Stars</h1>
          <h3>It's Excellent, You Must Try</h3>
        </header>
        <div class="cards">
          <Card
              v-for="(restaurant, index) in groupedRestaurants[4]"
              :key="index"
              :restaurant-info="restaurant"
          />
        </div>
      </section>

      <!-- 3-Star Restaurants -->
      <section class="rating-section" v-if="groupedRestaurants[3].length > 0">
        <header>
          <h1>3 Stars</h1>
          <h3>It's Amazing, Highly Recommend</h3>
        </header>
        <div class="cards">
          <Card
              v-for="(restaurant, index) in groupedRestaurants[3]"
              :key="index"
              :restaurant-info="restaurant"
          />
        </div>
      </section>

      <!-- 2-Star Restaurants -->
      <section class="rating-section" v-if="groupedRestaurants[2].length > 0">
        <header>
          <h1>2 Stars</h1>
          <h3>It can be Plain, but Good</h3>
        </header>
        <div class="cards">
          <Card
              v-for="(restaurant, index) in groupedRestaurants[2]"
              :key="index"
              :restaurant-info="restaurant"
          />
        </div>
      </section>

      <!-- 1-Star Restaurants -->
      <section class="rating-section" v-if="groupedRestaurants[1].length > 0">
        <header>
          <h1>1 Star</h1>
          <h3>Questionable at Times, Decent at Times</h3>
        </header>
        <div class="cards">
          <Card
              v-for="(restaurant, index) in groupedRestaurants[1]"
              :key="index"
              :restaurant-info="restaurant"
          />
        </div>
      </section>

    </template>
  </primary-template>
</template>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 0 auto;
  gap: 1rem;
  justify-content: center;
}

section.rating-section {
  margin-top: 8%;
}
</style>