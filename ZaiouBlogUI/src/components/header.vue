<template>
    <!-- 导航 -->
    <nav class="blog-nav layui-header">
        <div class="blog-container">
            <!-- QQ互联登陆 -->
            <a href="javascript:;" class="blog-user">
                <i class="fa fa-qq"></i>
            </a>
            <a href="javascript:;" class="blog-user layui-hide">
                <img src="../assets/images/Absolutely.jpg" alt="Absolutely" title="Absolutely" />
            </a>
            <!-- 不落阁 -->
            <a class="blog-logo" href="home.html">zaiou</a>
            <!-- 导航菜单 -->
            <ul class="layui-nav" lay-filter="nav" >
                <li v-for="item in menuItems" :key="item.id" :class="{'layui-this':(item.id==activeMenu)}" @click="()=>{menuSelect(item)}" class="layui-nav-item">
                    <a href="#"><i class="fa fa-home fa-fw"></i>&nbsp;{{item.lebal}}</a>
                </li>
            </ul>
            <!-- 手机和平板的导航开关 -->
            <a class="blog-navicon" href="javascript:;" @click="()=>{navSwitch()}">
                <i class="fa fa-navicon"></i>
            </a>
        </div>
    </nav>
</template>

<script>
    import router from '@/router/index.js';

    // 菜单导航栏
    const navigation =  [{
        lebal: "网站首页",
        id: 1,
        path: "/"
    }, {
        lebal: "文章专栏",
        id: 2,
        path: "/articlePage"
    },{
        lebal: "资源分享",
        id: 3,
        path: "/resourcePage"
    },{
        lebal: "点点滴滴",
        id: 4,
        path: "/timelinePage"
    },{
        lebal: "关于本站",
        id: 5,
        path: "/aboutPage"
    }];


    export default {
        data(){
            return {
                activeMenu:1
            }
        },
        computed:{
            //菜单导航栏item
            menuItems:function(){
                return navigation;
            }
        },
        methods:{
            // 菜单选择
            menuSelect(item){
                this.activeMenu = item.id;
                router.push({
                    path: item.path
                });
            },
            //手机和平板的导航开关
            navSwitch:function(){
                let sear = new RegExp('layui-hide');
                if (sear.test($('.blog-nav-left').attr('class'))) {
                    this.leftIn();
                } else {
                    this.leftOut();
                }
            },
            // 手机和平板的导航显示
            leftIn:function(){
                $('.blog-mask').unbind('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
                $('.blog-nav-left').unbind('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');

                $('.blog-mask').removeClass('maskOut');
                $('.blog-mask').addClass('maskIn');
                $('.blog-mask').removeClass('layui-hide');
                $('.blog-mask').addClass('layui-show');

                $('.blog-nav-left').removeClass('leftOut');
                $('.blog-nav-left').addClass('leftIn');
                $('.blog-nav-left').removeClass('layui-hide');
                $('.blog-nav-left').addClass('layui-show');
            },
            // 手机和平板的导航隐藏
            leftOut:function(){
                $('.blog-mask').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $('.blog-mask').addClass('layui-hide');
                });
                $('.blog-nav-left').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $('.blog-nav-left').addClass('layui-hide');
                });

                $('.blog-mask').removeClass('maskIn');
                $('.blog-mask').addClass('maskOut');
                $('.blog-mask').removeClass('layui-show');

                $('.blog-nav-left').removeClass('leftIn');
                $('.blog-nav-left').addClass('leftOut');
                $('.blog-nav-left').removeClass('layui-show');
            }
        }
    }
</script>

<style scoped>
    
</style>


