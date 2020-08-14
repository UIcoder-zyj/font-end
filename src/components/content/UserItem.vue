<template>
  <el-row class="login-style">
    <h1>BMR 系统</h1>
    <el-input placeholder="用户名" v-model="username"></el-input>
    <el-input type="password" placeholder="密码" v-model="password"></el-input>
    <el-input type="password" placeholder="确认密码" v-if = "type === 'register'" v-model="re_password"></el-input>
    <el-button type="primary" v-if = "type === 'register'" @click="signup()">注册</el-button>
    <el-button type="primary" v-else @click="login()">登录</el-button>
    <router-link to="/login" v-show = "type === 'register'" tag="p">已有账号，去登录</router-link>
    <router-link to="/register" v-show = "type === 'login'" tag="p">没有账号，去注册</router-link>
  </el-row>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      re_password: '',
    }
  },
  props: {
    type: {
      type: String
    }
  },
  methods: {
    // 注册
    signup () {
      if (this.username === '') {
        this.$message.warning('用户名不能为空哦~~')
      } else if (this.password === '') {
        this.$message.warning('密码不能为空哦~~')
      }else if(this.password!==this.re_password){
        this.$message.warning('两次的密码不一致~~');
      }else{
         this.$store.dispatch('toRegister', {
          registerUser: this.username,
          registerPassword: this.password
        }).then((res) => {
          console.log(res);
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    // 登陆
    login () {
      if (this.username === '') {
        this.$message.warning('用户名不能为空哦~~')
      } else if (this.password === '') {
        this.$message.warning('密码不能为空哦~~')
      } else {
        this.$store.dispatch('toLogin', {
          loginUser: this.username,
          loginPassword: this.password
        }).then((res) => {
          this.$router.replace('/main');

        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style scoped>
.login-style {
  border: 1px solid #fff;
  text-align: center;
  padding: 20px;
  line-height: 50px;
  background: #fff;
  width: 300px;
  box-shadow: 0 1px 3px 0 rgba(0, 34, 77, 0.5);
}
p {
  font-size: 12px;
  cursor: pointer;
}
</style>
