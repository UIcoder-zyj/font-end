import {USERINFO} from 'store/types.js'
class UserUtil {
  static getInstance(){
    if(!this.instance){
        this.instance=new UserUtil();
      }
      return this.instance;
  };
  constructor(){
  };
  loadUserInfo(commit,user_state){
    if(user_state.code===100){
      // console.log('user_state is:',user_state.user_info)
      commit(USERINFO,user_state.user_info);
    }
  }
}
const userUtil=UserUtil.getInstance();
export default userUtil;
