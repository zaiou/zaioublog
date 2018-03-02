import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('@/page/index')), 'home'); 
const IndexPage = r => require.ensure([], () => r(require('@/page/indexPage')), 'indexPage'); 
const ArticlePage = r => require.ensure([], () => r(require('@/page/articlePage')), 'articlePage'); 
const ResourcePage = r => require.ensure([], () => r(require('@/page/resourcePage')), 'resourcePage'); 
const TimelinePage = r => require.ensure([], () => r(require('@/page/timelinePage')), 'timelinePage'); 
const AboutPage = r => require.ensure([], () => r(require('@/page/aboutPage')), 'aboutPage'); 

Vue.use(Router)

let router=new Router({
  mode:'history', 
  routes:[{
    path:'/', 
    name:'home', 
    component:Home, 
    children:[{
        path:"", 
        name:"indexPage", 
        component:IndexPage, 
        meta: {
          title:'zaiou'
        }
    },{
      path:"articlePage", 
      name:"articlePage", 
      component:ArticlePage, 
    },{
      path:"resourcePage", 
      name:"resourcePage", 
      component:ResourcePage, 
    },{
      path:"timelinePage", 
      name:"timelinePage", 
      component:TimelinePage, 
    },{
      path:"aboutPage", 
      name:"aboutPage", 
      component:AboutPage, 
    }]
  }],
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {x:0, y:0 }
  }
})

export default router;
