const express = require("express");
const router = express.Router();
const axios = require("axios");
const queryString = require("query-string");

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";
const GENRE_LIST = [
  { id: 28, name: "Acción" },
  { id: 12, name: "Aventura" },
  { id: 16, name: "Animación" },
  { id: 35, name: "Comedia" },
  { id: 80, name: "Crimen" },
  { id: 99, name: "Documental" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Familia" },
  { id: 14, name: "Fantasia" },
  { id: 36, name: "Historia" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Musica" },
  { id: 9648, name: "Misterio" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Ciencia Ficción" },
  { id: 10770, name: "Pelicula de TV" },
  { id: 53, name: "Suspenso" },
  { id: 10752, name: "Guerra" },
  { id: 37, name: "Viejo Oeste" }
];

let filters = {
  api_key: API_KEY,
  language: 'es-ES'
}

/* GET home page. */
router.get("/", function(req, res, next) {
  const query = queryString.stringify(filters);
  axios
    .get(`${BASE_URL}discover/movie/?${query}`)
    .then(({ data }) => {
      res.render("index", {
        title: "Netflix",
        movies: data.results,
        overview: data.results.overview,
        categories: GENRE_LIST,
        port: process.env.PORT || "5000",
        host: process.env.HOST,
        lista: "Categorias"
      });
    })
    .catch((err) => {
      console.log("api error");
      res.render("error", { message: "Error de api", error: err});
    });
});

module.exports = router;
