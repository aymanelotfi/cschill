<template>
  <div
    v-for="(movie, id) in topRatedData"
    :key="id"
    class="flex flex-shrink-0 justify-center items-center w-1/2 max-w-sm mx-auto my-8"
  >
    <!-- <div
      :style="{
        backgroundImage: `url(${baseImgUrl}/w500${movie.backdrop_path})`
      }"
      class="transition ease-in-out delay-150 bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
    > -->
    <div class= "zoom">
    <img src="https://i.pinimg.com/originals/db/60/74/db6074fb3ad542b639d7c10180560ab3.jpg">
    <!-- <span> {{movie.overview}}</span> -->
  </div>
  </div>
</template>

<script>
import { ref } from "vue";
import MovieService from "../../Services/MovieService.js";

export default {
  name: "TopRated",
  setup() {
    const baseImgUrl = ref("https://image.tmdb.org/t/p");
    const topRatedData = ref([]);
    // eslint-disable-next-line no-unused-vars
    async function loadData() {
      try {
        const moviedata = await MovieService.getTopMovies();
        topRatedData.value = moviedata.data.results;
        console.log(topRatedData.value);
      } catch (err) {
        console.log(err);
      }
    }
    loadData();
    return { baseImgUrl, topRatedData };
}
};
</script>
<style lang="scss">
.zoom {

  transition: transform .2s; /* Animation */
  width: 300px;
  margin: 0 auto;
  overflow:hidden;
  align-self: stretch;

}
.img{
  width:100%;
  height:100vh;
  align-self: stretch;
}
.zoom:hover {
  flex-grow:4;
  transition: all 0.5s;
}
</style>
