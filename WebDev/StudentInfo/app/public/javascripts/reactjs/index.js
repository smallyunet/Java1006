import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

import Table from './Table';
import EditModalBody from './EditModalBody';
import AddModalBody from './AddModalBody';

import loading from '../../images/loading.gif';
import style from '../../stylesheets/style.css';

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
      birthplace: '',
      nowPage:1,
      pagesLis: [],
      lastPage: 1
    };

    this.refreshAll = this.refreshAll.bind(this);
  }

  // 构造函数，从接口获取值，初始化
  componentWillMount() {
    this.refreshAll();

    $('#loading').hide();
  }
  
  /**
   * 刷新所有数据
   */
  refreshAll (pages, limit) {

    $('#loading').show();

    let _this = this;

    // 得到总条数信息
    $.get('/getAllCount', function(count) {
      let lis = [];
      let allPages = Math.ceil(count/10);
      // 为分页li做准备
      for (var i = 1; i <= allPages; i++) {
          lis.push(i);
      }
      // 保存状态
      _this.setState({
          pagesLis: lis,
          lastPage: allPages
      });
    });

    // ****************************

    // 如果页数参数为空
    if (!pages) {
      // 如果目前没有位于第一页。则保留当前页数
      if (this.state.nowPage != 1) {
          pages = this.state.nowPage;
      } else {
        // 否则回到首页
        pages = 1
      }
    } // 否则使用参数
    if (!limit) limit = 10;
    
    // 保存当前页数
    this.setState({ nowPage: pages });

    // 得到数据
    $.getJSON('/getAll?pages=' + pages + '&limit=' + limit, function(req) {
      if (req.results.length != 0) {
        _this.setState(req);

        $('#loading').hide();
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

  // 返回
  render() {
    return (
      <div>
        <Table 
          datas={this.state} 
          clickEditButton={this.clickEditButton.bind(this)}
          refreshAll={this.refreshAll} />
        
        <EditModalBody datas={this.state} refreshAll={this.refreshAll} />

        <AddModalBody refreshAll={this.refreshAll}
                    pagesLis={this.state.pagesLis}
                    lastPage={this.state.lastPage}
                    nowPage={this.state.nowPage} />

        <div id="loading"><img src={loading} alt="loading.gif"/></div>

      </div>
    );
  }
}


// 渲染 
ReactDOM.render(
  <Body />,
  document.getElementById('container')
);