import jwt from "jsonwebtoken";
import { CreateError } from "../utils/error.js";

export const AuthUser = (req, res, next) => {
  const authenticated = req.headers.authorization;
  if (!authenticated)
    return next(CreateError(402, "you are not authenticated!"));
  else {
    const token = authenticated.slice(7, authenticated.length);

    jwt.verify(token, process.env.Jkeys, (err, decod) => {
      if (err) return next(CreateError(403, "token not valid"));
      req.user = decod;
      next();
    });
  }
};
// export const AuthUser = (req, res, next) => {
//   const token = req.cookies.access_token;
//   if (!token) return next(CreateError(402, "you are not authenticated!"));
//   jwt.verify(token, process.env.Jkeys, (err, user) => {
//     if (err) return next(CreateError(403, "token not valid"));
//     req.user = user;
//     next();
//   });
// };

export const verifyUser = (req, res, next) => {
  AuthUser(req, res, () => {
    // const rols = req.user.Role === "seller";
    if (req.user.id === req.params.id || req.Role === "seller") {
      next();
    } else {
      next(CreateError(403, "token not valid"));
    }
  });
};
export const AuthSeller = (req, res, next) => {
  AuthUser(req, res, () => {
    if (req.user.Role === "seller") {
      next();
    } else {
      next(CreateError(403, "This user is not an seller"));
    }
  });
};
