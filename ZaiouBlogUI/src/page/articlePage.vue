<template>
    <!-- 文章部分 -->
    <div class="blog-body">
         <div class="blog-container">
            <articleCrumbs></articleCrumbs>
             <div class="blog-main">
                <articleLeft></articleLeft>
                <articleRight></articleRight>
                <div class="clear"></div> 
             </div>
        </div>
    </div>
</template>

<script>
    import articleCrumbs from '@/components/blog_article/articleCrumbs.vue';
    import articleLeft from '@/components/blog_article/articleLeft.vue';
    import articleRight from '@/components/blog_article/articleRight.vue';

    export default {
        components:{
            articleCrumbs,
            articleLeft,
            articleRight
        }
    }
</script>

