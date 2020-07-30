import API from "./api";
import axios from 'axios'
import  api_config from './api_config.js'

const api=API.getInstance();
export default class UserRequestHandler {
  constructor(){
  }

  login({ loginUser, loginPassword }){
    let {url,method}=api_config.login;
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
    let {url,method}=api_config.register;
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

