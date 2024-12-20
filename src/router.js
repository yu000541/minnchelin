import Home from "./components/Home.vue";
import About from "./components/About.vue";
import {createRouter, createWebHistory} from 'vue-router';
import Ratings from "./components/Ratings.vue"; // This will be the parent component
import RestaurantDetails from "./components/restaurants/RestaurantDetails.vue";
import Tmp from "./components/Tmp.vue";
import Cities from "./components/restaurants/Cities.vue";
import Hamburger from "./components/Hamburger.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/.'
        },
        {
            path: '/.',
            name: 'Hamburger',
            component: Hamburger
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/tmp',
            name: 'Tmp',
            component: Tmp
        },
        {
            path: '/ratings',
            name: 'Ratings',
            children: [
                {
                    component: Ratings,
                    name: 'RatingsMain',
                    path: ''
                },
                {
                    path: ':restName',
                    name: 'RestaurantDetails',
                    component: RestaurantDetails,
                    meta: {
                        title: 'Restaurant Details',
                    }
                }
            ]
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/:cityName',
            name: 'Cities',
            component: Cities,
            meta: {
                title: 'City Restaurants'
            }
        },
    ]
});

export default router;