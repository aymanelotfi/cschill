<template>
  <div
    v-for="movie in moviesData"
    :key="movie.id"
    class="flex flex-shrink-0 justify-center items-center w-1/2 max-w-sm mx-auto my-8"
  >
    <!-- <div
      :style="{
        backgroundImage: `url(${baseImgUrl}/w500${movie.backdrop_path})`
      }"
      class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
      v-on:click="redirect(movie)"
    ></div> -->

    <div v-on:click="redirect(movie)">
      <div class="product-image">
        <div class="images">
    <img  :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
                alt="Movie Poster" >
       </div>
       <div class="detail">
        <div class="title"> {{movie.title}}</div>
         <p>{{movie.overview.substr(0,Math.min(movie.overview.length,150))+"..."}}</p>
       </div>
  </div>
</div>
</div>
</template>
<script>
// import { ref } from "vue";
// import MovieService from "../../Services/MovieService.js";
import axios from "axios";
export default {
  name: "PopularMovies",
  data: function () {
    return {
      moviesData: [],
    };
  },
  created() {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => {
        // Do something if call succeeded
        console.log(response);
        this.moviesData = response.data.slice(0,100);
        console.log("ok");
      })
      .catch((error) => {
        // Do something if call failed
        console.log(error);
      });
  },
  methods: {
    redirect(res){
       this.$root.movi=res;
      // this.$root.over=res.overview.substring(0,Math.min(res.overview.length()-1),60);
        this.$router.replace({ name: "Movie_Detail" });
        //console.log(res);
    },
    update: function (mov) {
      this.$root.movi = mov;
    },
    searchMovies: function (search) {
      axios
        .get(`http://localhost:3000/movies`, { params: search })
        .then((response) => {
          this.moviesData = response;
        })
        .catch((error) => {
          this.moviesLoadingError =
            "An error occured while searching for movies.";
          console.log(error);
        });
    },
  },

};
</script>


<style lang="scss">
img{
  height: 400px !important;
  object-fit: cover;
}
.zoom {

  transition: transform .2s; /* Animation */
  width: 200px;
  margin: 0 auto;
  overflow:hidden;
  align-self: stretch;

}
.zoom:hover {
  flex-grow:2;
  transition: all 1s;
}
.product-image:hover .product-image {
  transform: scale(1.2);
  transition: 300ms;
}

.movies-list {
  display: flex;
  flex-wrap: wrap;
  gap: 150px 50px;
  align-content: center;
  justify-content: center;
}

.product-image {
  height: 500px;
  width: 400px;
  margin: auto;
}

.detail {
  width: 280px;
  bottom: 300px;
  align-content: center;
  justify-content: center;
  color:white;
  transition:all 0.5s ease-in-out;
}

.product-image {
  width: 320px;
  margin: auto;
  height: 400px;
  transition: all 0.5s ease-in-out;
}

.product-image:hover {
  transform: scale(1.2);
}

.product-image:hover .images {
  transition: 0.5s;
  opacity: 0.4;
}

.detail {
  width: 250px;
  position: relative;
  right: 0%;
  opacity: 0;
}

.product-image:hover .detail {
  opacity: 1;
  color: rgb(255, 255, 255);
  transition: 0.5s;
}
.title{
// font-family: "Times New Roman", Times, serif;
font-weight:700;
font-size:20px;
}

</style>
