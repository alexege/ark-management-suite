<template>
  <center>
    <br />
    <h1>Registration</h1>
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <button @click="register">Submit</button>

    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>Password</th>
          <th>createdAt</th>
          <th>updatedAt</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in allUsers" :key="user._id">
          <td>{{ user._id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.password }}</td>
          <td>{{ user.createdAt | dateConversion }}</td>
          <td>{{ user.updatedAt }}</td>
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
      hashedPassword: null,
      allUsers: null,
    };
  },
  methods: {
    register() {
      fetch("http://localhost:9000/api/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data:", data);
          this.getAllUsers();
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

  filters: {
    dateConversion(date) {
      return new Date(date).toLocaleString();
    },
  },
};
</script>

<style scoped>
.table {
  max-width: 960px;
}
</style>
