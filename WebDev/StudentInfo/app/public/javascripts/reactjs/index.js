import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

import Table from './Table';
import EditModalBody from './EditModalBody';
import AddModalBody from './AddModalBody';


/**
 * Body父组件
 */
class Body extends React.Component {

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
      ],
      id: 0,
      school: '',
      class: '',
      name: '',
      gender: '',
      age: '',
      tel: '',
      birthplace: ''
    };

    this.refreshAll = this.refreshAll.bind(this);
  }

  // 构造函数，从接口获取值，初始化
  componentDidMount() {
    this.refreshAll();
  }
  
  /**
   * 刷新所有数据
   */
  refreshAll () {
    let _this = this;
    $.getJSON('/getAll', function(req) {
      if (req.results.length != 0) {
        _this.setState(req);
      }
    });
  }

  // 编辑按钮点击，点击后获取触发编辑的记录id
  clickEditButton(event) {
    let _this = this;
    $.getJSON('/' + event.target.value + '/getOne', function(req) {
      if (req.length != 0) {
        _this.setState(req[0]);
      }
    });
    this.setState({ id: event.target.value });
  }

  // 获取表单数据，非受控组件
  handleInputChange(event) {
    this.setState({
        [event.target.name] : event.target.value
    });
  }

  // 发送新增请求，并关闭modal
  sendEditPost() {
    let _this = this;
    $.post('/' + this.state.id + '/edit', this.state, function(req) {
        _this.refreshAll();
        $('#exampleModalCenter2').modal('hide');
    }, 'json');
  }

  // 返回
  render() {
    return (
      <div>
        <Table 
          datas={this.state} 
          clickEditButton={this.clickEditButton.bind(this)}
          refreshAll={this.refreshAll} />
        
        <EditModalBody 
          datas={this.state} 
          handleInputChange={this.handleInputChange.bind(this)} 
          sendEditPost={this.sendEditPost.bind(this)} />

        <AddModalBody refreshAll={this.refreshAll} />
      </div>
    );
  }
}


// 渲染 
ReactDOM.render(
  <Body />,
  document.getElementById('container')
);