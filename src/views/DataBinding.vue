<template>
  <div>
    <h1>DataBinding</h1>
    <input type="text" v-model="userInput">
    <div class="result">
    <h2>Result:</h2>
      <div class="result-text">
        {{ userInput }}
      </div>
      
    </div>
    <router-link to="/" class="back">back</router-link>
    <router-link to="/events" class="next">next</router-link>
  </div>
</template>

<script>
  export default {
    name: 'databinding',
    data () {
      return {
        userInput: '',
      }
    }
  };
</script>


<style lang="scss">
  @import '../assets/styles/theme';

  
</style>