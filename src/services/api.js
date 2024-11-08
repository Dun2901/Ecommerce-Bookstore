import axios from "../utils/axios-customize";

export const callRegister = (fullName, email, password, phone) => {
  return axios.post("/api/v1/user/register", { fullName, email, password, phone });
};

export const callLogin = (username, password) => {
  return axios.post("/api/v1/auth/login", { username, password, delay: 1000 });
};
