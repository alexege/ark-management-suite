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
var bcrypt = require("bcryptjs");
export default {
  data() {
    return {
      username: null,
      plaintextPassword: null,
      allUsers: null,
      errors: [],
    };
  },
  methods: {
    async login() {
      this.errors = [];
      //Get user object
      let currentUser = this.allUsers.find(
        (user) => user.username === this.username
      );
      console.log("MyCurrentUser:", currentUser);

      if (currentUser) {
        await bcrypt.compare(
          this.plaintextPassword,
          currentUser.password,
          (err, res) => {
            if (err) {
              console.log(err);
            }
            console.log("result is: ", res);
            if (res) {
              this.$router.push({ name: "home" });
            } else {
              this.errors.push("Invalid username or password");
            }
          }
        );
      } else {
        this.errors.push("No user found with that username!");
      }

      fetch("http://localhost:9000/api/")
        .then((res) => res.json())
        .then((data) => {
          this.user = data;
          // this.$router.push({ name: "home" });
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
    }
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
ul {
  color: red;
  list-style: none;
}
</style>
