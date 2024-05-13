import axios from 'axios'

export const Axios = axios.create({
  baseURL:
    process.env.API_BASE_URL ||
    process.env.API_DEVELOPMENT_URL ||
    process.env.LOCALHOST,
  withCredentials: true,
})
