<!-- <template>
  <div class="movieshow">
    <p class="movieshow-title">{{$root.movi.title}}</p>
    <div class="movieshow-container">
      <div class="movieshow-img">
       <img
          class="movieshow-inner-image"
          :alt="
            moviePosterPath ? moviePosterPath : require(`@/assets/noImage.png`)
          "
          :src="
            moviePosterPath ? moviePosterPath : require(`@/assets/noImage.png`)
          "
        />
        <img
      :src="'https://image.tmdb.org/t/p/original/' + $root.movi.backdrop_path"
      class="object-cover h-100 w-140"
      alt="Movie Poster"
    />
      </div>
      <div class="movieshow-block-description">
        <div class="movieshow-description-header">
          <p>Description</p>
        </div>
        <div class="movieshow-description">
           <p>
            {{ this.movieDescription }}
          </p>
          <p> {{$root.movi.title}}</p>
          <div class="movieshow-description-header">
            <p>Note</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> -->
<template>
<!-- <div class="flex h-screen justify-center"> -->
  <div class="flex justify-center items-center flex-wrap flex--movie flex-grow" style="flex-direction: column;">

    <div class="w-full overflow-auto  md:w-full lg:w-1/2 max-w-4xl rounded overflow-hidden shadow-lg m-4 flex justify-between">
      <div class="md:flex-shrink-0">
        <!-- <img class="md:w-56"
             src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/nAU74GmpUk7t5iklEp3bufwDq4n.jpg"
             alt="$root.movi.title" /> -->
             <img class="md:w-56 h-80"
      :src="'https://image.tmdb.org/t/p/original/' + $root.movi.backdrop_path"
      alt="Movie Poster"
    />
      </div>

      <div class="flex flex-col flex-grow px-8 py-4 bg-color-333">
        <h3 class="font-bold text-4xl md:text-2xl lg:text-2xl text-black-200 movie--title">{{$root.movi.title}}</h3>
        <span class="movie--year text-xl lg:text-sm lg:mb-4">{{$root.movi.release_date.substring(0,4)}}</span>
        <div class="flex-grow">
          <p class="text-xl text-left md:text-base lg:text-base text-black-100 leading-snug truncate-overflow">{{$root.movi.overview}}</p>
        </div>
        <div class="button-container flex justify-between mb-2">
          <button class="text-lg mr-4 lg:text-sm text-black-200"></button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Add to List</button>
        </div>
        <Stars  :movieId="$root.movi.id" />
      </div>
    </div>
  </div>
  <!--   <div class="w-full lg:w-1/5 rounded overflow-hidden shadow-lg m-4">
      <img
           class="w-full"
           src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/lNkDYKmrVem1J0aAfCnQlJOCKnT.jpg"
           alt="A Quiet Place movie poster" />

      <div class="px-4 py-2 bg-black-800">
        <h3 class="font-bold text-xl mb-2 text-black-200">Halloween <span>(2018)</span></h3>
        <div class="button-container flex justify-between mb-2">
          <button class="text-sm text-black-200">More Info</button>
          <button class="text-sm font-bold py-2 px-4 rounded bg-orange-400">Add to List</button>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-1/5 rounded overflow-hidden shadow-lg m-4">
      <img
           class="w-full"
           src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/zQDqgzSdTGSDu4rDcQTq7TAttmy.jpg"
           alt="A Quiet Place movie poster" />

      <div class="px-4 py-2 bg-black-800">
        <h3 class="font-bold text-xl mb-2 text-black-200">Climax <span>(2018)</span></h3>
        <div class="button-container flex justify-between mb-2">
          <button class="text-sm text-black-200">More Info</button>
          <button class="text-sm font-bold py-2 px-4 rounded bg-orange-400">Add to List</button>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-1/5 rounded overflow-hidden shadow-lg m-4">
      <img
           class="w-full"
           src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/zHMw9xGrNlrDsuK6Lnx5NlL72Eu.jpg"
           alt="A Quiet Place movie poster" />

      <div class="px-4 py-2 bg-black-800">
        <h3 class="font-bold text-xl mb-2 text-black-200">Saw III <span>(2007)</span></h3>
        <div class="button-container flex justify-between mb-2">
          <button class="text-sm text-black-200">More Info</button>
          <button class="text-sm font-bold py-2 px-4 rounded bg-orange-400">Add to List</button>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-1/5 rounded overflow-hidden shadow-lg m-4">
      <img
           class="w-full"
           src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rd269f2Yftxxam3EOJPYVwrvjIJ.jpg"
           alt="A Quiet Place movie poster" />

      <div class="px-4 py-2 bg-black-800">
        <h3 class="font-bold text-xl mb-2 text-black-200">Apostle <span>(2018)</span></h3>
        <div class="button-container flex justify-between mb-2">
          <button class="text-sm text-black-200">More Info</button>
          <button class="text-sm font-bold py-2 px-4 rounded bg-orange-400">Add to List</button>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-1/5 rounded overflow-hidden shadow-lg m-4">
      <img
           class="w-full"
           src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wfLzocgEa7DDQAJWeorEiDFx9WM.jpg"
           alt="A Quiet Place movie poster" />

      <div class="px-4 py-2 bg-black-800">
        <h3 class="font-bold text-xl mb-2 text-black-200">Slaughterhouse Rulez <span>(2018)</span></h3>
        <div class="button-container flex justify-between mb-2">
          <button class="text-sm text-black-200">More Info</button>
          <button class="text-sm font-bold py-2 px-4 rounded bg-orange-400">Add to List</button>
        </div>
      </div>
    </div> -->
  <!-- </div> -->
</template>

<script>
// import axios from "axios";
import Stars from "@/components/Stars.vue";

export default {
  name: "Movie_Detail",
  components: {
    Stars,
  },
  data: function () {
    return {
      // movieId: this.$route.params.movieId,
      movieId:"",
      movieOriginalTitle: "",
      moviePosterPath: "",
      movieDescription: "",
    };
  },
  // methods: {
  //   fetchData: function () {
  //     axios
  //       .get(
  //         `${process.env.VUE_APP_BACKEND_BASE_URL}/movies/show/${this.movieId}`
  //       )
  //       .then((response) => {
  //         console.log(response);
  //         this.movieOriginalTitle = response.data.movie.originalTitle;
  //         this.moviePosterPath = response.data.movie.posterPath;
  //         this.movieDescription = response.data.movie.overview;
  //       })
  //       .catch((error) => {
  //         this.usersLoadingError =
  //           "An error occured while fetching movie details.";
  //         console.error(error);
  //       });
  //   },
  //   redirectEdit: function () {
  //     this.$router.push(`/movies/edit/${this.movieId}`);
  //   },
  // },
  // created: function () {
  //   if (this.$root.currentUserEmail === null) {
  //     this.$router.push("/users");
  //   }
  //   this.fetchData();
  // },
};
</script>

<style>
.movieshow {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}
.movieshow-title {
  padding: 20px 10px 10px 10px;
  margin: 10px;
  text-align: center;
  font-family: "TeX Gyre Adventor";
  font-size: xx-large;
}
.movieshow-container {
  display: flex;
  justify-content: stretch;
  width: 100%;
}

.movieshow-img {
  margin-top: 15px;
  width: 50%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.movieshow-inner-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 35vw;
  height: 70vw;
  max-width: 400px;
  max-height: 600px;
}
.movieshow-description-header {
  font-size: 40px;
  font-family: cursive;
}

.movieshow-description {
  display: block;
  align-content: center;
  font-family: Arial, Helvetic, sans-serif;
}
.movieshow-block-description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin-bottom: 70px;
  margin-left: 15px;
  width: 60%;
  height: 700px;
}
.movieshow-button {
  margin-top: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.movieshow-button {
  width: 140px;
  height: 45px;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.movieshow-button:hover {
  background-color: #2ecae5;
  box-shadow: 0px 15px 20px rgba(46, 147, 229, 0.4);
  color: #fff;
  transform: translateY(-7px);
}
</style>
