import api from "./api";
import  apiConfig from './apiConfig.js'
class UserRequestHandler {
  static getInstance(){
    if(!this.instance){
        this.instance=new UserRequestHandler();
      }
      return this.instance;
  }
  constructor(){
    this.instance=null;
  }

  login({ loginUser, loginPassword }){
    let {url,method}=apiConfig.login;
    return api.request({
      url,
      method,
      data : {
        username: loginUser,
        password: loginPassword
      }
    })
  }

  register({ registerUser, registerPassword }){
    let {url,method}=apiConfig.register;
    return api.request({
      url,
      method,
      data : {
        username: registerUser,
        password: registerPassword
      }
    })
  }

  getUserInfo (){
    return api.get('/api/profile')
  }
}

const userRequest=UserRequestHandler.getInstance();
export default userRequest;
