import { UserOTPService, VerifyOTPService } from "../services/UserServices.js";

export const UserLogin = async (req, res) => {
  const result = await UserOTPService(req);
  return res.status(200).json(result);
};
export const VerifyLogin = async (req, res) => {
  const result = await VerifyOTPService(req);
  if (result.status === "success") {
    let cookieOption = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: false,
    };
    res.cookie("accessToken", result.accessToken, cookieOption);
    return res.status(200).json(result);
  } else {
    return res.status(200).json(result);
  }
};
export const UserLogout = async (req, res) => {};
export const CreateProfile = async (req, res) => {};
export const UpdateProfile = async (req, res) => {};
export const ReadProfile = async (req, res) => {};
