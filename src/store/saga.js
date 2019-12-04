import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import constants from './constants';
import URL from '../config/config';
import util from '../utils'

/**
 * @description 获取首页游戏列表
 * @param {*} action
 */
function* getInfo(action) {
  try {
    const res = yield axios.get(URL.HOME, {
      params: {
        requestInterest: 'xiaoAi'
      }
    });
    const { code, data, msg } = res.data;
    if (code === 200) {
      const list = data.blocks[0].list;
      
      const gameList = list.filter(item => item.bindGameInfo).map(item => {
        const { bindGameInfo, picture } = item;
        bindGameInfo.bgBanner = picture
        return bindGameInfo
      })
      gameList.forEach(item => {
        item.iconLink = `//t1.g.mi.com/thumbnail/webp/w120/${item.sIcon}`
        item.bgLink = `//t1.g.mi.com/thumbnail/webp/w700/${item.bgBanner}`
      })
      yield put({ type: constants.MERGE_DATA, payload: { gameList } });
    } else {
      console.error('获取首页游戏列表失败', msg);
    }
  } catch (e) {
    console.error('获取首页游戏列表失败', e);
  }
}

/**
 * @description 获取用户信息
 * @param {*} action
 */
function* getUserInfo(action) {
  // 获取登录信息
  const serviceToken = util.getCookie('serviceToken');
  const uuid = util.getCookie('uuid');
  if (!serviceToken || !uuid) {
    return;
  }
  try {
    const res = yield axios.get(URL.USER_INFO, {
      params: { serviceToken }
    });
    const { code, data, msg } = res.data;
    if (code === 200) {
      const { userInfo, isBin } = data;
      userInfo.isBin = isBin;
      yield put({ type: constants.MERGE_DATA, payload: { userInfo } });
    } else {
      console.error('获取用户信息', msg);
    }
  } catch (e) {
    console.error('获取用户信息', e);
  }
}

export default function* sagas() {
  yield takeEvery(constants.GET_INFO, getInfo);
  yield takeEvery(constants.GET_USER_INFO, getUserInfo);
}
