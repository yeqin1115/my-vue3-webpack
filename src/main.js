//引入createApp工厂函数 createApp函数 比vue构造函数更轻量
import { createApp } from 'vue'
import App from './App.vue'

//传入app组件,调用createApp,创建vue实例,
// 调用vue方法mount,将vue实例挂在到id名是app的dom元素上
// createApp(App).mount('#app')
const app=createApp(App);
// console.log(app);
app.mount('#app');
