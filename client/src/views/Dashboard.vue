<template>
  <div>
    <h1>Dashboard Page</h1>
    <p>Current logged in user is: {{ user.username }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "username",
      },
    };
  },
  methods: {
    validateToken() {
      console.log("Validating!");
      fetch("http://localhost:9000/validate")
        .then((res) => res.json())
        .then((data) => {
          console.log("Data:", data);
        });
    },
    mounted() {
    console.log("Test me");
      this.validateToken();
    },
  },
};
</script>
