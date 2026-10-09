import axios from "axios";

const STAGING_API_URL = "https://fixmate-api.neutonsoft.com/api/eserve/v1/";
// const STAGING_API_URL = "http://localhost:8000/api/eserve/v1/";

export const API_URL = STAGING_API_URL;

let APIKit = axios.create({
  baseURL: STAGING_API_URL,
  timeout: 30000,
});

export const UserService = {
  sentOtp: async (payload: object) => {
    const apiHeaders = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-verification-token": "@EServe-FmtnKgUrp5-3UlNmdKRbV",
      },
    };
    return APIKit.post("otp/send", payload, apiHeaders);
  },
  login: async (payload: object) => {
    console.log("this is payload", payload)
    const apiHeaders = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "fcm-token": "fsdfgyrtkjbg",
        "x-verification-token": "@EServe-FmtnKgUrp5-3UlNmdKRbV",
      },

    }
    return APIKit.post("login", payload, apiHeaders);
  }
};
