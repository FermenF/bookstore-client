<template>
    <div class="search_bar">
        <b-col sm="5">
            <b-form-input v-model="text" placeholder="Buscas algo? Escribelo aqui..."></b-form-input>
        </b-col>
        <div class="buttonSearch">
            <b-button variant="outline-primary"><b-icon icon="search" font-scale="1"></b-icon> Buscar...</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name:'SearchInput',
}

</script>

<style>
.search_bar{
    margin: 20px 0 0 40px;
    display: flex;
}

.buttonSearch{
    margin-left: 5px;
}
</style>