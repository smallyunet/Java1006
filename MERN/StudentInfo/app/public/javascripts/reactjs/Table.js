import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

/**
 * @description Th
 * @param {Object} props { value: ... } 
 */
function Th (props) {
  return <th scope="col">{props.value}</th>;
}

/**
 * @description Tr
 * @param {Object} props { key: value }
 */
function Tr (props) {
  return (
    <tr>
      {Object.keys(props.value).map((key) => 
        <Td key={key} value={props.value[key]}/>
      )}
      <td>
      <a href={'/' + props.value.id + '/edit'} className="btn btn-secondary btn-sm" role="button">编辑</a>
      </td>
      <td>
        <a href={'/' + props.value.id + '/del'} className="btn btn-info btn-sm" role="button">删除</a>
      </td>
    </tr>
  );
}

/**
 * @description Td
 * @param {Object} props { value: ... } 
 */
function Td (props) {
  return <td>{props.value}</td>
}

/**
 * @description 表格头部
 * @param {Object} props  { datas: [{}, {}, ... ] }
 * @returns {Component} 子组件
 */
function Thead (props) {
    return (
      <thead className="thead-dark">
          <tr>
            {Object.keys(props.datas[0]).map((key) => 
              <Th key={key} value={key}/>
            )}
            <th scope="col">编辑</th>
            <th scope="col">删除</th>
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
        <Tr key={value.id} value={value} />
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

    // 默认state，接口没有正常返回数据时显示
    this.state = {
      error: 0,
      status: "success",
      date: "2019.01.01",
      results: [
        {
          id: "##",
          school: "##",
          class: "##",
          name: "##",
          gender: "##",
          age: "##",
          tel: "##",
          birthplace: "##"
        }
      ]
    };
  }

  // 构造函数，从接口获取值
  componentDidMount() {
    let _this = this;
    $.getJSON('/getAll', function(req) {
      _this.setState(req);
    });
  }

  /**
   * 组件返回
   */
  render() {
    return (
      <table className="table table-hover table-striped table-sm table-bordered text-center">
        <Thead datas={this.state.results}/>
        <Tbody datas={this.state.results}/>
      </table>
    );
  }
}

export default Table;