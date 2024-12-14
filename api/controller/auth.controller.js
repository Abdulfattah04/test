import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utilis/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // Validate inputs
  if (!username || !email || !password || username.trim() === '' || email.trim() === '' || password.trim() === '') {
    return next(errorHandler(400, 'All fields are required'));
  }

  try {
    // Hash the password
    const hashpassword = bcryptjs.hashSync(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashpassword,
    });

    // Save user to the database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    // Handle errors
    next(error);
  }
};

// signin api
export const signin = async (req, res, next) => {
  const {username, password} = req.body;

  if(!email || !password || email === '' || password === '') {
    next(errorHandler(400, 'All fields are required'));
  }

  try {
    const validUser = await User.findOn({ email });
    if(!valisUser) {
      next(errorHandler(404, 'Invalid Credentials'));
    }

    const validPassword = bcryptjs.compareSync( password, validUser.password);
    if(!validPassword){
      next(errorHandler(404, 'Invalid Credentials'));
    }

    const token = jwt.sign
    {id: validUser}

  }catch (error) {
    next(error)
  }
}