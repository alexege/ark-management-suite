<template>
  <div>
    <h1>Dashboard Page</h1>
    <p v-if="user">Current logged in user is: {{ user.username }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  methods: {
    getUser(username) {
      fetch(`http://localhost:9000/api/${username}`)
        .then((res) => res.json())
        .then((data) => {
          this.user = data[0];
        });
    },

    validateToken() {
      fetch("http://localhost:9000/api/validate").then((data) => {
        console.log("Data:", data);
        if (data.status === 200) {
          console.log("User is verified");
        } else {
          console.log("User is not verified");
        }
      });
    },
  },
  mounted() {
    // this.validateToken();
    // this.getUser();
  },
};
</script>
