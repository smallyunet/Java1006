import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Table from './Table';
import Add from './Add';

// 渲染
ReactDOM.render(
  <div>
    <Table />
    <Add />
  </div>,
  document.getElementById('container')
);