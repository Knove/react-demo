import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Hello from '@/components/Hello/index.jsx'

import constatns from '../../store/constants';
import utils from '@/utils.js';
import './index.less';

export default function Index() {
  const gameList = useSelector(state => state.gameList);
  const dispatch = useDispatch();

  // 获取列表
  const getList = useCallback(() => {
    dispatch({
      type: constatns.GET_INFO,
      action: {}
    });
  }, [dispatch]);


  useEffect(() => {
    getList();
  }, [getList]);


  return (
    <>
      <div className="main">
        {/* <Hello /> */}
        {utils.getText()}{gameList.length}
      </div>
    </>
  );
}
