import {UGVINFO} from 'store/types.js'
class UgvUtil {
  static getInstance(){
    if(!this.instance){
        this.instance=new UgvUtil();
      }
      return this.instance;
  };
  constructor(){
  };

  loadUgvInfo(commit,ugv_info){
    commit(UGVINFO,ugv_info);
  }
}
const ugvUtil=UgvUtil.getInstance();
export default ugvUtil;
