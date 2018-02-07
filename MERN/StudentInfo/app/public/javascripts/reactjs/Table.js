import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Edit from './Edit';

/**
 * @description Th
 * @param {Object} props { value: ... } 
 */
function Th (props) {
  return <th scope="col">{props.value}</th>;
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
 * Tbody组件
 */
class Tbody extends React.Component {
  constructor(props) {
    super(props);

    this.state = { id: 0 }

    this.clickEditButton = this.clickEditButton.bind(this);
  }

  // 点击后获取触发编辑的记录id
  clickEditButton(event) {
    this.setState({ id: event.target.value });
  }

  render() {
    return(
      <tbody>
        {this.props.datas.map((value) => 

          <tr key={value.id}>
            {Object.keys(value).map((key) => 
              <Td key={key} value={value[key]}/>
            )}
            <td>
              <button type="button" 
                    className="btn btn-secondary btn-sm" 
                    data-toggle="modal" 
                    data-target="#exampleModalCenter2"
                    value={value.id}
                    onClick={this.clickEditButton} >
                编辑
              </button>
            </td>
            <td>
              <a href={'/' + value.id + '/del'} className="btn btn-info btn-sm" role="button">删除</a>
            </td>
          </tr> 

        )}
        <Edit data={this.state.id}/>
      </tbody>
    );
  }
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
          id: 0,
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
      if (req.results.length != 0) {
        _this.setState(req);
      }
    });
  }

  /**
   * 组件返回
   */
  render() {
    console.log(this.state.results);
    return (
      <table className="table table-hover table-striped table-sm table-bordered text-center">
        <Thead datas={this.state.results}/>
        <Tbody datas={this.state.results}/>
      </table>
    );
  }
}

export default Table;