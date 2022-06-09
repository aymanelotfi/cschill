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
<!-- <template>
  <div class="flex justify-center items-center flex-wrap flex--movie flex-grow" style="flex-direction: column;">

    <div class="w-full overflow-auto  md:w-full lg:w-1/2 max-w-4xl rounded overflow-hidden shadow-lg m-4 flex justify-between">
      <div class="md:flex-shrink-0">
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
</template> -->
<template>
  <div
      class="movie-card"
      :style="`background-image: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('https://image.tmdb.org/t/p/original/${$root.movi.backdrop_path}')`"
    >

  <div class="container">

    <a href="#"><img  :src="'https://image.tmdb.org/t/p/original/' + $root.movi.poster_path" height="250" width="230" alt="cover" class="cover" /></a>
    <div class="hero" style="background:url('https://image.tmdb.org/t/p/original/${$root.movi.backdrop_path}">

      <div class="details">

        <div class="text-2xl text-white mb-3 lg:mb-5 lg:text-7xl xl:text-xl font-semibold">{{$root.movi.title}}</div>

  <Stars  :movieId="$root.movi.id" />

      </div> <!-- end details -->

    </div> <!-- end hero -->

    <div class="description">

      <div class="column1">
        <button class="bg-white rounded-lg font-bold text-gray-800 text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-gray-300 mr-6">
     Add to my list
      </button>
      </div> <!-- end column1 -->

      <div class="column2">

        <div class="text-black">{{$root.movi.overview}}</div>



    </div> <!-- end column2 -->

    </div> <!-- end description -->


  </div> <!-- end container -->
</div> <!-- end movie-card -->
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
  //   change:function(res){
  //     return res.substring(0,Math.min(res.length-1,60))+"...";
  //   },
  // }
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

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Lato:400,300,700);

@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);

*, *:before, *:after {
  box-sizing: border-box;
}

body {
  background: #43423E;
}

a {
  text-decoration: none;
  color: #5C7FB8
}

a:hover {
  text-decoration: underline;
}

.movie-card {
  font: 14px/22px "Lato", Arial, sans-serif;
  color: #A9A8A3;
  padding: 40px 0;
  background-size : cover;
}

.container {
  margin: 0 auto;
  width: 780px;
  height: 640px;
  background: #F0F0ED;
  border-radius: 5px;
  position: relative;
}

.hero {
  height: 342px;
  margin:0;
  position: relative;
  overflow: hidden;
  z-index:1;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

}

.hero:before {
  content:'';
  width:100%; height:100%;
  position:absolute;
  overflow: hidden;
  top:0; left:0;
  background:black;
  //background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_bg.jpg");
  z-index:-1;

  transform: skewY(-2.2deg);
  transform-origin:0 0;

  //chrome antialias fix
  -webkit-backface-visibility: hidden;

}

.cover {
  position: absolute;
  top: 160px;
  left: 40px;
  z-index: 2;
  height: 280px !important;
  width: 210px !important;
}

.details {

  padding: 190px 0 0 280px;


  .title1 {
    color: white;
    font-size: 25px;
    margin-bottom: 30px;
    position: relative;

    span {
      position: absolute;
      top: 3px;
      margin-left: 12px;
      background: #C4AF3D;
      border-radius: 5px;
      color: #544C21;
      font-size: 14px;
      padding: 0px 4px;

    }
  }

  .title2 {
    color: #C7C1BA;
    font-size: 23px;
    font-weight: 300;
    margin-bottom: 15px;
  }


  .likes {
    margin-left: 24px;
  }


  .likes:before {
    content: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/icon_like.png");
    position: relative;
    top: 2px;
    padding-right: 7px;
  }

}

.description {

  bottom: 0px;
  height: 200px;
  font-size: 16px;
  line-height: 26px;
  color: #B1B0AC;

}

.column1 {
  padding-left: 50px;
  padding-top: 120px;
  width: 220px;
  float: left;
  text-align: center;
}

.tag {
  background: white;
  border-radius: 10px;
  padding: 3px 8px;
  font-size: 14px;
  margin-right: 4px;
  line-height: 35px;
  cursor: pointer;
}

.tag:hover {
  background: #ddd;
}

.column2 {
  padding-left: 41px;
  padding-top: 30px;
  margin-left: 20px;
  width: 480px;
  float: left;
}

.avatars {
  margin-top: 23px;

  img {
    cursor: pointer;
  }

  img:hover {
    opacity: 0.6;
  }

  a:hover {
    text-decoration: none;
  }
}


fieldset, label { margin: 0; padding: 0; }

/****** Style Star Rating Widget *****/

// .rating {
//   border: none;
//   float: left;
// }
//
// .rating > input { display: none; }
// .rating > label:before {
//   margin: 5px;
//   margin-top: 0;
//   font-size: 1em;
//   font-family: FontAwesome;
//   display: inline-block;
//   content: "\f005";
// }
//
// .rating > .half:before {
//   content: "\f089";
//   position: absolute;
// }
//
// .rating > label {
//   color: #ddd;
//  float: right;
// }
//
// /***** CSS Magic to Highlight Stars on Hover *****/
//
// .rating > input:checked ~ label, /* show gold star when clicked */
// .rating:not(:checked) > label:hover, /* hover current star */
// .rating:not(:checked) > label:hover ~ label { color: #FFD700;  } /* hover previous stars in list */
//
// .rating > input:checked + label:hover, /* hover current star when changing rating */
// .rating > input:checked ~ label:hover,
// .rating > label:hover ~ input:checked ~ label, /* lighten current selection */
// .rating > input:checked ~ label:hover ~ label { color: #FFED85;  }

a[data-tooltip] {
  position: relative;
}
a[data-tooltip]::before,
a[data-tooltip]::after {
  position: absolute;
  display: none;
  opacity: 0.85;
}
a[data-tooltip]::before {
  /*
   * using data-tooltip instead of title so we
   * don't have the real tooltip overlapping
   */
  content: attr(data-tooltip);
  background: #000;
  color: #fff;
  font-size: 13px;
  padding: 5px;
  border-radius: 5px;
  /* we don't want the text to wrap */
  white-space: nowrap;
  text-decoration: none;
}
a[data-tooltip]::after {
  width: 0;
  height: 0;
  border: 6px solid transparent;
  content: '';
}

a[data-tooltip]:hover::before,
a[data-tooltip]:hover::after {
  display: block;
}

/** positioning **/

/* top tooltip */
a[data-tooltip][data-placement="top"]::before {
  bottom: 100%;
  left: 0;
  margin-bottom: 40px;
}
a[data-tooltip][data-placement="top"]::after {
  border-top-color: #000;
  border-bottom: none;
  bottom: 50px;
  left: 20px;
  margin-bottom: 4px;
}
body{
  background-image:url("/movie_card.png");
}
</style>
