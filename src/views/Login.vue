<template>
    <div id="login">
        <!-- <div class="form-inputs">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" v-model="input.username" placeholder="Username" />
        </div>
        <div class="form-inputs">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" v-model="input.password" placeholder="Password" />
        </div>
        <button type="button" v-on:click="login()">Login</button> -->
  <div class="grid place-items-center h-screen ">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-8">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" v-model="input.username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"   id="password"  v-model="input.password" type="password" placeholder="******************">

      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>

      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" v-on:click="login()">
        Sign In
      </button>
  </form>
</div>
    </div>
</template>

<script>

    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                },
                mockAccount: {
                    username: "test",
                    password: "test"
                }
            }
        },
        methods: {
            login() {
               //console.log(this.input.username)

                if(this.input.username != "" && this.input.password != "") {
                    // This should actually be an api call not a check against this.$parent.mockAccount
                    if(this.input.username == this.mockAccount.username && this.input.password == this.mockAccount.password) {
                     this.$root.authenticated = true;
                      //nextTick(() => console.log(this.$root.authenticated));
                      console.log(this.$root.authenticated);
                      //console.log(authenticated);

                        this.$router.replace({ name: "Secure" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style>

#login .form-inputs {
    padding-bottom: 20px;
}

#login .form-inputs label {
    padding-right: 20px;
}
body{
  background-image:url("/back_ground.jpeg");
}

</style>
