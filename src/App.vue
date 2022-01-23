<template>
  <div id="app">
    <div class="container__home">
      <div class="sideBar">
        <SideBar></SideBar>
      </div>
      <div class="margin-spacin"></div>
      <div class="content">
          <router-view/>
      </div>
    </div>
  </div>
</template>

<script>

import SideBar from './components/SideBar.vue';

export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>
<style>

      
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container__home{
  display: flex;
  padding: 1px;
  width: 100%;
  height: 100vh;
}
.sideBar{
  height: 100%;
  width: 5%;
  border-radius: 10px 0 0 10px;
  padding: 0px;
}

.margin-spacin{
  height: 100%;
  margin: 0 2px;
}

.content{
  height: 100%;
  width: 100%;
  border-radius: 0 10px 10px 0;
  overflow: auto;
}
      
</style>