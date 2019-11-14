const router = require("express").Router();
let Stock = require("../models/stock");

// Get oll stocks in descending order with X limit
router.route("/").get((req, res) => {
  Stock.find()
    .sort({ createdAt: "desc" })
    .then(req => res.json(req))
    .catch(err => res.status(400).json("Error: " + err));
});

// Get oll stocks in descending order with X limit
router.route("/:id").get((req, res) => {
  Stock.findById(req.params.id)
    .then(req => res.json(req))
    .catch(err => res.status(400).json("Error: " + err));
});

// Add new post
router.route("/add").post((req, res) => {
  const link = req.body.link;
  const genres = req.body.genres;
  const thumbnail = req.body.thumbnail;
  const poster = req.body.poster;
  const newMovie = new Stock({
    title,
    year,
    description,
    link,
    genres,
    thumbnail,
    poster
  });

  newMovie
    .save()
    .then(() => res.json("Stock added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

// Get oll stocks in descending order with X limit
router.route("/increment-view/:id").get((req, res) => {
  Stock.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } })
    .exec()
    .then(req => res.json(req))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
