<template>
    <div class="conatiner__siderBar">
        <div class="siderBar__items">
            <div class="spacing-bar"></div>
            <router-link to="/profile">
                <div class="icon-list" v-b-tooltip.hover.rightbottom title="Tú perfil" >
                    <div class="icon-align">
                        <b-icon icon="person-fill" font-scale="1.25"></b-icon>
                    </div>
                </div>
            </router-link>
            <router-link to="/">
                <div class="icon-list" v-b-tooltip.hover.rightbottom title="Inicio">
                    <div class="icon-align">
                        <b-icon icon="house-door-fill" font-scale="1.25"></b-icon>
                    </div>
                </div>
            </router-link>
            <router-link to="/books">
                <div class="icon-list" v-b-tooltip.hover.rightbottom title="Tienda de ibros">
                    <div class="icon-align">
                        <b-icon icon="book-fill" font-scale="1.25"></b-icon>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'SideBar',
    components: {
    }
  }
</script>

<style>

.spacing-bar{
    height: 30px;
}
.conatiner__siderBar{
    height: 100%;
    width: 100%;
    background: #01032c;
    border-radius: 5px;
}

.siderBar__items{
    text-align: center;
    margin: 0 10px;
}

.icon-list{
    text-align: center;
    align-items: center;
    background: #041f7af5;
    border-radius: 10%;
    cursor: pointer;
    display: flex;
    color: #fff;
    height: 40px;
    margin: 0 0 10px 0;
}

.icon-list:hover{
    background: darkcyan;
}

.icon-align{
    margin: auto;
}

</style>