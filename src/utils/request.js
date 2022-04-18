/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-04-18 14:16:08
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-04-18 14:37:32
 */
import axios from 'axios';

const service = axios.create({
    timeout: 5000,
    // baseURL: 'https://test.dpcprotocol.com',
});


service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);


export default service;
