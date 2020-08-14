import {MAPINFO} from 'store/types.js'
import mapRequest from 'network/map'

class MapUtil {
  static getInstance(){
    if(!this.instance){
        this.instance=new MapUtil();
      }
      return this.instance;
  };
  constructor(){
    this.instance=null;
  };


  downloadMapRequest(){
    return new Promise((resolve, reject) => {
      mapRequest.downloadMap().then(res => {
        if (res.status === 200) {
          console.log(res);
          resolve(res);
        }
      }).catch((error) => {
        console.log(error)
        reject(error)
      })
    })
  }

  loadMapInfo(commit,map_info){
    commit(MAPINFO,map_info);
  }
}
const mapUtil=MapUtil.getInstance();
export default mapUtil;
