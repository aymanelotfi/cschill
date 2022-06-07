

<template>
  <div class="secure">
    <h1>This is a secure page</h1>
  </div>
</template>


<script>
    export default {
        name: 'Secure',
        data() {
          return {}
        },
        mounted() {
            if(!this.$root.authenticated) {
                this.$router.replace({ name: "Login" });
            }
        },
        methods: {
        }
    }
</script>
