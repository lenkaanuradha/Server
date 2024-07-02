import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      useremail: req.body.useremail,
      password: hash,
    });
  console.log(newUser)
    await newUser.save();
    res
      .status(200)
      .json({ success: true, message: "User created successfully!" });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};
export const loginUser = async (req, res) => {
   
    try {
      const user = await User.findOne({ useremail: req.body.useremail });
      if (!user) {
        return res.status(401).json({success:false, error: "User not found!" });
      }
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) {
       
        return res.status(400).json({ success: false, error: "Password does not match!" });
      }
      const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);
      res.status(200).json({ success: true, token: token, username: user.username,userId:user._id });
    } catch (error) {
      return res.status(500).json({ success: false, error: "Internal server error" });
    }
  };
