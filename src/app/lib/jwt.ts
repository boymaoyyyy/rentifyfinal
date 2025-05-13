// Updated jwt.ts with removed 'err' variable
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key';

// This function generates the JWT token
export const generateToken = (user: { id: string; email: string }) => {
  return jwt.sign(user, SECRET_KEY, { expiresIn: '1d' });
};

// This function verifies and decodes the JWT token
export const verifyToken = (token: string) => {
  try {
    // Type assertion to specify the return type
    const decoded = jwt.verify(token, SECRET_KEY) as jwt.JwtPayload;
    return decoded;  // Returning the decoded payload
  } catch {
    return null;  // No need to use 'err' here
  }
};
