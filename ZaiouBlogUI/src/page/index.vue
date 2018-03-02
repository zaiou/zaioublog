<template>
  <div class="main">
        <!--顶部-->
        <zaiou-header></zaiou-header>
        <!--页面-->
        <router-view></router-view>
        <!--底部-->
        <zaiou-fotter></zaiou-fotter>

        <!-- 手机端侧边导航 -->
        <mobileHomeNavLeft></mobileHomeNavLeft>
        <!-- 手机端分享窗口 -->
        <mobileHomeShare></mobileHomeShare>
        <!--遮罩-->
        <div class="blog-mask animated layui-hide"></div>
  </div>
</template>

<script>
import zaiouHeader from '@/components/header.vue';
import zaiouFotter from '@/components/fotter.vue';
import mobileHomeNavLeft from '@/components/blog_main/mobileHomeNavLeft.vue';
import mobileHomeShare from '@/components/blog_main/mobileHomeShare.vue';

export default {
  components: { zaiouHeader, zaiouFotter,mobileHomeNavLeft,mobileHomeShare},
}
</script>
