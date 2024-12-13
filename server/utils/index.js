import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

// Function to hash a string (e.g., password)
export const hashString = async (userValue) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userValue, salt);
  return hashedPassword;
};

// Function to compare hashed password with plain text password
export const compareString = async (userPassword, password) => {
  try {
    const isMatch = await bcrypt.compare(userPassword, password);
    return isMatch;
  } catch (error) {
    console.log(error);
  }
};

// JSON Web Token creation function
export function createJWT(id) {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  if (!jwtSecretKey) {
    throw new Error('JWT_SECRET_KEY is not defined in the environment variables');
  }

  // Create and sign JWT
  return JWT.sign({ userId: id }, jwtSecretKey, {
    expiresIn: "1d",
  });
}

// Function to generate a random 6-digit OTP
export function generateOTP() {
  const min = 100000;
  const max = 999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
