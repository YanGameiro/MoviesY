import axios from "axios";

const api = axios.create({
  baseURL: "https://z2kod7tob0.execute-api.us-east-1.amazonaws.com/dev",
});

export default api;
