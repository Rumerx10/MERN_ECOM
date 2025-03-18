import { UserModel } from "../models/UserModel.js";
import { EncodeToken } from "../utility/TokenHelper.js";
import { SendEmail } from "./../utility/EmailHelper.js";

export const UserOTPService = async (req) => {
  try {
    console.log("Email------------>>> ", req.body.email);
    let email = req.body.email;
    let otp = Math.floor(Math.random() * 900000 + 100000);
    console.log("OTP------------>>> ", otp);
    // await SendEmail(
    //   "rume.atiltd@gmail.com",
    //   "OPT",
    //   `Your varification code is : ${otp}`
    // );
    const data = await UserModel.updateOne(
      { email: email },
      { $set: { otp: otp } },
      { upsert: true }
    );
    return {
      status: "success",
      message: "6 Digit OTP has been sent to your email.",
      data: data,
    };
  } catch (error) {
    return {
      status: "failed",
      message: "Something went worng!",
      error: error.message,
    };
  }
};

export const VerifyOTPService = async (req) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return {
        status: "fail",
        message: "Email and OTP are required.",
      };
    }
    const data = await UserModel.countDocuments({ email: email, otp: otp });
    if (data === 0) {
      console.log("Unauthorized user.");
      return {
        status: "fail",
        message: "Invalid email or OTP.",
      };
    } else {
      const user = await UserModel.findOne({ email: email, otp: otp }).select(
        "_id"
      );
      let token = EncodeToken(email, user["_id"].toString());
      await UserModel.updateOne({ email: email }, { $set: { otp: "0" } });

      return {
        status: "success",
        message: "User authentication successfull",
        accessToken: token,
      };
    }
  } catch (error) {
    return {
      status: "fail",
      message: "Authorization failed.",
      error: error.message,
    };
  }
};

export const LogoutService = async (req) => {};
export const CreateProfileService = async (req) => {};
export const UpdateProfileService = async (req) => {};
export const ReadProfileService = async (req) => {};
