<script setup>
import {useRoute, useRouter} from "vue-router"
import restaurant_data from "../../restaurant_data.js";
import helpers from "../../helpers.js";
import SecondaryTemplate from "../../templates/SecondaryTemplate.vue";
import definition from "../../definition.js";

const restaurants = restaurant_data.data
const route = useRoute();
const restName = route.params.restName;
const restaurant = restaurants.filter(restaurant => helpers.replaceSpacesWithDashesAndLowercase(restaurant.restaurant_name) === restName)[0]
console.log(restaurant);

const def = definition.def

defineProps({
  restaurantInfo: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <secondary-template>
    <template #section-summary>
      <section class="main">
        <h5>{{ restaurant.address }}</h5>
        <h1>{{ restaurant.restaurant_name }}</h1>
        <h5>{{ restaurant.location }} Collection • {{ restaurant.rating }} Stars</h5>
        <div class="elements">
          <h4 v-if="restaurant.service !== 0">{{ def.service[restaurant.service] }} Service</h4>
          <h4 v-if="restaurant.serviceSpeed !== 0">{{ def.serviceSpeed[restaurant.service_speed] }} Speed</h4>
          <h4 v-if="restaurant.wear !== 0">Wear {{ def.wear[restaurant.wear] }}</h4>
          <h4 v-if="restaurant.vibes !== 0">{{ def.vibes[restaurant.vibes] }} Vibes</h4>
          <h4 v-if="restaurant.price !== 0">{{ def.price[restaurant.price] }}</h4>
        </div>
        <img :src="restaurant.photo" :alt="restaurant.restaurant_name" class="responsive-image"/>
        <p>{{restaurant.description}}</p>
      </section>
    </template>
  </secondary-template>
</template>

<style scoped>
.main{
  display: flex;
  flex-direction: column;
  gap: 0;
}

.elements {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem 1rem;
  margin-top: 1rem;
}

.elements h4 {
  margin: 0;
}
img{
  width: 100%;
  max-width: 750px;
  margin: 2.5rem auto;
}
</style>