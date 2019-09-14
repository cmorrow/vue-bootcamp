<template>

  <div class="input-counter">
    <div class="info">
      <span class="counter">Count: {{ inputValue.length }}</span>
      <span class="limit">Character Limit: {{ charLimit }}</span>
    </div>
    
    <textarea @keyup="updateCount()" :maxlength="charLimit" v-model="inputValue" rows="4" cols="50"></textarea>
  </div>
</template>

<script>
export default {
  name: 'inputCounterEmitter',
  data () {
    return {
      inputValue: ''
    }
  },
  props: {
    charLimit: {
      type: Number,
      required: false
    }
  },
  methods: {
    updateCount () {
      let len = this.inputValue.length;
      if (len === this.charLimit) {
        this.$emit('limit-reached', true);
      }else{
        this.$emit('limit-reached', false);
      }
      return this.inputValue.length;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/styles/theme';

.input-counter {
  display: inline-block;
  margin: 0 auto $gutter 0;
  text-align:left;
  border-collapse: collapse;

  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .counter {
    font-size: 24px;
  }

  textarea {
    font-size: 32px;
  }
}
</style>
