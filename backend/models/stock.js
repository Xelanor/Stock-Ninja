const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    year: {
      type: String
    },
    description: {
      type: String
    },
    link: {
      type: String
    },
    genres: [String],
    views: {
      type: Number,
      default: 0
    },
    thumbnail: {
      type: String
    },
    poster: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
