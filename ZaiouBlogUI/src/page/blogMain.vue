<template>
    <!-- 主页主体内容 -->
    <div class="blog-container">
        <div class="blog-main">
            <homeTips></homeTips>
            <homeLeft></homeLeft>
            <homeRight></homeRight>
        </div>
    </div>
</template>

<script>
    import homeTips from '@/components/blog_main/homeTips.vue';
    import homeLeft from '@/components/blog_main/homeLeft.vue';
    import homeRight from '@/components/blog_main/homeRight.vue';

    export default {
        components:{
            homeTips,
            homeLeft,
            homeRight
        }
    }
</script>

