<!--
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-04-18 12:15:49
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-04-18 17:37:44
-->
<template>
  <div class="index">
    <div class="postCont">
      <div class="postBox" v-for="(item,index) in postData" :key="index">
        {{item.title}}
      </div>

    </div>
    
  </div>
</template>
<script>
import { ref, reactive } from "vue";
import { fetchData, fetchSongs,fetchPosts } from "../api/index";

export default {
  setup() {
    const msg = "test msg";

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

    // 获取网易云接口数据
    // const getSongs = () => {
    //   fetchSongs().then((res) => {
    //     console.log("歌曲: ", res);
    //   });
    // };
    // getSongs();


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
      msg,
      postData
    };
  },
};
</script>
