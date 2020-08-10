import api from "./api";
import  apiConfig from './apiConfig.js'

export default class UserRequestHandler {
  constructor(){
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

