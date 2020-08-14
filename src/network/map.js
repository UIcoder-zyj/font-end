import api from "./api";
import  apiConfig from './apiConfig.js'

class MapRequestHandler {
  static getInstance(){
    if(!this.instance){
        this.instance=new MapRequestHandler();
      }
      return this.instance;
  }
  constructor(){
    this.instance=null;
  }

  downloadMap(){
    let {url,method}=apiConfig.download_map;
    return api.request({
      url,
      method,
    })
  }

}

const mapRequest=MapRequestHandler.getInstance();
export default mapRequest;
