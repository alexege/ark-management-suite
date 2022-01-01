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
    <button @click.prevent="login">Submit</button>
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
      password: null,
      allUsers: null,
    };
  },
  methods: {
    login() {
      // const hashedPassword = bcrypt.hash(this.password, 10);
      // console.log("LOg:", hashedPassword);

      const hashedPassword = bcrypt.hash(
        this.password,
        10,
        function (err, hash) {
          if (err) {
            console.log(err);
          }
          console.log("hash:", hash);

        }
      );

      const compareResult = bcrypt.compareSync(this.password, hashedPassword);
      console.log("compareRE:", compareResult);

      if (compareResult) {
        alert("The two match!");
      }

      let currentUser = this.allUsers.filter(
        (user) => user.username === this.username
      );
      console.log("allUsers:", currentUser);

      fetch("http://localhost:9000/api/")
        .then((res) => res.json())
        .then((data) => {
          this.user = data;
          this.$router.push({ name: "home" });
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
  },
};
</script>

<style scoped>
table {
  max-width: 960px;
}
</style>
