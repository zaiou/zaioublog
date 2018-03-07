<template>
    <!--左边文章列表-->
    <div class="blog-main-left">
        <div class="article shadow" v-for="item in items" :key="item.id">
            <div class="article-left">
                <img :src="item.imageurl" alt="基于laypage的layui扩展模块（pagesize.js）！" />
            </div>
            <div class="article-right">
                <div class="article-title">
                    <a href="detail.html">{{item.title}}</a>
                </div>
                <div class="article-abstract">
                    {{item.summary}}
                </div>
            </div>
            <div class="clear"></div>
            <div class="article-footer">
                <span><i class="fa fa-clock-o"></i>&nbsp;&nbsp;{{item.create_time | timestampToTime}}</span>
                <span><i class="fa fa-tag"></i>&nbsp;&nbsp;<a href="#">{{item.c_name}}</a></span>
                <span class="article-viewinfo"><i class="fa fa-eye"></i>&nbsp;0</span>
                <span class="article-viewinfo"><i class="fa fa-commenting"></i>&nbsp;4</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Api from '@/api/index.js';

    export default {
        data(){
            return {
                items:[]
            }
        },
        mounted(){
            Api.get('index/index', {}).then((e) => { //获取首页博客数据
                if(e.code==0){
                     this.items = e.data;
                }
            }) 
        },
        filters:{
           
        }
    }
</script>

