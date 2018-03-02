<template>
    <!--右边小栏目-->
    <div class="blog-main-right">
        <div class="blogerinfo shadow">
            <div class="blogerinfo-figure">
                <img src="../../assets/images/Absolutely.jpg" alt="Absolutely" />
            </div>
            <p class="blogerinfo-nickname">Absolutely</p>
            <p class="blogerinfo-introduce">一枚90后程序员，.NET开发工程师</p>
            <p class="blogerinfo-location"><i class="fa fa-location-arrow"></i>&nbsp;四川 - 成都</p>
            <hr />
            <div class="blogerinfo-contact">
                <a target="_blank" title="QQ交流" href="javascript:layer.msg('启动QQ会话窗口')"><i class="fa fa-qq fa-2x"></i></a>
                <a target="_blank" title="给我写信" href="javascript:layer.msg('启动邮我窗口')"><i class="fa fa-envelope fa-2x"></i></a>
                <a target="_blank" title="新浪微博" href="javascript:layer.msg('转到你的微博主页')"><i class="fa fa-weibo fa-2x"></i></a>
                <a target="_blank" title="码云" href="javascript:layer.msg('转到你的github主页')"><i class="fa fa-git fa-2x"></i></a>
            </div>
        </div>
        <div></div><!--占位-->
        <div class="blog-module shadow">
            <div class="blog-module-title">热文排行</div>
            <ul class="fa-ul blog-module-ul">
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">Web安全之跨站请求伪造CSRF</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">ASP.NET MVC 防范跨站请求伪造（CSRF）</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">常用正则表达式</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">EF CodeFirst数据迁移常用指令</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">浅谈.NET Framework基元类型</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">C#基础知识回顾-扩展方法</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">一步步制作时光轴（一）（HTML篇）</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="detail.html">一步步制作时光轴（二）（CSS篇）</a></li>
            </ul>
        </div>
        <div class="blog-module shadow">
            <div class="blog-module-title">最近分享</div>
            <ul class="fa-ul blog-module-ul">
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="http://pan.baidu.com/s/1c1BJ6Qc" target="_blank">Canvas</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="http://pan.baidu.com/s/1kVK8UhT" target="_blank">pagesize.js</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="https://pan.baidu.com/s/1mit2aiW" target="_blank">时光轴</a></li>
                <li><i class="fa-li fa fa-hand-o-right"></i><a href="https://pan.baidu.com/s/1nuAKF81" target="_blank">图片轮播</a></li>
            </ul>
        </div>
        <div class="blog-module shadow">
            <div class="blog-module-title">一路走来</div>
            <dl class="footprint">
                <dt>2017年03月12日</dt>
                <dd>新增留言回复功能！人人都可参与回复！</dd>
                <dt>2017年03月10日</dt>
                <dd>不落阁2.0基本功能完成，正式上线！</dd>
                <dt>2017年03月09日</dt>
                <dd>新增文章搜索功能！</dd>
                <dt>2017年02月25日</dt>
                <dd>QQ互联接入网站，可QQ登陆发表评论与留言！</dd>
            </dl>
        </div>
        <div class="blog-module shadow">
            <div class="blog-module-title">后台记录</div>
            <dl class="footprint">
                <dt>2017年03月16日</dt>
                <dd>分页新增页容量控制</dd>
                <dt>2017年03月12日</dt>
                <dd>新增管家提醒功能</dd>
                <dt>2017年03月10日</dt>
                <dd>新增Win10快捷菜单</dd>
            </dl>
        </div>
        <div class="blog-module shadow">
            <div class="blog-module-title">友情链接</div>
            <ul class="blogroll">
                <li><a target="_blank" href="http://www.layui.com/" title="Layui">Layui</a></li>
                <li><a target="_blank" href="http://www.pagemark.cn/" title="页签">页签</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    /*博主信息*/
    .blogerinfo {
        text-align: center;
        padding: 0 15px;
        background: #fff;
        margin-bottom: 15px;
    }

    .blogerinfo-figure {
        display: inline-block;
        margin: 20px auto;
    }

        .blogerinfo-figure img {
            border-radius: 50px;
        }

    .blogerinfo-nickname {
        font-size: 32px;
        font-weight: bold;
        margin: 0 0 15px 0;
    }

    .blogerinfo-introduce {
        margin: 15px auto;
        font-size: 18px;
        width: 90%;
    }

    .blogerinfo-location {
        color: #808080;
        margin: 15px;
    }

    .blogerinfo-contact {
        padding: 15px;
        padding-top: 5px;
    }

        .blogerinfo-contact > a {
            padding: 0 10px;
        }
    /*博主信息END*/  

    /*友情链接 start*/
    .blogroll > li {
        display: inline-block;
        vertical-align: middle;
        padding: 2px 5px;
    }
    /*友情链接END*/

    /*一路走来和后台记录 start*/
    .footprint > dt {
        color: #01AAED;
    }

    .footprint > dd {
        text-indent: 1.3em;
        padding: 2px 0;
    }
    /*一路走来和后台记录END*/
</style>

