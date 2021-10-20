<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Home</h1>
    <!-- <form> -->
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <br>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Values"
          v-model="id"
        />
      </div>
      <br>
      <button type="submit" class="btn btn-primary" @click="addUser">Submit</button>
    <!-- </form> -->
    <b-table stiped hover :items="users"></b-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      id : null
    }
  },
  methods: {
    addUser(){
      this.$store.dispatch('setCurrentUser', this.id)
    }
  },
  computed: {
    users(){
      return this.$store.getters.getUser;
    }
  }
}
</script>
