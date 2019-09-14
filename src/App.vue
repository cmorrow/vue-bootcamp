<template>
  <div id="app">
    
    <div id="content">
      <div id="header">
        <router-link to="/"><img src="@/assets/camp-logo.png" alt=""></router-link><span class="title">Vue Bootcamp</span>
      </div>
      <router-view/>
    </div>
    
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/databinding">DataBinding</router-link> |
      <router-link to="/events">Events</router-link> |  
      <router-link to="/conditionals">Conditionals</router-link> |
      <router-link to="/components">Components</router-link> | 
      <router-link to="/reactivity">Reactivity</router-link>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgPath: '@/assets/camp-logo.png'
    }
  },
  methods: {
    getImage() {
      return require('@/assets/camp-logo.png');
    }
  }
};
</script>

<style lang="scss">
@import './assets/styles/app';



.missing {
  display: inline-block;
  width: 323px;
  height:30px;
  border: solid 1px $gray-light;
}
</style>
