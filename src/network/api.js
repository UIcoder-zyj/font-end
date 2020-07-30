import axios from 'axios'
import router from '../router'

const baseURL=process.env.NODE_ENV === 'production' ?'http://sayhub.me/api' : 'http://localhost:7001';
const timeout=5000;

export default class API{
  static getInstance(){
    if(!this.apiInstance){
        this.apiInstance=new API();
      }
      return this.apiInstance;
  }

  constructor(){
    this.instance =axios.create({
      baseURL,
      timeout
    });
    this.apiInstance=null;
  }

  request(config){
    this.interceptRequest(config);
    this.interceptResponse(config);
   return this.instance(config);
  }

  interceptRequest(config){
    return this.instance.interceptors.request.use(config=>{
     return config;
    },err=>{
     console.log(err);
    })
  }

  interceptResponse(config){
    return  this.instance.interceptors.response.use(res=>{
      return res;
    },error=>{
      console.log('response error is :',error)
      if (error.response) {
        console.log(error.response);
        switch (error.response.status) {
          case 401:
            router.replace({
              path: 'login',
            })
        }
      }
      return Promise.reject(error.response)
    })
  }

  post(url,data={}){
     const config={
       url,
       method: 'post',
       data: data
     }
     return this.request(config);
  };

  get(url,data={}){
    const config={
      url,
      method: 'get',
      params: data
    }
    return request(config);
 };

};



