import jwt from "jsonwebtoken"; // ✅ correct


const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key';

export const generateToken = (user: { id: string; email: string }) => {
  return jwt.sign(user, SECRET_KEY, { expiresIn: '1d' });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null;
  }
};
