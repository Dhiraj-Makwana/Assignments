import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_PASSWORD;
if (!JWT_SECRET) {
    throw new Error("JWT SECRET is not defined in environment variables");
}
export const userMiddleware = (req, res, next) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header, JWT_SECRET);
    if (decoded) {
        req.userId = decoded.id;
        next();
    }
    else {
        res.status(403).json({
            message: "You're not logged in"
        });
    }
};
//# sourceMappingURL=Middleware.js.map