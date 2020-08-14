export default {

  getData:{
    url: '/api/common/get_data',
    method: 'post'
  },
  // 登录接口
  login: {
    url: '/api/user/login',
    method: 'post'
  },
  register: {
    url: '/api/user/register',
    method: 'post'
  },
  logout:{
    url: '/api/user/logout',
    method: 'post'
  },

  download_map:{
    url: '/api/map/download_map',
    method: 'post'
  }
}
