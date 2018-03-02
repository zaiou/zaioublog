<template>
    <div class="blog-body">
        <div class="blog-container">
            <resourceCrumbs></resourceCrumbs>
            <div class="blog-main">
                <resourceNav></resourceNav>
                <resourceMain></resourceMain>
            </div>
        </div>
    </div>
</template>

<script>
    import resourceCrumbs from '@/components/blog_resource/resourceCrumbs.vue';
    import resourceNav from '@/components/blog_resource/resourceNav.vue';
    import resourceMain from '@/components/blog_resource/resourceMain.vue';

    export default {
        components:{
            resourceCrumbs,
            resourceNav,
            resourceMain
        }
    }
</script>

