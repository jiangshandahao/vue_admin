import Vue from 'vue'
import Router from 'vue-router'
import Frame from '@/components/Frame'
import Dashboard from '@/components/Dashboard'
import ArticleCategory from '@/components/article/ArticleCategory'
import ArticleList from '@/components/article/ArticleList'
import UserList from '@/components/user/UserList'
import UserProfile from '@/components/user/UserProfile'
import UserChangepwd from '@/components/user/UserChangepwd'

// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/components/Login'], resolve)

Vue.use(Router)

let router_admin = new Router({
  routes: [
  	{
  		path: '/login',
  		name: '登录',
  		component: Login
  	},
    {
      path: '/',
      name: '首页',
      component: Frame,
      redirect: '/dashboard', 
      children:[
      	{
      		path:'/dashboard',
      		component:Dashboard,
      		name: '工作台'
      	}
      ]
    },
    {
      path: '/',
      name: '用户管理',
      component: Frame,
      menuShow:true,
      iconCls: 'el-icon-edit',
      children:[
      	{
      		path:'/user/list',
      		component:UserList,
      		menuShow:true,
      		name: '用户列表'
      	},
      	{
      		path:'/user/profile',
      		component:UserProfile,
      		menuShow:false,
      		name: '个人信息'
      	},
      	{
      		path:'/user/changepwd',
      		component:UserChangepwd,
      		menuShow:false,
      		name: '修改密码'
      	}
      ]
    },
    {
      path: '/',
      name: '文章管理',
      menuShow:true,
      iconCls: 'el-icon-document',
      component: Frame,
      children:[
      	{
      		path:'/article/list',
      		component:ArticleList,
      		menuShow:true,
      		name: '文章列表'
      	},
      	{
      		path:'/article/category',
      		component:ArticleCategory,
      		menuShow:true,
      		name: '文章分类'
      	}
      ]
    }
  ]
});

router_admin.beforeEach((to, from, next) => {
  if (to.path.startsWith('/login')) {
    window.sessionStorage.removeItem('access-user')
    next()
  } else {
    let user = JSON.parse(window.sessionStorage.getItem('access-user'))
    if (!user) {
      next({path: '/login'})
    } else {
      next()
    }
  }
})

export default router_admin;
