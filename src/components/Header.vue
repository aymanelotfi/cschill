<template>
  <div>
    <nav class="lg:block bg-gray-900 bg-opacity-70 z-10">
      <ul class="flex space-x-5 lg:space-x-8 items-center p-4">
        <li class="font-bold text-3xl text-red-600">NetfliCS</li>
          <router-link
            to="/"
            class="font-bold text-sm lg:text-base text-white hover:text-app-green-1 transition ease-in-out duration-300">Home</router-link>
            <router-link
              to="/about"
              class="font-bold text-sm text-left lg:text-base text-white hover:text-app-green-1 transition ease-in-out duration-300">Trending</router-link>
            <router-link
              to="/login"
              class="font-bold text-sm text-right lg:text-base text-white hover:text-app-green-1 transition ease-in-out duration-300">Login</router-link>
      </ul>
    </nav>
  </div>
</template>
<script>
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

<style scoped></style>
