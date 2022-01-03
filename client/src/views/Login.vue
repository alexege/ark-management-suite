<template>
  <center>
    <br />
    <h1>Login</h1>
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="plaintextPassword">Password:</label>
      <input
        type="password"
        id="plaintextPassword"
        v-model="plaintextPassword"
        v-on:keyup.enter="onEnter"
      />
    </div>
    <button @click.prevent="login">Submit</button>

    <ul class="errorMessage">
      <li v-for="error in errors" :key="error._id">{{ error }}</li>
    </ul>

    <br /><br />
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
      plaintextPassword: null,
      allUsers: null,
      errors: [],
      token: null
    };
  },
  methods: {
    async login() {
      this.errors = [];

      if (!this.username) {
        this.errors.push("Username cannot be left blank");
      }
      if (!this.plaintextPassword) {
        this.errors.push("Password field cannot be left blank");
      }

      await fetch("http://localhost:9000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.username,
          password: this.plaintextPassword,
        }),
      })
        .then((res) => res.json())
        .then(() => {
          this.$router.push({ name: "dashboard" });
        });
    },

    getAllUsers() {
      fetch("http://localhost:9000/api/")
        .then((res) => res.json())
        .then((data) => {
          this.allUsers = data;
        });
    },

    onEnter() {
      this.login();
    },
  },
  mounted() {
    this.getAllUsers();
  },
};
</script>

<style scoped>
table {
  max-width: 960px;
}
ul {
  color: red;
  list-style: none;
}
</style>
