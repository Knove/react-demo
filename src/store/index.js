import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import saga from './saga';

const INITIAL_STATE = {
  userInfo: {}, // 用户信息
  gameList: [], // 游戏列表
};

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'MERGE_DATA':
      return { ...state, ...action.payload };
    case 'ADD_COURSE':
      return { ...state, data: [...state.data, action.title] };
    default:
      return state;
  }
}
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(courses, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export default store;
