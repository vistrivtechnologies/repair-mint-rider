//
// import axios from "axios";
// import { decryptData } from "../constant/decryptData";
//
// const STAGING_API_URL = "http://10.0.2.2:8000/api/eserve/v1/";
// // const STAGING_API_URL = "http://localhost:8000/api/eserve/v1/";
//
// export const API_URL = STAGING_API_URL;
//
// const APIKit = axios.create({
//   baseURL: STAGING_API_URL,
//   timeout: 30000,
// });
//
// const apiHeaders = {
//   "Content-Type": "application/json",
//   Accept: "application/json",
//   "x-verification-token": "@EServe-FmtnKgUrp5-3UlNmdKRbV",
// };
//
// const getErrorDetails = (error: any) => {
//   const responseData = error?.response?.data;
//
//   if (responseData?.encryptedData) {
//     const decrypted = decryptData(responseData.encryptedData);
//
//     return decrypted ?? responseData;
//   }
//
//   return responseData ?? error?.message;
// };
//
// export const UserService = {
//   // Send OTP
//   sentOtp: async (payload: object) => {
//     try {
//       const response = await APIKit.post("otp/send", payload, {
//         headers: apiHeaders,
//       });
//
//       console.log("SEND OTP STATUS:", response.status);
//       return response;
//     } catch (error: any) {
//       console.log("SEND OTP ERROR:", error.message);
//       console.log("SEND OTP STATUS:", error.response?.status);
//       console.log(
//         "SEND OTP DETAILS:",
//         JSON.stringify(getErrorDetails(error))
//       );
//       throw error;
//     }
//   },
//
//   // Login
//   login: async (payload: object) => {
//     try {
//       const response = await APIKit.post("login", payload, {
//         headers: {
//           ...apiHeaders,
//           "fcm-token": "fsdfgyrtkjbg",
//         },
//       });
//
//       console.log("LOGIN API STATUS:", response.status);
//       return response;
//     } catch (error: any) {
//       console.log("LOGIN ERROR:", error.message);
//       console.log("LOGIN HTTP STATUS:", error.response?.status);
//       console.log(
//         "LOGIN ERROR DETAILS:",
//         JSON.stringify(getErrorDetails(error))
//       );
//       throw error;
//     }
//   },
//
//   // Update profile
//   updateUser: async (payload: object, token: string) => {
//     try {
//       const response = await APIKit.put("user/update", payload, {
//         headers: {
//           ...apiHeaders,
//           Authorization: token,
//         },
//       });
//
//       console.log("UPDATE PROFILE STATUS:", response.status);
//       return response;
//     } catch (error: any) {
//       console.log("UPDATE PROFILE ERROR:", error.message);
//       console.log("UPDATE PROFILE STATUS:", error.response?.status);
//       console.log(
//         "UPDATE PROFILE DETAILS:",
//         JSON.stringify(getErrorDetails(error))
//       );
//       throw error;
//     }
//   },
//
//   // Send OTP for phone number update
//   sendPhoneUpdateOtp: async (
//     payload: {
//       phoneNumber: string;
//       countryCode: string;
//     },
//     token: string
//   ) => {
//     try {
//       const response = await APIKit.post("user/phone/send-otp", payload, {
//         headers: {
//           ...apiHeaders,
//           Authorization: token,
//         },
//       });
//
//       console.log("PHONE UPDATE OTP STATUS:", response.status);
//       return response;
//     } catch (error: any) {
//       console.log("PHONE UPDATE OTP ERROR:", error.message);
//       console.log(
//         "PHONE UPDATE OTP DETAILS:",
//         JSON.stringify(getErrorDetails(error))
//       );
//       throw error;
//     }
//   },
//
//   // Verify OTP and update phone number
//   verifyAndUpdatePhone: async (
//     payload: {
//       phoneNumber: string;
//       countryCode: string;
//       secretCodeClient: string;
//     },
//     token: string
//   ) => {
//     try {
//       const response = await APIKit.post(
//         "user/phone/verify-otp",
//         payload,
//         {
//           headers: {
//             ...apiHeaders,
//             Authorization: token,
//           },
//         }
//       );
//
//       console.log("PHONE UPDATE VERIFY STATUS:", response.status);
//       return response;
//     } catch (error: any) {
//       console.log("PHONE UPDATE VERIFY ERROR:", error.message);
//       console.log(
//         "PHONE UPDATE VERIFY DETAILS:",
//         JSON.stringify(getErrorDetails(error))
//       );
//       throw error;
//     }
//   },
//
//   // Register rider account
//   registerUser: async (payload: object) => {
//     try {
//       const response = await APIKit.post("register", payload, {
//         headers: {
//           ...apiHeaders,
//           "fcm-token": "fsdfgyrtkjbg",
//         },
//       });
//
//       console.log("REGISTER STATUS:", response.status);
//       console.log("REGISTER RESPONSE:", response.data);
//
//       return response;
//     } catch (error: any) {
//       console.log("REGISTER ERROR:", error.message);
//       console.log("REGISTER HTTP STATUS:", error.response?.status);
//       console.log(
//         "REGISTER ERROR DETAILS:",
//         JSON.stringify(getErrorDetails(error))
//       );
//       throw error;
//     }
//   },
// };
//

































import axios from "axios";
import { decryptData } from "../constant/decryptData";

const STAGING_API_URL = "http://10.0.2.2:8000/api/eserve/v1/";
// const STAGING_API_URL = "http://localhost:8000/api/eserve/v1/";

export const API_URL = STAGING_API_URL;

const APIKit = axios.create({
  baseURL: STAGING_API_URL,
  timeout: 30000,
});

const apiHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "x-verification-token": "@EServe-FmtnKgUrp5-3UlNmdKRbV",
};

const getErrorDetails = (error: any) => {
  const responseData = error?.response?.data;

  if (responseData?.encryptedData) {
    const decrypted = decryptData(responseData.encryptedData);
    return decrypted ?? responseData;
  }

  return responseData ?? error?.message;
};

export const UserService = {
  // Send OTP
  sentOtp: async (payload: object) => {
    try {
      const response = await APIKit.post("otp/send", payload, {
        headers: apiHeaders,
      });

      console.log("SEND OTP STATUS:", response.status);
      return response;
    } catch (error: any) {
      console.log("SEND OTP ERROR:", error.message);
      console.log("SEND OTP STATUS:", error.response?.status);
      console.log(
        "SEND OTP DETAILS:",
        JSON.stringify(getErrorDetails(error))
      );
      throw error;
    }
  },

  // Login
  login: async (payload: object) => {
    try {
      const response = await APIKit.post("login", payload, {
        headers: {
          ...apiHeaders,
          "fcm-token": "fsdfgyrtkjbg",
        },
      });

      console.log("LOGIN API STATUS:", response.status);
      return response;
    } catch (error: any) {
      console.log("LOGIN ERROR:", error.message);
      console.log("LOGIN HTTP STATUS:", error.response?.status);
      console.log(
        "LOGIN ERROR DETAILS:",
        JSON.stringify(getErrorDetails(error))
      );
      throw error;
    }
  },

  // Update profile
  updateUser: async (payload: object, token: string) => {
    try {
      const response = await APIKit.put("user/update", payload, {
        headers: {
          ...apiHeaders,
          Authorization: token,
        },
      });

      console.log("UPDATE PROFILE STATUS:", response.status);
      return response;
    } catch (error: any) {
      console.log("UPDATE PROFILE ERROR:", error.message);
      console.log("UPDATE PROFILE STATUS:", error.response?.status);
      console.log(
        "UPDATE PROFILE DETAILS:",
        JSON.stringify(getErrorDetails(error))
      );
      throw error;
    }
  },

  // Send OTP for phone number update
  sendPhoneUpdateOtp: async (
    payload: {
      phoneNumber: string;
      countryCode: string;
    },
    token: string
  ) => {
    try {
      const response = await APIKit.post("user/phone/send-otp", payload, {
        headers: {
          ...apiHeaders,
          Authorization: token,
        },
      });

      console.log("PHONE UPDATE OTP STATUS:", response.status);
      return response;
    } catch (error: any) {
      console.log("PHONE UPDATE OTP ERROR:", error.message);
      console.log(
        "PHONE UPDATE OTP DETAILS:",
        JSON.stringify(getErrorDetails(error))
      );
      throw error;
    }
  },

  // Verify OTP and update phone number
  verifyAndUpdatePhone: async (
    payload: {
      phoneNumber: string;
      countryCode: string;
      secretCodeClient: string;
    },
    token: string
  ) => {
    try {
      const response = await APIKit.post(
        "user/phone/verify-otp",
        payload,
        {
          headers: {
            ...apiHeaders,
            Authorization: token,
          },
        }
      );

      console.log("PHONE UPDATE VERIFY STATUS:", response.status);
      return response;
    } catch (error: any) {
      console.log("PHONE UPDATE VERIFY ERROR:", error.message);
      console.log(
        "PHONE UPDATE VERIFY DETAILS:",
        JSON.stringify(getErrorDetails(error))
      );
      throw error;
    }
  },

  // Register rider account
  registerUser: async (payload: object) => {
    try {
      const response = await APIKit.post("register", payload, {
        headers: {
          ...apiHeaders,
          "fcm-token": "fsdfgyrtkjbg",
        },
      });

      console.log("REGISTER STATUS:", response.status);
      console.log("REGISTER RESPONSE:", response.data);

      return response;
    } catch (error: any) {
      console.log("REGISTER ERROR:", error.message);
      console.log("REGISTER HTTP STATUS:", error.response?.status);
      console.log(
        "REGISTER ERROR DETAILS:",
        JSON.stringify(getErrorDetails(error))
      );
      throw error;
    }
  },

  // Fetch assigned service requests for Pending Orders
  getAssignedServiceRequests: async (token: string) => {
    try {

const response = await APIKit.get("servicerequests/assigned", {
  params: {
    page: 1,
    limit: 10,
  },
  headers: {
    ...apiHeaders,
    Authorization: token,
  },
});

const encryptedData = response?.data?.encryptedData;

console.log("ASSIGNED ORDERS STATUS:", response.status);

const assignedEncryptedData = response?.data?.encryptedData;

if (assignedEncryptedData) {
  const decrypted = decryptData(assignedEncryptedData);

  console.log(
    "ASSIGNED ORDERS DECRYPTED:",
    JSON.stringify(decrypted, null, 2)
  );

  return {
    ...response,
    data: decrypted,
  };
}

console.log(
  "ASSIGNED ORDERS RESPONSE:",
  JSON.stringify(response.data, null, 2)
);

return response;
    } catch (error: any) {
      console.log("ASSIGNED ORDERS ERROR:", error.message);
      console.log("ASSIGNED ORDERS STATUS:", error.response?.status);
      console.log(
        "ASSIGNED ORDERS DETAILS:",
        JSON.stringify(getErrorDetails(error))
      );
      throw error;
    }
  },
  // Accept or reject an assigned service request
  updateServiceRequestApproval: async (
    payload: {
      serviceRequestApprovalId: string;
      approvalStatus: 'APPROVED' | 'REJECTED';
      rejectionComment?: string;
    },
    token: string,
  ) => {
    try {
      const response = await APIKit.put(
        'servicerequest/approval',
        payload,
        {
          headers: {
            ...apiHeaders,
            Authorization: token,
          },
        },
      );

      console.log('SERVICE REQUEST APPROVAL STATUS:', response.status);
      return response;
    } catch (error: any) {
      console.log('SERVICE REQUEST APPROVAL ERROR:', error.message);
      console.log(
        'SERVICE REQUEST APPROVAL DETAILS:',
        JSON.stringify(getErrorDetails(error)),
      );
      throw error;
    }
  },
};
