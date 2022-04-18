/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-04-18 14:17:29
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-04-18 17:20:11
 */
import request from '../utils/request';

const fetchData = query => {
    return request({
        url: 'https://test.dpcprotocol.com/boxApi/history/all',
        method: 'get',
        params: query
    });
};

const fetchSongs = () => {
  return request({
      url: '/service/player?type=1&id=1391638888',
      method: 'get'
  });
};

const fetchPosts = () => {
  return request({
    url: 'http://jsonplaceholder.typicode.com/posts',
    method: 'get'
});
}

export {
  fetchData,
  fetchSongs,
  fetchPosts
}
