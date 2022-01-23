<template>
    <div class="home_container">
        <div class="container__Carousel">
            <Carousel></Carousel>
        </div>
        <hr>
        <h4>Compra y disfruta de tu libros favoritos</h4>
        <div class="search_bar__container">
            <SearchInput></SearchInput>
        </div>
            <hr>
        <h6>Libros recomendados (al azár)</h6>
        <div class="container__card">
            <CardRecomended></CardRecomended>
        </div>
    </div>
</template>

<script>

import Carousel from '../components/home-components/Carousel.vue';
import SearchInput from '../components/home-components/SearchInput.vue';
import CardRecomended from '../components/home-components/CardRecomended.vue';

export default {
    name: 'Home',
    components: {
        Carousel,
        SearchInput,
        CardRecomended
    }
}
</script>

<style>

.home_container{
    padding: 0 1px;
}

.search_bar__container{
    margin: 20px 0 0 40px;
}

.container__card{
    margin: 0 0 0 10px;
}


</style>