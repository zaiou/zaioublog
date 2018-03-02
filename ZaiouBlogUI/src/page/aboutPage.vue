<template>
    <div class="blog-body">
        <div class="blog-container">
            <blogCrumbs></blogCrumbs>
            <div class="blog-main">
                <div class="layui-tab layui-tab-brief shadow" lay-filter="tabAbout">
                    <aboutNav></aboutNav>
                    <aboutMain></aboutMain>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import blogCrumbs from '@/components/blogCrumbs.vue';
    import aboutNav from '@/components/blog_about/aboutNav.vue';
    import aboutMain from '@/components/blog_about/aboutMain.vue';
    export default {
        components:{
            blogCrumbs,
            aboutNav,
            aboutMain
        }
    }
</script>

<style scoped>
    .layui-tab-brief {
        background: #fff;
        min-height: 100vh;
    }
</style>


