<template>
  <center>
    <br />
    <h1>This is the Admin component</h1>

    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th>index</th>
          <th>Id</th>
          <th>Username</th>
          <th>Password</th>
          <th>createdAt</th>
          <th>updatedAt</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, idx) in allUsers" :key="user._id">
          <td>{{ idx + 1 }}</td>
          <td>{{ user._id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.password }}</td>
          <td>{{ user.createdAt }}</td>
          <td>{{ user.updatedAt }}</td>
          <td>
            <a @click="deleteUser(user._id)"
              ><i class="fa-solid fa-trash"></i
            ></a>
          </td>
        </tr>
      </tbody>
    </table>
  </center>
</template>

<script>
export default {
  data() {
    return {
      allUsers: null,
    };
  },
  methods: {
    getAllUsers() {
      fetch("http://localhost:9000/api/")
        .then((res) => res.json())
        .then((data) => {
          this.allUsers = data;
        });
    },

    deleteUser(id) {
      fetch(`http://localhost:9000/api/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data:", data);
          this.getAllUsers();
        });
    },
  },
  mounted() {
    this.getAllUsers();
  },
};
</script>

<style scoped>
.table {
  max-width: 960px;
}
</style>
