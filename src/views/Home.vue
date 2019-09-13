<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Vue Bootcamp</h1>
    <router-link to="/databinding" class="next">next</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/List.vue';

export default {
  name: 'home',
  components: {
    List,
  },
};
</script>
