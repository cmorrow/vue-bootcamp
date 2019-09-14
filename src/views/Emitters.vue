<template>
  <div>
    <h1>Components</h1>
    <div class="info">
      <p v-if="isLimitReached" class="error">Limit has been reached on an input.</p>
      <p v-else>Limit not reached, type away!!!</p>
    </div>

    <!-- child component -->
    <input-counter :charLimit="10" @limit-reached="limitReached"></input-counter>

    <router-link to="/reactivity" class="back">back</router-link>
    <router-link to="/" class="next">home</router-link>
  </div>
</template>

<script>
import inputCounter from '@/components/InputCounter-Emitter.vue';

export default {
  name: 'componentView',
  data () {
    return {
      isLimitReached: false
    }
  },
  components: {
    inputCounter
  },
  methods: {
    limitReached (val) {
      console.log(val);
      this.isLimitReached = val;
    }
  }
};
</script>

<style lang="scss" scoped>
.info {
  font-size: 24px;
}
.error {
  color: red;
}
</style>