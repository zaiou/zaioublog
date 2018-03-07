--------------------------------------------------------------------------------------------------------------
更新时间：2018-03-007
变更人：刘彬
变更内容：
* 1、完成基本架构
* 2、添加全局过滤器
    ~~~
        a) 添加filter文件 设置过滤器方法
        b) 在main.js中
            //引入全局过滤器
            import * as filters from './filter/index.js'  
            //注册全局过滤器
            Object.keys(filters).forEach(key => {  
            Vue.filter(key, filters[key])  
            })  
    ~~~