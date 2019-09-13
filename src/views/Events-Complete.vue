<template>
  <div class="event-component">
    <h1>Events</h1>
    <input type="text" class="btn-append" v-model="userInput">
    <button class="input-end" @click="clearInput()">Clear</button>
    <div class="result">
    <h2>Result: scoped css</h2>
      <div class="result-text">
        {{ userInput }}
      </div>
      
    </div>
    

    <button @click="changeColor()" :class="{ 'colored': isColored }">Click to Change background color</button>

    <router-link to="/databinding" class="back">back</router-link>
    <router-link to="/conditionals" class="next">next</router-link>
  </div>
</template>

<script>
  export default {
    name: 'events',
    data () {
      return {
        userInput: '',
        isColored: false
      }
    },
    methods: {
      clearInput() { // shorthand
        this.userInput = '';
      },
      changeColor: function () {
        this.isColored = !this.isColored;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles/theme';

  // styles

  .result {
    min-height: 300px;
    .result-text {
      background-color: $primary;
      color: #fff;
    }
  }

  .colored {
    background-color: $secondary;
  }

  
</style>

