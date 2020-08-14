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
  loadUserInfo(commit,user_info){
    console.log('user_state is:',user_info);
    sessionStorage.setItem('token',user_info.token);
    console.log('set token is :',sessionStorage.getItem('token'));
    commit(USERINFO,user_info);

  }
}
const userUtil=UserUtil.getInstance();
export default userUtil;
