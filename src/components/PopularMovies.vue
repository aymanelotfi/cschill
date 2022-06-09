<template>
  <div
    v-for="(movie, id) in moviesData"
    :key="id"
    class="flex flex-shrink-0 justify-center items-center w-1/2 max-w-sm mx-auto my-8"
  >
    <!-- <div
      :style="{
        backgroundImage: `url(${baseImgUrl}/w500${movie.backdrop_path})`
      }"
      class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
      v-on:click="redirect(movie)"
    ></div> -->

    <div class= "zoom" v-on:click="redirect(movie)">
    <img  :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path">
  </div>
</div>
</template>

<script>
import { ref } from "vue";
import MovieService from "../../Services/MovieService.js";
export default {
  setup() {
    const baseImgUrl = ref("https://image.tmdb.org/t/p");
    const moviesData = ref([]);
    // eslint-disable-next-line no-unused-vars
    async function loadData() {
      try {
        const moviedata = await MovieService.getPopularMovies();
        moviesData.value = moviedata.data.results;
        console.log(moviesData.value);
      } catch (err) {
        console.log(err);
      }
    }
    loadData();
    return { baseImgUrl, moviesData };
  },
  methods:{
    redirect(res){
       this.$root.movi=res;
        this.$router.replace({ name: "Movie_Detail" });
        //console.log(res);
    }
  }
};
</script>
<style lang="scss">
.zoom {

  transition: transform .2s; /* Animation */
  width: 200px;
  margin: 0 auto;
  overflow:hidden;
  align-self: stretch;

}
.img{
  width:5%;
  height:10vh;
  align-self: stretch;
}
.zoom:hover {
  flex-grow:2;
  transition: all 1s;
}
</style>
