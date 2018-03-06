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
                <span><i class="fa fa-clock-o"></i>&nbsp;&nbsp;2017-03-18</span>
                <span class="article-author"><i class="fa fa-user"></i>&nbsp;&nbsp;Absolutely</span>
                <span><i class="fa fa-tag"></i>&nbsp;&nbsp;<a href="#">Web前端</a></span>
                <span class="article-viewinfo"><i class="fa fa-eye"></i>&nbsp;0</span>
                <span class="article-viewinfo"><i class="fa fa-commenting"></i>&nbsp;4</span>
            </div>
        </div>
        <!-- <div class="article shadow">
            <div class="article-left">
                <img src="../../assets/images/cover/201703181909057125.jpg" alt="基于laypage的layui扩展模块（pagesize.js）！" />
            </div>
            <div class="article-right">
                <div class="article-title">
                    <a href="detail.html">基于laypage的layui扩展模块（pagesize.js）！</a>
                </div>
                <div class="article-abstract">
                    该模块主要是针对当前版本laypage没有页容量控制功能而制作，使用该模块后即可实现每页显示多少条数据的控制！本人原创，但是可能有可能只对本人的分页写法有用！
                </div>
            </div>
            <div class="clear"></div>
            <div class="article-footer">
                <span><i class="fa fa-clock-o"></i>&nbsp;&nbsp;2017-03-18</span>
                <span class="article-author"><i class="fa fa-user"></i>&nbsp;&nbsp;Absolutely</span>
                <span><i class="fa fa-tag"></i>&nbsp;&nbsp;<a href="#">Web前端</a></span>
                <span class="article-viewinfo"><i class="fa fa-eye"></i>&nbsp;0</span>
                <span class="article-viewinfo"><i class="fa fa-commenting"></i>&nbsp;4</span>
            </div>
        </div>
        <div class="article shadow">
            <div class="article-left">
                <img src="../../assets/images/cover/201703181909057125.jpg" alt="基于laypage的layui扩展模块（pagesize.js）！" />
            </div>
            <div class="article-right">
                <div class="article-title">
                    <a href="detail.html">基于laypage的layui扩展模块（pagesize.js）！</a>
                </div>
                <div class="article-abstract">
                    该模块主要是针对当前版本laypage没有页容量控制功能而制作，使用该模块后即可实现每页显示多少条数据的控制！本人原创，但是可能有可能只对本人的分页写法有用！
                </div>
            </div>
            <div class="clear"></div>
            <div class="article-footer">
                <span><i class="fa fa-clock-o"></i>&nbsp;&nbsp;2017-03-18</span>
                <span class="article-author"><i class="fa fa-user"></i>&nbsp;&nbsp;Absolutely</span>
                <span><i class="fa fa-tag"></i>&nbsp;&nbsp;<a href="#">Web前端</a></span>
                <span class="article-viewinfo"><i class="fa fa-eye"></i>&nbsp;0</span>
                <span class="article-viewinfo"><i class="fa fa-commenting"></i>&nbsp;4</span>
            </div>
        </div>
        <div class="article shadow">
            <div class="article-left">
                <img src="../../assets/images/cover/201703181909057125.jpg" alt="基于laypage的layui扩展模块（pagesize.js）！" />
            </div>
            <div class="article-right">
                <div class="article-title">
                    <a href="detail.html">基于laypage的layui扩展模块（pagesize.js）！</a>
                </div>
                <div class="article-abstract">
                    该模块主要是针对当前版本laypage没有页容量控制功能而制作，使用该模块后即可实现每页显示多少条数据的控制！本人原创，但是可能有可能只对本人的分页写法有用！
                </div>
            </div>
            <div class="clear"></div>
            <div class="article-footer">
                <span><i class="fa fa-clock-o"></i>&nbsp;&nbsp;2017-03-18</span>
                <span class="article-author"><i class="fa fa-user"></i>&nbsp;&nbsp;Absolutely</span>
                <span><i class="fa fa-tag"></i>&nbsp;&nbsp;<a href="#">Web前端</a></span>
                <span class="article-viewinfo"><i class="fa fa-eye"></i>&nbsp;0</span>
                <span class="article-viewinfo"><i class="fa fa-commenting"></i>&nbsp;4</span>
            </div>
        </div>
        <div class="article shadow">
            <div class="article-left">
                <img src="../../assets/images/cover/201703181909057125.jpg" alt="基于laypage的layui扩展模块（pagesize.js）！" />
            </div>
            <div class="article-right">
                <div class="article-title">
                    <a href="detail.html">基于laypage的layui扩展模块（pagesize.js）！</a>
                </div>
                <div class="article-abstract">
                    该模块主要是针对当前版本laypage没有页容量控制功能而制作，使用该模块后即可实现每页显示多少条数据的控制！本人原创，但是可能有可能只对本人的分页写法有用！
                </div>
            </div>
            <div class="clear"></div>
            <div class="article-footer">
                <span><i class="fa fa-clock-o"></i>&nbsp;&nbsp;2017-03-18</span>
                <span class="article-author"><i class="fa fa-user"></i>&nbsp;&nbsp;Absolutely</span>
                <span><i class="fa fa-tag"></i>&nbsp;&nbsp;<a href="#">Web前端</a></span>
                <span class="article-viewinfo"><i class="fa fa-eye"></i>&nbsp;0</span>
                <span class="article-viewinfo"><i class="fa fa-commenting"></i>&nbsp;4</span>
            </div>
        </div>
        <div class="article shadow">
            <div class="article-left">
                <img src="../../assets/images/cover/201703181909057125.jpg" alt="基于laypage的layui扩展模块（pagesize.js）！" />
            </div>
            <div class="article-right">
                <div class="article-title">
                    <a href="detail.html">基于laypage的layui扩展模块（pagesize.js）！</a>
                </div>
                <div class="article-abstract">
                    该模块主要是针对当前版本laypage没有页容量控制功能而制作，使用该模块后即可实现每页显示多少条数据的控制！本人原创，但是可能有可能只对本人的分页写法有用！
                </div>
            </div>
            <div class="clear"></div>
            <div class="article-footer">
                <span><i class="fa fa-clock-o"></i>&nbsp;&nbsp;2017-03-18</span>
                <span class="article-author"><i class="fa fa-user"></i>&nbsp;&nbsp;Absolutely</span>
                <span><i class="fa fa-tag"></i>&nbsp;&nbsp;<a href="#">Web前端</a></span>
                <span class="article-viewinfo"><i class="fa fa-eye"></i>&nbsp;0</span>
                <span class="article-viewinfo"><i class="fa fa-commenting"></i>&nbsp;4</span>
            </div>
        </div>
        <div class="article shadow">
            <div class="article-left">
                <img src="../../assets/images/cover/201703181909057125.jpg" alt="基于laypage的layui扩展模块（pagesize.js）！" />
            </div>
            <div class="article-right">
                <div class="article-title">
                    <a href="detail.html">基于laypage的layui扩展模块（pagesize.js）！</a>
                </div>
                <div class="article-abstract">
                    该模块主要是针对当前版本laypage没有页容量控制功能而制作，使用该模块后即可实现每页显示多少条数据的控制！本人原创，但是可能有可能只对本人的分页写法有用！
                </div>
            </div>
            <div class="clear"></div>
            <div class="article-footer">
                <span><i class="fa fa-clock-o"></i>&nbsp;&nbsp;2017-03-18</span>
                <span class="article-author"><i class="fa fa-user"></i>&nbsp;&nbsp;Absolutely</span>
                <span><i class="fa fa-tag"></i>&nbsp;&nbsp;<a href="#">Web前端</a></span>
                <span class="article-viewinfo"><i class="fa fa-eye"></i>&nbsp;0</span>
                <span class="article-viewinfo"><i class="fa fa-commenting"></i>&nbsp;4</span>
            </div>
        </div>
        <div class="article shadow">
            <div class="article-left">
                <img src="../../assets/images/cover/201703181909057125.jpg" alt="基于laypage的layui扩展模块（pagesize.js）！" />
            </div>
            <div class="article-right">
                <div class="article-title">
                    <a href="detail.html">基于laypage的layui扩展模块（pagesize.js）！</a>
                </div>
                <div class="article-abstract">
                    该模块主要是针对当前版本laypage没有页容量控制功能而制作，使用该模块后即可实现每页显示多少条数据的控制！本人原创，但是可能有可能只对本人的分页写法有用！
                </div>
            </div>
            <div class="clear"></div>
            <div class="article-footer">
                <span><i class="fa fa-clock-o"></i>&nbsp;&nbsp;2017-03-18</span>
                <span class="article-author"><i class="fa fa-user"></i>&nbsp;&nbsp;Absolutely</span>
                <span><i class="fa fa-tag"></i>&nbsp;&nbsp;<a href="#">Web前端</a></span>
                <span class="article-viewinfo"><i class="fa fa-eye"></i>&nbsp;0</span>
                <span class="article-viewinfo"><i class="fa fa-commenting"></i>&nbsp;4</span>
            </div>
        </div> -->
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
    }
</script>

