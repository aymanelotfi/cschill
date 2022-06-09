<template>
  <div>
    <nav class="lg:block bg-gray-900 bg-opacity-70 z-10">
      <ul class="flex justify-between space-x-5 lg:space-x-8 items-center p-4">
        <div class="flex space-x-5 lg:space-x-8 items-center p-4">
          <li class="text_netflix text-3xl text-red-600">NetfliCS</li>

            <router-link
              to="/"
              class="font-bold text-sm lg:text-base text-white hover:text-app-green-1 transition ease-in-out duration-300">Home</router-link>
              <router-link v-if="$root.authenticated" to="/secure" class="font-bold text-sm lg:text-base text-white hover:text-app-green-1 transition ease-in-out duration-300">Secure</router-link>
              <router-link
                to="/about"
                class="font-bold text-sm text-left lg:text-base text-white hover:text-app-green-1 transition ease-in-out duration-300">Trending</router-link>
        </div>

              <!-- <div class="searchbar">
            <input
              v-model="searchText"
              type="text"
              @keyup.enter="search"
              class="search-input"
              placeholder="Rechercher..."
            />
          </div> -->
          <div class="flex space-x-5 lg:space-x-8 items-center p-4">
          <form>
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="inputcustom block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Movies" required>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
            <router-link
              to="/login"
              class="flex-1 font-bold text-sm text-right lg:text-base text-white hover:text-app-green-1 transition ease-in-out duration-300">Login</router-link>
              <router-link
                to="/add"
                class="font-bold text-sm text-left lg:text-base text-white hover:text-app-green-1 transition ease-in-out duration-300">Add</router-link>
</div>
      </ul>

    </nav>
  </div>
</template>
<script>
// export default{
//   data() {
//       return {
//         auth: this.$root.authenticated
//       }}
// }
// import { ref } from "vue";
// export default {
//   setup() {
//     const navLinks = ref({
//       Home: {
//         name: "Home",
//         href: "/"
//       },
//       Trending: {
//         name: "Trending",
//         href: "/about"
//       },
//       Login :{
//         name : "Login",
//         href:"/"
//       }
//     });
//     return { navLinks };
//   }
// };
// </script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Bebas Neue');
.inputcustom{
  padding-right:100px;
}
.text_netflix{
 font-family: 'Roboto';
 font-size: 5vmin;
 font-weight: 700;
}
</style>
