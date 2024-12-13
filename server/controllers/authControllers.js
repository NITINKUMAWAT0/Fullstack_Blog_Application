import Users from "../model/userModel.js";
import { compareString, createJWT, hashString } from "../utils/index.js";
import { sendVerificationEmail } from "../utils/sendEmail.js";


export const register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, image, accountType, provider } = req.body;

    // Validate required fields
    if (!(firstName && lastName && email && password)) {
      return res.status(400).json({ message: "Provide Required Fields!" });
    }

    if (accountType === "Writer" && !image) {
      return res.status(400).json({ message: "Please provide a profile picture" });
    }

    const userExist = await Users.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Email Address already exists. Try Login" });
    }
    console.log(Users);
    

    const hashedPassword = await hashString(password);
    const user = await Users.create({
      name: `${firstName} ${lastName}`,
      email,
      password: !provider ? hashedPassword : "",
      image,
      accountType,
      provider,
    });

    user.password = undefined;
    const token = createJWT(user?._id);

    if (accountType === "Writer") {
      sendVerificationEmail(user, res, token);
    } else {
      res.status(201).json({
        success: true,
        message: "Account created successfully",
        user,
        token,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const googleSignUp = async (req, res, next) => {
  try {
    const { name, email, image, emailVerified } = req.body;

    const userExist = await Users.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Email Address already exists. Try Login" });
    }

    const user = await Users.create({
      name,
      email,
      image,
      provider: "Google",
      emailVerified,
    });

    user.password = undefined;
    const token = createJWT(user?._id);

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      user,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Please Provide User Credentials" });
    }

    const user = await Users.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    if (!password && user?.provider === "Google") {
      const token = createJWT(user?._id);
      return res.status(201).json({
        success: true,
        message: "Login successfully",
        user,
        token,
      });
    }

    const isMatch = await compareString(password, user?.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    if (user?.accountType === "Writer" && !user?.emailVerified) {
      return res.status(400).json({ message: "Please verify your email address." });
    }

    user.password = undefined;
    const token = createJWT(user?._id);

    res.status(201).json({
      success: true,
      message: "Login successfully",
      user,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
