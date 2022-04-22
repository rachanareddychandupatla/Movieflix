import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    popularMovies: [],
    genreNames: [],
    movieData: [],
  },
  getters: {},
  mutations: {
    setPopularMovies(state, value) {
      state.popularMovies = value;
    },

    setGenre(state, value) {
      state.genreNames = value;
    },

    setMovieData(state, value) {
      state.movieData = value;
    }
  },
  actions: {},
  modules: {},
});
