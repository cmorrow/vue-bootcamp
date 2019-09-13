<template>
  <div class="event-component">
    <h1>Conditionals</h1>
    <button class="tab-btn" @click="showTab('about')" :class="{ 'active': tab === 'about'}">About</button>
    <button class="tab-btn end" @click="showTab('services')" :class="{ 'active': tab === 'services'}">Services</button>

    <!-- tab content -->
    <div v-if="tab === 'about'" class="tab-content">
      <h2>About</h2>
      <p>About content goes here...</p>
    </div>

    <div v-if="tab === 'services'" class="tab-content">
      <h2>Services</h2>
      <p>Services content goes here...</p>
    </div>

    <router-link to="/databinding" class="back">back</router-link>
    <router-link to="/conditionals" class="next">next</router-link>
  </div>
</template>

<script>
  export default {
    name: 'conditionals',
    data () {
      return {
        tab: 'about'
      }
    },
    methods: {
      showTab(val) { // shorthand
        this.tab = val;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles/theme';

  // styles

  .tab-content {
    padding: $gutter;
    border: solid 1px $primary;
  }

  .tab-btn {
    background-color: $secondary;
    border-radius: $radius-1 0 0 $radius-1;

    &.end {
      border-radius: 0 $radius-1 $radius-1 0;
    }

    &.active {
      background-color: $secondary-active;
    }
  }

  
</style>

