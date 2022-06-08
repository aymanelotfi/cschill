<template>
  <div class="add">
    <h2>Add a movie</h2>
    <form>
      <label>Title</label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="title" type="text">
      <label>Description</label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="description" type="text">
      <label>Poster path</label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="poster_path" type="text">
      <label>Type</label>
      <div class="genre-selector">
        <button
          v-for="genre in dictGenres"
          :key="genre.id"
          type="button"
          @click="addGenre(genre)"
          class="btn btn-blue"
          :class="genres.includes(genre.id) ?'yes':'no'">
          {{ genre.name }}
        </button>
      </div>
    </form>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="button" @click="submit">Submit</button>
  </div>
</template>
<script>
export default {
  name: "Add",
  created() {},
  data: function () {
    return {
      title: "",
      description: "",
      poster_path: "",
      release_date: "",
      genres: [],
      dictGenres: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 16,
          name: "Animation",
        },
        {
          id: 35,
          name: "Comedy",
        },
        {
          id: 80,
          name: "Crime",
        },
        {
          id: 99,
          name: "Documentary",
        },
        {
          id: 18,
          name: "Drama",
        },
        {
          id: 10751,
          name: "Family",
        },
        {
          id: 14,
          name: "Fantasy",
        },
        {
          id: 36,
          name: "History",
        },
        {
          id: 27,
          name: "Horror",
        },
        {
          id: 10402,
          name: "Music",
        },
        {
          id: 9648,
          name: "Mystery",
        },
        {
          id: 10749,
          name: "Romance",
        },
        {
          id: 878,
          name: "S-F",
        },
        {
          id: 10770,
          name: "TV Movie",
        },
        {
          id: 53,
          name: "Thriller",
        },
        {
          id: 10752,
          name: "War",
        },
        {
          id: 37,
          name: "Western",
        },
      ],
  };
},
  methods: {
    addGenre: function (genre) {
      if (!this.genres.includes(genre.id)) {
        this.genres.push(genre.id);
      }
      else{
        this.genres.splice(this.genres.indexOf(genre.id),1);
      }
    },
  // },
  }
}
  //   submit: function () {
  //     axios
  //       .post(`${process.env.VUE_APP_BACKEND_BASE_URL}/movies/new`, {
  //         title: this.title,
  //         description: this.description,
  //         release_date: this.release_date,
  //         poster_path: this.poster_path,
  //         genre_ids: this.genres,
  //         average_rating: 0,
  //       })
  //       .then((response) => {
  //         console.log("on submit:", response);
  //         window.location.href = "/details?id=" + response.data._id;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
</script>

<style scoped>
.genre {
  display: flex;
  font-size: 1em;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  transition: 0.4s;
  align-items: center;
}
.add {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  text-align: left;
  font-size: 2.3em;
  margin-top: 100px;
}
form {
  display: flex;
  flex-direction: column;
  width: 20%;
  min-width: 300px;
  margin: 50px;
}
input,
textarea {
  margin: 10px;
  margin-bottom: 20px;
}
textarea {
  height: 100px;
}
label {
  font-size: 1.3em;
}
button {
  margin: 10px 5px 10px 5px;
  width: 150px;
}
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
.yes{
  @apply bg-red-700;
}
.no{
  @apply bg-blue-500;
}

</style>
