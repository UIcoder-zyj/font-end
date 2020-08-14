import api from "./api";
import  apiConfig from './apiConfig.js'
class CommonRequestHandler {
  static getInstance(){
    if(!this.instance){
        this.instance=new CommonRequestHandler();
      }
      return this.instance;
  }
  constructor(){
    this.instance=null;
  }

  getData(){
    let {url,method}=apiConfig.getData;
    return api.request({
      url,
      method,
    })
  }
}

const commonRequest=CommonRequestHandler.getInstance();
export default commonRequest;
