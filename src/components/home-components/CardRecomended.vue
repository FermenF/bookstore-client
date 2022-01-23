<template>
    <b-container>
        <b-row>
            <b-col v-for="book in books" :key="book.id">
                <div>
                    <b-card :title="book.nombre.substr(1,40)" 
                        img-src="https://picsum.photos/600/200/?image=25" 
                        img-alt="Image" 
                        img-toptag="article" 
                        style="max-width: 21.2rem;" 
                        class="mb-1">

                    <b-card-text>
                        <strong>Autor:</strong> {{ book.autor }} <br>
                        <strong>Precio:</strong> $ {{ book.precio }}
                    </b-card-text>
                    <div>
                        <b-button href="#" variant="primary">Agregar al carrito</b-button>
                            <a href="#" class="infoBookCard">Ver más informacion</a>
                    </div>
                </b-card>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import { basePath, apiVersion } from '../../api/config';

import axios from "axios";

export default {
    name:'CardRecomended',
    
    data(){
        return{
            books: null,
        }
        
    },

    mounted(){
        this.obtenerLibroRecomendado();
    },

    methods: {
        obtenerLibroRecomendado(){
            axios.post(`${basePath}/${apiVersion}/book/recomended`)
                .then( res =>{
                    this.books = res.data;
                }).catch( e =>{
                    console.log(e);
                });
        }
    }
}
</script>

<style>
.infoBookCard{
    margin-left: 10px;
}
</style>