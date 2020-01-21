const prefix = 'https://api.h5game.g.mi.com/stat';

const exportUrl = {
  HOME: '/game/home', // 获取首页信息
  USER_INFO: '/user/getBaseUserInfo', // 获取用户信息
};

Object.keys(exportUrl).forEach(item => {
  exportUrl[item] = prefix + exportUrl[item];
});

export default exportUrl;
