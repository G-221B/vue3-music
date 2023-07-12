import axios from 'axios';

const request = axios.create({
    baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
    timeout: 30000
});

export default request;
