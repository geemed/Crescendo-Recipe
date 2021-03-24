import axios from "axios";
import config from "app-config/config.json";

const BASE_URL = `${config.baseApi}`;

const xhr = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
});

export const get = (url, params) =>
  xhr.get(url, {
    params: params,
  });
