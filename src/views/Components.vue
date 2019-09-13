<template>
  <div>
    <h1>Components</h1>
    <my-component></my-component>
    <router-link to="/events" class="back">back</router-link>
    <router-link to="/databinding" class="next">next</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import myComponent from '@/components/List.vue';

export default {
  name: 'componentView',
  components: {
    myComponent,
  },
};
</script>
