import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Table from './Table';
import Add from './Add';

/**
 * Body组件，主体
 */
class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Table />
        <Add />
      </div>
    );
  }
}

// 渲染
ReactDOM.render(
  <Body />,
  document.getElementById('container')
);