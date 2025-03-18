import { DecodeToken } from "../utility/TokenHelper";

export const AuthVerification = (req, res, next) => {
  let token = req.headers["token"] || req.cookies["token"];

  let decoded = DecodeToken(token);
  if (decoded === null) {
    return res.status(401).json({
      status: "fail",
      message: "Unauthorized user!",
    });
  } else {
    
    // let { email, userID } = decoded;
    // req.headers.email = email;
    // req.headers.userID = userID;

    req.user = {
      email: decoded.email,
      userID: decoded.userID,
    };
    next();
  }
};
