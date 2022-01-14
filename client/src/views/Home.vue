<template>
  <div class="container">
    <header class="jumbotron">

      <h2>All Users</h2>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>idx</th>
            <th>id</th>
            <th>username</th>
            <th>email</th>
            <th>password</th>
            <th>roles</th>
            <th>createdAt</th>
            <th>updatedAt</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, idx) in content" :key="user._id">
            <td>{{ idx }}</td>
            <td>{{ user._id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.password.slice(0,5) }}</td>
            <td>{{ user.roles }}</td>
            <td>{{ user.createdAt | dateFilter }}</td>
            <td>{{ user.updatedAt | dateFilter }}</td>
          </tr>
        </tbody>
      </table>
    </header>
  </div>
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "Home",
  data() {
    return {
      content: "",
    };
  },
  computed: {
    myCurrentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  },
  filters: {
    dateFilter(date) {
      return new Date(date).toLocaleString();
    }
  }
};
</script>
