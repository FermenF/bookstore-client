import Vue from "vue";
import VueRouter from "vue-router";
import Router from 'vue-router';

import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Books from '../views/bookstore/Books';

Vue.use(Router);
Vue.use(VueRouter);

export default new Router({

    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/books',
            name: 'books',
            component: Books
        }
    ]
});