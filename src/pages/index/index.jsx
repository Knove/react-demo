import React, { useEffect, useCallback } from 'react';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import constatns from '../../store/constants';
import utils from '@/utils';
import './index.less';

export default function Index() {
  const gameList = useSelector(state => state.gameList);
  const dispatch = useDispatch();
  const history = useHistory();
  // 获取列表
  const getList = useCallback(() => {
    dispatch({
      type: constatns.GET_INFO,
      action: {},
    });
  }, [dispatch]);

  const route = () => {
    history.push('/user');
  };
  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <>
      <div className="main">
        router To user Page
        <Button onClick={route}>go User Page</Button>
        <br />
        {utils.getText()}
        {gameList.length}
      </div>
    </>
  );
}
