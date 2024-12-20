<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import Card from "./restaurants/Card.vue";
import restaurant_data from "../restaurant_data.js";

const groupedRestaurants = {
  5: [],
  4: [],
  3: [],
  2: [],
  1: []
};

restaurant_data.data.forEach(restaurant => {
  if (groupedRestaurants[restaurant.rating]) {
    groupedRestaurants[restaurant.rating].push(restaurant);
  }
});

Object.keys(groupedRestaurants).forEach(rating => {
  groupedRestaurants[rating].sort((a, b) => a.restaurant_name.localeCompare(b.restaurant_name));
});

</script>

<template>
  <primary-template mode="dark">
    <template #section-summary>
      Explore <span>MINNchelin Guide</span>'s personal restaurant reviews.
      <br>Where are you eating next?
    </template>

    <template #content>
      <!-- 5-Star Restaurants -->
      <section class="rating-section">
        <header>
          <h1>5 Stars</h1>
          <h3>The Best Experience, Worth Every Penny</h3>
        </header>
        <div class="cards">
          <Card v-for="(restaurant, index) in groupedRestaurants[5]"
                :key="index"
                :restaurant-info="restaurant"
          />
        </div>
      </section>

      <!-- 4-Star Restaurants -->
      <section class="rating-section">
        <header>
          <h1>4 Stars</h1>
          <h3>It's Excellent, You Must Try</h3>
        </header>
        <div class="cards">
          <Card v-for="(restaurant, index) in groupedRestaurants[4]"
                :key="index"
                :restaurant-info="restaurant"
          />
        </div>
      </section>

      <!-- 3-Star Restaurants -->
      <section class="rating-section">
        <header>
          <h1>3 Stars</h1>
          <h3>It's Amazing, Highly Recommend</h3>
        </header>
        <div class="cards">
          <Card v-for="(restaurant, index) in groupedRestaurants[3]"
                :key="index"
                :restaurant-info="restaurant"
          />
        </div>
      </section>

      <!-- 2-Star Restaurants -->
      <section class="rating-section">
        <header>
          <h1>2 Stars</h1>
          <h3>It can be Plain, but Good</h3>
        </header>
        <div class="cards">
          <Card v-for="(restaurant, index) in groupedRestaurants[2]"
                :key="index"
                :restaurant-info="restaurant"
          />
        </div>
      </section>

      <!-- 1-Star Restaurants -->
      <section class="rating-section">
        <header>
          <h1>1 Star</h1>
          <h3>Questionable at Times, Decent at Times</h3>
        </header>
        <div class="cards">
          <Card v-for="(restaurant, index) in groupedRestaurants[1]"
                :key="index"
                :restaurant-info="restaurant"
          />
        </div>
      </section>
    </template>
  </primary-template>
</template>

<style scoped>
div.cards {
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 0 auto;
}

section.rating-section{
  margin-top: 8%;
}
</style>