import Vue from 'vue' //默认引入的就是runtime-only版本的，不带解析器
// import Vue from 'vue/dist/vue.esm'
import App from './App.vue'

Vue.config.productionTip = false

// /* eslint-disable no-unused-vars */
// // 局部禁用当前这个类型的错误(只禁用当前这个文件的类型错误)

/* new Vue({
    el:'#app',
    components:{
        App
    },
    template:'<App/>'
})
 */

//  You are using the runtime-only build of Vue where the template compiler is not available. 
// Either pre-compile the templates into render functions, or use the compiler-included build.
// 我们现在默认导入的是runtime-only版本的vue，这个版本的vue不带解析器


// 为什么使用render函数，就可以使用runtime-only版本的vue
new Vue({
    el:'#app',
    render:h => h(App) //这个函数和上面我们自己写的功能差不多
                        // 1.定义并注册App
                        // 2.使用了App组件
                        // 3.比上面的写法多干了一件事，就是自动寻找解析器的loader
})

/* 
    以后我们要使用的是下面这种
    下面的这个打包体积小
*/