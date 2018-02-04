import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * @description 表格头部
 * @param {Object} props  { datas: [{}, {}, ... ] }
 * @returns {Component} 子组件
 */
function Thead (props) {
    return (
      <thead>
          <tr>
            {Object.keys(props.datas[0]).map((key) => 
              <th scope="col">{key}</th>
            )}
          </tr>
        </thead>
    );
}

/**
 * @description 表格主体
 * @param {Object} props { datas: [{}, {}, ... ] }
 * @returns {Component} 子组件
 */
function Tbody (props) {
  return (
    <tbody>
      {props.datas.map((value) => 
        <tr>
          {Object.keys(value).map((key) => 
            <td>{value[key]}</td>
          )}
        </tr>
      )}
    </tbody>
  );
}

/**
 * @description 表格
 * @returns {Component} 父组件
 */
class Table extends React.Component {
  constructor(props) {
    super(props);
    // 用state模拟数据
    this.state = {
      error: 0,
      status: "success",
      date: "2019.01.01",
      results: [
        {
          id: 1,
          school: "太原工业学院",
          class: "1520271",
          name: "smallyu",
          gender: "男",
          age: 21,
          tel: 12344448888,
          birthplace: 19960606
        },{
          id: 2,
          school: "太原工业学院",
          class: "1520272",
          name: "smallcc",
          gender: "女",
          age: 21,
          tel: 12344448888,
          birthplace: 19970606
        }
      ]
    };
  }

  // 组件返回
  render() {
    return (
      <table className="table table-hover">
        <Thead datas={this.state.results}/>
        <Tbody datas={this.state.results}/>
      </table>
    );
  }
}

// 渲染
ReactDOM.render(
  <Table />,
  document.getElementById('table')
);