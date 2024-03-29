import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
        const { username, email, password } = req.body;

        if (!username || !email || !password || username === "" || email === "" || password === "") {
                return next(errorHandler(400, "All fields are required"));
        }

        let hashPassword;

        if (password) {
                if (password.length < 6) {
                        return next(errorHandler(400, 'Password must be at least 6 characters'));
                }
                hashPassword = bcryptjs.hashSync(password, 10);
        }

        if (username.length < 7 || username.length > 20) {
                return next(
                        errorHandler(400, 'Username must be between 7 and 20 characters')
                );
        }
        if (username.includes(' ')) {
                return next(errorHandler(400, 'Username cannot contain spaces'));
        }
        if (username !== username.toLowerCase()) {
                return next(errorHandler(400, 'Username must be lowercase'));
        }
        if (!username.match(/^[a-zA-Z0-9]+$/)) {
                return next(
                        errorHandler(400, 'Username can only contain letters and numbers')
                );
        }
        if (await User.findOne({ email })) {
                return next(errorHandler(400, 'User already exists'));
        }

        const newUser = new User({
                username,
                email,
                password: hashPassword
        });

        try {
                await newUser.save();
                const { password: pass, ...user } = newUser._doc;
                const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "30m" });

                res.status(200).cookie('access_token', token, { httpOnly: true }).json({ message: "User created successfully", user });
        } catch (error) {
                next(error);
        }
};

export const signin = async (req, res, next) => {
        const { email, password } = req.body;

        if (!email || !password || email === "" || password === "") {
                return next(errorHandler(400, "All fields are required"));
        }

        try {
                const validUser = await User.findOne({ email });

                if (!validUser) {
                       return next(errorHandler(404, "User not found"));
                }

                const validPassword = bcryptjs.compareSync(password, validUser.password);

                if (!validPassword) {
                        return next(errorHandler(400, "Invalid password"));
                }

                const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: "30m" });

                const { password: pass, ...rest } = validUser._doc;

                res.status(200).cookie('access_token', token, { httpOnly: true }).json(rest);
        } catch (error) {
                next(error);
        }
};

export const google = async (req, res, next) => {
        const { name, email, googlePhotoUrl } = req.body;

        try {
                const user = await User.findOne({ email });

                if (user) {
                        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30m" });
                        const { password, ...rest } = user._doc;
                        res.status(200).cookie('access_token', token, { httpOnly: true }).json(rest);
                } else {
                        const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
                        const hashPassword = bcryptjs.hashSync(generatedPassword, 10);
                        const newUser = new User({
                                username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
                                email,
                                password: hashPassword,
                                profilePicture: googlePhotoUrl
                        });
                        await newUser.save();
                        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "30m" });
                        const { password, ...rest } = newUser._doc;
                        res.status(200).cookie('access_token', token, { httpOnly: true }).json(rest);
                }
        } catch (error) {
                next(error);
        }
};