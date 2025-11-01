import axios from "axios";

const API_BASE = "https://dummyjson.com/users"; // temporary API

export const getDoctors = async () => {
  const response = await axios.get(API_BASE);
  return response.data.users.slice(0, 6); // 6 sample doctors
};
