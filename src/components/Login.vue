<template>
  <div >
  	<el-form ref="AccountFrom" :model="account" :rules="rules" label-position="left" label-width="0px" class="login-container">
  		<h3 class="title">系统登录</h3>
  		<el-form-item prop="username">
  			<el-input type="text" v-model="account.username" auto-complete="off" placeholder="账号"></el-input>
  		</el-form-item>
  		<el-form-item prop="pwd">
  			<el-input type="password" v-model="account.pwd" auto-complete="off" placeholder="密码"></el-input>
  		</el-form-item>
  		<el-checkbox checked class="remember">记住密码</el-checkbox>
  		<el-form-item style="width:100%;">
  			<el-button type="primary" style="width:100%;" @click="handleLogin" :loading="logining">登录</el-button>
  		</el-form-item>
  	</el-form>
  </div>
</template>

<script>
export default {
 	data(){
 		return {
 			account: { 
 				username: 'admin', 
 				pwd: '123456' 
 			},
 			rules: {
	          username: [
	            {
	            		required: true, 
	            		message: '请输入账号', 
	            		trigger: 'blur'
	            }
	          ],
	          pwd: [
	            {
	            		required: true, 
	            		message: '请输入密码', 
	            		trigger: 'blur'
	            	}
	          ]
	        },
	        	checked: true,
 			logining: false
 		};
 	},
 	methods:{
 		handleLogin(){	
	      this.$refs.AccountFrom.validate((valid) => {
	          if (valid) {
	          	this.logining = true; 
	          	var loginParams = { 
	          		username: this.account.username,
	          		password: this.account.pwd 
	          	};
	          	var user = {
              		"id":1,
              		"username":"admin",
              		"email":"jerry9022@qq.com",
              		"name":"zhangstar"
              	};
	          	sessionStorage.setItem('access-user', JSON.stringify(user));
                this.$router.push({ path: '/' });
	          } else {
	          	console.log('error submit!!');
	            return false;
	          }
	      });
      },
 	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
.login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 160px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
   }
   
   .login-container .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
   .login-container .remember {
      margin: 0px 0px 35px 0px;
    }
</style>
