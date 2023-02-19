import axios from 'axios';

const request = axios.create({
    timeout: 7000,
    method: 'post',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    withCredentials: true
});

request.interceptors.request.use(config => config);

request.interceptors.response.use(
    response => response.data,
    async error => {
        throw error;
    }
);

export default request;
