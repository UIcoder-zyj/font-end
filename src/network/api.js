import axios from 'axios'
import router from '../router'
import store from 'store/index'
const baseURL=process.env.NODE_ENV === 'production' ?'http://sayhub.me/api' : 'http://localhost:7001';
const timeout=5000;
class API{
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
      let token;
      if(store.state.user_info&&store.state.user_info.token){
        token=this.$store.user_info.token;
        config.headers.common['Authorization'] = token;
      }
     return config;
    },err=>{
     console.log(err);
    })
  }

  interceptResponse(config){
    return  this.instance.interceptors.response.use(res=>{
      console.log("res is:",res);
      return res;
    },error=>{
      console.log('response error is :',error)
      if (error.response) {
        console.log(error.response);
        switch (error.response.status) {
          case 501:
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
    return this.request(config);
 };
};
const api=API.getInstance();
export default api;





