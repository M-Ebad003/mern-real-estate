import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const SignUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);

  //   if(username)
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();

    res.send({
      status: 201,
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
};
