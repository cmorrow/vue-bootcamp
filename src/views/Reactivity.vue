<template>
  <div>
    <h1>Reactivity</h1>
    <div class="container">
      <p><label for="">Name:</label> {{user.name}}</p>
      <p><label for="">Age:</label> {{user.age}}</p>

      <p v-if="user.email">{{ user.email }}</p>

    </div>
    <button @click="addPropertyWrong()" class="wrong">Add Prop: Wrong</button>
    <button @click="addPropertyCorrect()">Add Prop: Correct</button>
    <hr>
    <h2>Array Update:</h2>
    <button @click="updateArrayWrong()" class="wrong">Update Array: Wrong</button>
    <button @click="updateArrayCorrect()">Update Array: Correct</button>
    <button @click="addChild()">Add item to Array: Correct</button>

    <h3>Array of children:</h3>
    <div class="children" v-for="child in user.children" :key="child.name">
      {{ child.name }} | {{ child.age }}
    </div>

    <router-link to="/components" class="back">back</router-link>
    <router-link to="/emitters" class="next">next</router-link>
  </div>
</template>

<script>
import inputCounter from '@/components/InputCounter.vue';

export default {
  name: 'componentView',
  data () {
    return {
      user: {
        name: 'John',
        age: 35,
        children: [
          {
            name: 'Thomas',
            age: 8
          },
          {
            name: 'Cindy',
            age: 4
          },
        ]
      }
    }
  },
  methods: {
    addPropertyWrong () {
      // refesh page after clicking wrong add prop; it breaks reactivity of email property
      console.log('add property: wrong');
      this.user.email = 'john@acme.com'
    },
    addPropertyCorrect () {
      console.log('add property: correct');
      this.$set(this.user, 'email', 'john@acme.com');
    },
    updateArrayWrong () {
      console.log('update array: wrong');
      this.user.children[0] = {
        name: 'Billy',
        age: 6
      }
    },
    updateArrayCorrect () {
      console.log('update array: correct');
      this.user.children.splice(0, 1, {
        name: 'Billy',
        age: 6
      })
    },
    addChild () {
      this.user.children.push({
        name: 'Suprise Kid',
        age: 1
      })
    }

  }
};
</script>

<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    width: 70%;
    max-width: 600px;
    font-size: 36px;
    border: solid 1px #ccc;
  }

  button {
    &.wrong {
      margin-right: 5px;
      background-color: red;
    }
  }

  .children {
    font-size: 36px;
    border-bottom: solid 1px #ccc;
    margin-bottom: 5px;
  }
</style>