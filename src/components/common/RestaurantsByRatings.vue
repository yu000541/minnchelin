<script setup>
import { ref, onMounted } from "vue";
import Card from "../restaurants/Card.vue";
import restaurantData from "../../restaurant_data.js";

// Reactive variables
let restaurants = ref([]);
let isFiltered = ref(false);

// Props to control the component
const props = defineProps({
  limit: {
    type: Number,
    required: false,
    default: 3
  },
  showTitle: {
    type: Boolean,
    required: false,
    default: true
  }
});

// Filter, randomize, and limit the restaurants
onMounted(() => {
  // Step 1: Filter restaurants with a rating of 4 or 5
  restaurants.value = restaurantData.data.filter(restaurant => restaurant.rating >= 4);

  // Step 2: Randomize the list
  restaurants.value.sort(() => Math.random() - 0.5);

  // Step 3: Limit the number of restaurants to 'props.limit'
  restaurants.value = restaurants.value.slice(0, props.limit);

  // Mark the data as filtered so the template can display it
  isFiltered.value = true;
});
</script>

<template>
  <section class="restaurants-by-ratings-block" v-if="isFiltered">
    <h3 v-if="showTitle">Highly Rated Restaurants</h3>

    <div class="restaurant-list">
      <card v-for="(restaurant, index) in restaurants"
            :key="index"
            :restaurant-info="restaurant"/>
    </div>
  </section>
</template>

<style scoped>
section.restaurants-by-ratings-block {
  margin-top: 2rem;
}

.restaurant-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
