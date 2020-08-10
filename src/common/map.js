import {MAPINFO} from 'store/types.js'
class MapUtil {
  static getInstance(){
    if(!this.instance){
        this.instance=new MapUtil();
      }
      return this.instance;
  };
  constructor(){
  };
  loadMapInfo(commit,map_state){
    if(map_state.code!==301){
      // console.log('map_state is:',map_state.map_info)
      commit(MAPINFO,map_state.map_info);
    }
  }
}
const mapUtil=MapUtil.getInstance();
export default mapUtil;
