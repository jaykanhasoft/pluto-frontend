import axios from 'axios'
import ApiConfig from './ApiConfig';

const baseURL = ApiConfig.API_URL;

export const apiClient = () => {
  const getToken = localStorage.getItem("token") ? localStorage.getItem("token").replace(/['"]+/g, '') : "";
  return axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': getToken ? `Bearer ${getToken}` : ""
    }
  });
}