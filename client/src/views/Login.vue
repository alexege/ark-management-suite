<template>
  <center>
    <br />
    <h1>Login</h1>
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <button @click="login">Submit</button>

    <table class="table table-dark">
      <thead>
        <tr>
          <th>Index</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, idx) in allUsers" :key="user._id">
          <td>{{ idx + 1 }}</td>
          <td>{{ user.username }}</td>
        </tr>
      </tbody>
    </table>
  </center>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
      allUsers: null,
    };
  },
  methods: {
    login() {
      let allUsers = this.allUsers.filter(user => user.username === this.username);
      console.log("allUsers:", allUsers)

      fetch("http://localhost:9000/api/")
        .then((res) => res.json())
        .then((data) => {
          this.user = data;
        });
    },

    getAllUsers() {
      fetch("http://localhost:9000/api/")
        .then((res) => res.json())
        .then((data) => {
          this.allUsers = data;
        });
    },
  },
  mounted() {
    this.getAllUsers();
  }
};
</script>

<style scoped>
table {
  max-width: 960px;
}
</style>
