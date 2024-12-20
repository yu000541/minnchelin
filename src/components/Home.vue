<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import restaurant_data from "../restaurant_data.js";
import DynamicStack from "./common/DynamicStack.vue";
import RestaurantsByRatings from "./common/RestaurantsByRatings.vue";

// Parts of the following automation code was found online
// Restaurants by location, count of restaurants per location
const locationCounts = restaurant_data.data.reduce((acc, restaurant) => {
  const location = restaurant.location;
  acc[location] = (acc[location] || 0) + 1;
  return acc;
}, {});

// Sort alphabetically by location
const itemStack = Object.entries(locationCounts)
    .sort(([locationA], [locationB]) => locationA.localeCompare(locationB)) // Sort by location alphabetically
    .map(([location, count]) => ({
      left: location,
      right: `${count} restaurants`
    }));

// Location count
const totalLoc = Object.keys(locationCounts).length;
</script>

<template>
  <primary-template mode="dark">
    <template #section-summary>
      Welcome to <span>MINNchelin Guide</span>! Explore personal restaurant reviews spanning Minneapolis-St. Paul, San Francisco, Chicago, and New York City. Discover new culinary gems and plan your next meal.
      <div class="button">
        <h3><router-link to="/ratings" class="all-ratings">View All</router-link></h3>
      </div>
    </template>

    <template #content>
      <section class="first">
        <div><h1>Locations</h1><h3>Minnchelin Guide Reviews in {{totalLoc}} Cities</h3></div>
        <div><dynamic-stack :items="itemStack"/></div>
      </section>

      <section class="second">
        <div><h1>Featured Restaurants</h1><h3>Minnchelin's Special Picks</h3></div>
        <div class="cards"><restaurants-by-ratings :limit="3" :show-title="false" /></div>
      </section>


    </template>
  </primary-template>
</template>

<style scoped>
.button {
  margin-top: 2rem;
}

section.first{
  margin-top: 7%;
}
section.second{
  margin-top: 10%;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  max-width: 1275px;
  margin: 0 auto;
}

.all-ratings {
  color: #fff;
  padding: 8px 16px;
  border: 1px solid white;
  text-decoration: none;
  //border-radius: 5px;
}

.all-ratings:hover {
  background-color: #fff;
  color: #373C87;
  cursor: pointer;
}
</style>