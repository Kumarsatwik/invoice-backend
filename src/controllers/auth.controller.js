import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userModel } from "../model/user.model.js";
import { otpModel } from "../model/otp.model.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("All fields are required");
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send("Invalid email or password");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).send("Invalid email or password");
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1m" }
    );
    return res.status(200).send({ message: "Login Successfully", token });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
};

export const signup = async (req, res) => {
  try {
    const { fullName, email, password, cpassword } = req.body;

    if (!fullName || !email || !password || !cpassword) {
      return res.status(400).send("All fields are required");
    }

    if (password !== cpassword) {
      return res.status(400).send("Passwords do not match");
    }

    const user = await userModel.findOne({ email });
    if (user) {
      console.log(user);
      return res.status(400).send("User already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      fullName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return res
      .status(200)
      .json({ message: "Successfully registered ! Please login" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

export const home = async (req, res) => {
  try {
    const user = req.user;
    return res.status(200).json({ message: "Welcome to home page", user });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};