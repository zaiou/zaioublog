<template>
    <div class="blog-body">
        <div class="blog-container">
            <blogCrumbs></blogCrumbs>
            <div class="blog-main">
                <timelineNav></timelineNav>
                <timelineMain></timelineMain>
            </div>
        </div>
    </div>
</template>

<script>
    import blogCrumbs from '@/components/blogCrumbs.vue';
    import timelineNav from '@/components/blog_timeline/timelineNav.vue';
    import timelineMain from '@/components/blog_timeline/timelineMain.vue';

    export default {
        components:{
             blogCrumbs,
            timelineNav,
            timelineMain
        }
    }
</script>

