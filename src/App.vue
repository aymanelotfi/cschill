<template>
  <div class="">
    <Header />
  </div>
  <router-view />
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  data() {
        return {
            authenticated: false,
            movi:Object,
            over:"",
            mockAccount: {
                username: "test",
                password: "test"
            }
        }
    },
  components: {
    Header
  },
  methods: {
          setAuthenticated(status) {
              this.authenticated = status;
          },
          logout() {
              this.authenticated = false;
          }
      }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  height:100vh;
  display:flex;
  flex-direction: column;

}
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
