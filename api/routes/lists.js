import express from "express";
import List from "../models/List.js";
import verify from "../verifyToken.js";

const listsRouter = express.Router();

// ***************** CREATE *****************
listsRouter.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);
    try {
      const savedList = await newList.save();
      res.status(201).json(savedList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

// ***************** DELETE *****************
listsRouter.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(201).json("The list has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

// ***************** GET LISTS *****************
listsRouter.get("/", verify, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];
  try {
    // if there is a type query (which means that we are clicking "Series" or "Movies" in the navbar)
    if (typeQuery) {
      // if we have a genre query in the front page (feature section in Home page)
      if (genreQuery) {
        // for example we choose Movie in the Navbar, and then Action as genre...
        list = await List.aggregate([
          { $sample: { size: 10 } },
          // it will look at the type (that is gonna be movie) and look at the genre (that is gonna be action). It will find all these movies and send us just 10 of them. 10 random lists.
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        // this in case we have a type query but not a genre
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ]);
      }
    } else {
      // if there is no type query (which means we are in the Homepage), we can fetch random lists
      list = await List.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default listsRouter;
