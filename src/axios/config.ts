import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response, response.data.message);
    return response;
  },
  (error) => {
    const res = error?.response;
    console.log(res);

    if (!res) {
      return Promise.reject({
        success: false,
        message: ["There is a problem with the Internet"],
      });
    }

    if (res.status === 400 && Array.isArray(res.data?.details)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const errorMessages = res.data.details.map((e: any) => e.message);
      return Promise.reject({
        success: false,
        message: errorMessages,
      });
    }

    const fallbackMessage = res.data?.message || "Something went wrong";
    return Promise.reject({
      success: false,
      message: [fallbackMessage],
    });
  }
);
