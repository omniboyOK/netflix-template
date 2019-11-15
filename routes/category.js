const express = require("express");
const router = express.Router();
const axios = require("axios");
const queryString = require("query-string");

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";
const GENRE_LIST = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" }
];

let filters = {
    api_key: API_KEY,
    language: 'es-ES'
  }

/* GET home page. */
router.get("/:id", function(req, res, next) {
  filters.with_genres = req.params.id;
  let query = queryString.stringify(filters);
  axios
    .get(`${BASE_URL}discover/movie/?${query}`)
    .then(({ data }) => {
      console.log(data.results);
      res.render("index", {
        title: "Netflix",
        movies: data.results,
        overview: data.results.overview,
        categories: GENRE_LIST
      });
    })
    .catch(() => {
      console.log("api error");
    });
});

module.exports = router;
