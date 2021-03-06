const axios = require("axios");
const db = require("../models");

module.exports = {
    findAll: function(req, res) {
            axios
              .get("https://www.googleapis.com/books/v1/volumes/", { params: req.query })
              .then(results => results.data.items)
              .then(results => res.json(results))
              .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {

      console.log("reqbody"+req.body)

      db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}