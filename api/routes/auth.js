import express from "express";
import User from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

const authRouter = express.Router();

//REGISTER
authRouter.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    // crypto-js packace script to encrypt password.
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });
  try {
    const user = await newUser.save();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// LOGIN
authRouter.post("/login", async (req, res) => {
  try {
    // find the user. if email = request (req.body.email)
    const user = await User.findOne({ email: req.body.email });
    // if there is no user with that email send a status error
    !user && res.status(401).json("Wrong password or username!");

    // crypto-js script to decrypt password
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    // so, basically the above code is going to decryp this, so we can compare -->
    // if the original password is not the same as the password that we sent, send a status error
    originalPassword !== req.body.password &&
      res.status(401).json("Wrong password or username!");
    // and if they equal, we can send our user

    // json web token to secure our Login
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "90d" }
    );

    // we don't want the password to be sent so we desctructure this password inside user.
    // .doc (document) is all the information in our document (the content inside the user object) the one we get as a response
    // so, what we do here is, take all the doc, take this password and other information: username, email etc... But hold this password, I need just the information. so we pass only info in .json(info)
    const { password, ...info } = user._doc;

    res.status(200).json({ ...info, accessToken });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default authRouter;
