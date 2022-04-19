<!--
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-04-18 12:15:49
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-04-19 14:49:39
-->
<template>
  <div class="home">
    <div class="myInfo">
      <div class="logo">
        <img src="../assets/img/logo.jpg" alt="">
      </div>
      <div class="name">YUYUYU</div>
      <div class="slogan">学而不思则罔 思而不学则殆</div>
    </div>
    <div class="content">
      <div class="labels">
        <div class="label" v-for="(item,index) in labels" :key="index">
          {{item}}
        </div>
      </div>
      <div class="posts">
        <div class="post" v-for="(item,index) in postData" :key="index">
          <div class="title">{{item.title}}</div>
          <div class="cont">{{item.body}}</div>
        </div>
      </div>
    </div>
    
    
  </div>
</template>
<script>
import { ref, reactive } from "vue";
import { fetchData, fetchSongs,fetchPosts } from "../api/index";

export default {
  setup() {

    const labels = ['Java','Spring boot','MySQL','Solidity']

    // 获取box质押数据接口
    const query = reactive({
      logType: "deposited",
      pageNo: 1,
      pageSize: 50,
    });
    // 获取表格数据
    const getData = () => {
      fetchData(query).then((res) => {
        console.log("box质押数据: ", res);
      });
    };
    getData();
    // 获取文章数据
    const postData = ref([]);
    const getPosts = () => {
      fetchPosts().then((res) => {
        console.log('文章数据: ',res)
        postData.value = res
      })
    }
    getPosts();
    return {
      postData,
      labels
    };
  },
};
</script>
<style lang="less" scoped>
@import url('../assets/css/home.less');
</style>
