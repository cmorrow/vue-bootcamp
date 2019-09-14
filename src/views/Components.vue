<template>
  <div>
    <h1>Components</h1>
    <input-counter :charLimit="10"></input-counter>
    <input-counter :charLimit="5"></input-counter>
    <input-counter :charLimit="35"></input-counter>
    
    <router-link to="/events" class="back">back</router-link>
    <router-link to="/reactivity" class="next">next</router-link>
  </div>
</template>

<script>
import inputCounter from '@/components/InputCounter.vue';

export default {
  name: 'componentView',
  components: {
    inputCounter
  },
};
</script>
