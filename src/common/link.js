
import userUtil  from './user.js'
import mapUtil  from './map.js'
import ugvUtil  from './ugv.js'

const links=new Map();
links.set('/api/map/download',mapUtil.downloadMapRequest);

export default links;
