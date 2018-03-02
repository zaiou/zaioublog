<template>
    <div class="blog-body">
        <banner></banner>
        <blogMain></blogMain>
        <div class="clear"></div>
    </div>
</template>

<script>
    import banner from '@/components/banner.vue';
    import blogMain from '@/page/blogMain.vue';

    export default {
        components:{
            banner,
            blogMain
        }
    }
</script>

