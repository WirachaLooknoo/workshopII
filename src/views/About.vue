<template>
  <div class="about">
    <h1>My Data</h1>
    <b-table striped hover :items="allUsers"> </b-table>

    <button type="submit" class="btn btn-primary" @click="add"> + {{ counterR }}</button>
    <!-- <button type="submit" class="btn btn-primary" @click="addReactive"> - {{ counterReactive.ct }}</button> -->
  </div>
</template>

<script>

// import { ref } from '@vue/composition-api'
// import { ref, reactive } from 'vue'
import counters from './counters.js'

export default {
  name: "about",
  setup(){
    const {counterR, add} = counters.counterIncrement(10)

    return {counterR, add}
  //   const counter = ref(0);
  //   function add(){
  //     counter.value++;
  //   }
  //   const counterReactive = reactive({ ct:100 });
  //   function addReactive() {
  //     counterReactive.ct--;
  //   }
  // return { counter, add, counterReactive, addReactive }
  },
  // data(){
  //   // return {
  //   //   counter : 0
  //   // }
  // },
  // computed : {
  //   allUsers(){
  //     // console.log(this.$store.getters.getAllUsers)
  //     return this.$store.getters.getAllUser;
  //   }
  // },
  // methods : {
  //   // add(){
  //   //   this.counter++
  //   // }
  // },
};
</script>

<style>
  
</style>
