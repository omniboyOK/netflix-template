var express = require("express");
var router = express.Router();
var axios = require("axios");

const API_KEY = "?api_key=dca80b850d66cf214f91989464e232a7";
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

/* GET home page. */
router.get("/", function(req, res, next) {
  axios
    .get(`${BASE_URL}discover/movie/${API_KEY}`)
    .then(({ data }) => {
      res.render("index", {
        title: "hola",
        movies: data.results,
        overview: data.results.overview
      });
    })
    .catch(() => {
      console.log("api error");
      res.render("index", { title: "Error" });
    });
});

router.get("/:id", function(req, res, next) {
  axios
    .get(`${BASE_URL}discover/movie/${API_KEY}&with_genres=${req.query.id}`)
    .then(({ data }) => {
      console.log(data.results)
      res.render("index", {
        title: "hola",
        movies: data.results,
        overview: data.results.overview
      });
    })
    .catch(() => {
      console.log("api error");
      res.render("index", { title: "Esta todo mal ameo" });
    });
});
module.exports = router;
