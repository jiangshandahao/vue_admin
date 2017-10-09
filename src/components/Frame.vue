<template>
  <div>
  	<el-row class = "topbar-wrap">
  		<el-col :span = "4">
  			<div class="topbar-title">
  				<span>后台管理系统</span>
  			</div>
  		</el-col>
  		<el-col :span = "20"  >
  			<el-menu theme="dark" default-active="1"  class = "topbar-menu" mode="horizontal" @select="handleSelect">
  				<el-submenu index="1">
  					<template slot="title">您好，{{sysUserName}}</template>
  					<el-menu-item index="2-1">
  						<router-link to = "/user/profile">个人信息</router-link>
  					</el-menu-item>
  					<el-menu-item index="2-2">
  						<router-link to="/user/changepwd">修改密码</router-link>
  					</el-menu-item>
  					<el-menu-item index="2-3" @click = "open2">
  						退出登录
  					</el-menu-item>
  				</el-submenu>
  			</el-menu>
  		</el-col>
  	 </el-row>
  	
  	<el-row class="main">
  	 	<el-col :span="leftCol">
  	 		<el-menu theme = "dark" default-active="1" class="aside-menu-vertical" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  	 			<el-menu-item  index = "0" class="menu-toggle"  @click= "handleFoldMenu">
  	 				<i class="el-icon-d-arrow-left" v-show="!isCollapse"></i>
  	 				<i class="el-icon-d-arrow-right" v-show="isCollapse"></i>
  	 				<span slot="title" v-show="isCollapse">展开</span>
  	 			</el-menu-item>
  	 			<el-menu-item  index = "1" @click="$router.push('/')">
  	 				<i class="el-icon-menu"></i>
  	 				<span slot="title" >首页</span>
  	 			</el-menu-item>
  	 		<template v-for="(item,i) in $router.options.routes" v-if="item.menuShow">
  	 			<el-submenu :index="i.toString()" >
  	 				<template slot="title">
  	 					<i  :class="item.iconCls"></i>
  	 					<span slot="title">{{item.name}}</span>
  	 				</template>
  	 				<el-menu-item @click="$router.push(term.path)" v-for="term in item.children" class = "aside-menu-item" :key="term.path" :index="term.path" v-if="term.menuShow">
  	 					{{term.name}}
  	 				</el-menu-item>
  	 			</el-submenu>
  	 		</template>
  	 			
  	 		</el-menu>
  	 	</el-col>
  		<el-col :span="rightCol" class = "content-container" >
        		<router-view></router-view>	
  		</el-col>
  	</el-row>
    
  </div>
</template>

<script>
import { bus } from '../bus.js'
export default {
	name:'frame',
	created(){
      bus.$on('setUserName', (text) => {
        this.sysUserName = text;
      })
    },
	data() {
      return {
      	sysUserName: '',
        isCollapse: false,
        leftCol: 4,
        rightCol:20
      };
    },
    mounted() {
      var user = sessionStorage.getItem('access-user');
      if (user) {
        user = JSON.parse(user);
        this.sysUserName = user.name || '';
      }
    },
    methods: {
    	  handleFoldMenu(){
    	  	this.isCollapse = !this.isCollapse;
    	  	if(this.isCollapse){
    	  		this.leftCol = 2;
    	  		this.rightCol = 22;
    	  	}else{
    	  		this.leftCol = 4;
    	  		this.rightCol = 20;
    	  	}
    	  },
      handleSelect(key, keyPath) {
      	//菜单激活回调	
      },
      handleOpen(key, keyPath) {
        //SubMenu 展开的回调
      },
      handleClose(key, keyPath) {
        //SubMenu 收起的回调
      },
      open2() {
      	var _this = this;
        this.$confirm('确认退出吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          _this.$router.push('/login');
        }).catch(() => {
//        this.$message({
//          type: 'info',
//          message: '已取消删除'
//        });          
        });
      }
    
    }
  
}
</script>
<style>
	.warp-main{ padding-top: 20px; }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.topbar-wrap {
      height: 60px;
      line-height: 60px;
      background: #373d41;
      color:white;
      padding: 0px;
    }
	.topbar-menu {
         height: 60px;
         background: #373d41;
         border-radius: 0px;
         float:right
     }
     
     .topbar-title{
     	text-align: center;
     }
     .menu-toggle {
      background: #4A5064;
      text-align: center;
      color: white;
      height: 30px;
      font-size: 14px;
      line-height: 30px;
    }
     .menu-toggle span{
      font-size: 12px;
    }
    .aside-menu-vertical{ 
     	min-height: 400px; 
     	height:100%;
     	border-radius: 0;
     	background: #373d41;
     }
     
    .aside-menu-item {
	    margin-left: 0px;
	    background: #373d41;
	    border-radius: 0;
	}
	.main {
      display: flex;
      position: absolute;
      width:100%;
      top: 60px;
      bottom: 0px;
      overflow: hidden;
    }
    .content-container{
    		background: #fff;
	    -webkit-box-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    overflow-y: auto;
	    padding: 10px;
    }
	

</style>
