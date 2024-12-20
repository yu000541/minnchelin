<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
import Card from "./restaurants/Card.vue";
import restaurant_data from "../restaurant_data.js";
import DynamicStack from "./common/DynamicStack.vue";

const itemStack = [
  {
    left: 'Left side copy',
    right: 'Right side copy',
  },
  {
    left: 'Left side copy',
    right: 'Right side copy',
  },
  {
    left: 'Left side copy',
    right: 'Right side copy',
  },
  {
    left: 'Left side copy',
    right: 'Right side copy',
  },
  {
    left: 'Left side copy',
    right: 'Right side copy',
  },
  {
    left: 'Left side copy',
    right: 'Right side copy',
  }
]
</script>

<template>
  <primary-template mode="dark">
    <template #section-summary>
      Welcome to <span>MINNchelin Guide</span>! Explore personal restaurant reviews spanning Minneapolis-St. Paul, San
      Francisco, Chicago, and New York City. Discover new culinary gems and plan your next meal.
      <div>
        <router-link to="/about" class="learn-more">Learn More</router-link>
      </div>
    </template>

    <template #content>
      <section class="cards">
        <!--      <Card :restaurants="studentData.data"/>-->
        <Card v-for="(restaurant, index) in restaurant_data.data" :key="index" :restaurant-info="restaurant"/>
      </section>

      <dynamic-stack :items="itemStack"/>

    </template>
  </primary-template>
</template>

<style scoped>
section.cards {
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 0 auto;
}

.learn-more {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 100px;
  text-decoration: none; /* Remove underline */
}

.learn-more:hover {
  background-color: #0069d9;
  cursor: pointer;
}
</style>