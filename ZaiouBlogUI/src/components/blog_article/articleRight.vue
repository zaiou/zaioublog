<template>
    <div class="blog-main-right">
        <div class="blog-search">
            <form class="layui-form" action="">
                <div class="layui-form-item">
                    <div class="search-keywords  shadow">
                        <input type="text" name="keywords" lay-verify="required" placeholder="输入关键词搜索" autocomplete="off" class="layui-input">
                    </div>
                    <div class="search-submit  shadow">
                        <a class="search-btn" lay-submit="formSearch" lay-filter="formSearch"><i class="fa fa-search"></i></a>
                    </div>
                </div>
            </form>
        </div>
        <div class="article-category shadow">
            <div class="article-category-title">分类导航</div>
            <a href="javascript:layer.msg(&#39;切换到相应分类&#39;)">ASP.NET MVC</a>
            <a href="javascript:layer.msg(&#39;切换到相应分类&#39;)">SQL Server</a>
            <a href="javascript:layer.msg(&#39;切换到相应分类&#39;)">Entity Framework</a>
            <a href="javascript:layer.msg(&#39;切换到相应分类&#39;)">Web前端</a>
            <a href="javascript:layer.msg(&#39;切换到相应分类&#39;)">C#基础</a>
            <a href="javascript:layer.msg(&#39;切换到相应分类&#39;)">杂文随笔</a>
            <div class="clear"></div>
        </div>
        <div class="blog-module shadow">
            <div class="blog-module-title">作者推荐</div>
            <ul class="fa-ul blog-module-ul">
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">Web安全之跨站请求伪造CSRF</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">ASP.NET MVC 防范跨站请求伪造（CSRF）</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">C#基础知识回顾-扩展方法</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">一步步制作时光轴（一）（HTML篇）</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">一步步制作时光轴（二）（CSS篇）</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">一步步制作时光轴（三）（JS篇）</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">写了个Win10风格快捷菜单！</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">ASP.NET MVC自定义错误页</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">ASP.NET MVC制作404跳转（非302和200）</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">基于laypage的layui扩展模块（pagesize.js）！</a></li>
            </ul>
        </div>
        <div class="blog-module shadow">
            <div class="blog-module-title">随便看看</div>
            <ul class="fa-ul blog-module-ul">
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">一步步制作时光轴（一）（HTML篇）</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">ASP.NET MVC制作404跳转（非302和200）</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">ASP.NET MVC 防范跨站请求伪造（CSRF）</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">一步步制作时光轴（三）（JS篇）</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">基于laypage的layui扩展模块（pagesize.js）！</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">一步步制作时光轴（二）（CSS篇）</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">写了个Win10风格快捷菜单！</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">常用正则表达式</a></li>
            </ul>
        </div>
        <!--右边悬浮 平板或手机设备显示-->
        <div class="category-toggle"><i class="fa fa-chevron-left"></i></div>
    </div>
</template>

<style scoped>
    .search-keywords,
    .search-submit {
        display: none;
    }

    @media (min-width: 992px) {
        .blog-search {
            margin-bottom: 15px;
        }

        .search-keywords,
        .search-submit {
            display: inline-block;
        }

        .search-keywords {
            width: 85%;
            float: left;
        }

        .search-keywords > input {
            border-radius: 0;
        }

        .search-submit {
            width: 14%;
            float: right;
        }

        .search-submit > .search-btn {
            display: block;
            width: 100%;
            height: 36px;
            background: #fff;
            cursor: pointer;
            float: right;
            border-radius: 1px;
            border: 1px solid #e2e2e2;
        }

        .search-submit > .search-btn:hover {
            border: 1px solid #d2d2d2;
        }

        .search-submit > .search-btn i {
            width: 13px;
            line-height: 38px;
            display: block;
            margin: 0 auto;
        }
    }

</style>

