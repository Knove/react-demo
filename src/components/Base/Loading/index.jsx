import React, { useState } from 'react';
import { Spin } from 'antd';

import './index.less';

export default function Loading(props) {
  return (
    <>
      <Spin />
    </>
  );
}
