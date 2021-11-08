import express from "express";
import Movie from "../models/Movie.js";
import verify from "../verifyToken.js";

const moviesRouter = express.Router();

// ***************** CREATE *****************
moviesRouter.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body); // new movie model with whate we got from the request
    try {
      // Save movie to database
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

// ***************** UPDATE *****************
moviesRouter.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      // Find movie by id that was sent in the request. After finding it, update it with the new data (set the new data in the body)
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true } //remember to add this congifuration to get the updated data, if not, it will return the old data
      );
      res.status(200).json(updatedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

// ***************** DELETE *****************
moviesRouter.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("The movie has been deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

// ***************** GET MOVIE *****************
moviesRouter.get("/find/:id", verify, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ***************** GET RANDOM MOVIE *****************
moviesRouter.get("/random", verify, async (req, res) => {
  // type query (fo example: /random?type=series)
  // if we don't have a type query, we will get a random movie
  const type = req.query.type;
  let movie;
  try {
    // if we have a type query (type=series)
    if (type === "series") {
      movie = await Movie.aggregate([
        // isSeries will be true. isSeries is a boolean field in the Movie model (by default it is false)
        { $match: { isSeries: true } },
        // just give me one random series
        { $sample: { size: 1 } },
      ]);
    } else {
        // if we don't have a type query (or if we have a type=movie), we will get a random movie not series
      movie = await Movie.aggregate([
        { $match: { isSeries: false } }, // series will be false
        // get one random movie
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ***************** GET ALL MOVIES *****************
moviesRouter.get("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
      try {
        const movies = await Movie.find();
        res.status(200).json(movies.reverse()); // reverse the order of the movies (get latest first)
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed!");
    }
  });

export default moviesRouter;
