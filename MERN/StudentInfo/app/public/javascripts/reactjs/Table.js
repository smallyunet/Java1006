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
      <thead>
          <tr>
            {Object.keys(props.datas[0]).map((key) => 
              <Th key={key} value={key}/>
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

  /**
   * 构造方法，从接口取得数据，设置状态
   */
  componentDidMount() {
    var _this = this;
    $.getJSON('/getAll', function(datas) {
      _this.setState(datas);
    });
  }

  /**
   * 析构方法，保留
   */
  componentWillUnmount() {}

  /**
   * 组件返回
   */
  render() {
    return (
      <table className="table table-hover">
        <Thead datas={this.state.results}/>
        <Tbody datas={this.state.results}/>
      </table>
    );
  }
}

export default Table;