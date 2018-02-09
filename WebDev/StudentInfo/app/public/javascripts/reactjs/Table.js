import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import $ from 'jquery';


/**
 * Table表格，子组件
 */
class Table extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = props.datas;
      this.clickEditButton = props.clickEditButton;
  
      this.sendDeleteGet = this.sendDeleteGet.bind(this);

      this.wordsTransform = this.wordsTransform.bind(this);
    }
  
    // 立即刷新数据
    componentWillReceiveProps(nextProps) {
      this.setState(nextProps.datas);
    }
  
    // 发送删除请求，get
    sendDeleteGet (event) {
      let _this = this;
      $.getJSON(event.target.value, function(req) {
        _this.props.refreshAll();
      });
    }
  
    // 匹配输出表格头部的th文字
    wordsTransform (words) {
        console.log(words);
        switch (words) {
            case 'id':
                return '序号';
                break;
            case 'school':
                return '学校';
                break;
            case 'class':
                return '班级';
                break;
            case 'name':
                return '姓名';
                break;
            case 'gender':
                return '性别';
                break;
            case 'age':
                return '年龄';
                break;
            case 'tel':
                return '电话';
                break;
            case 'birthplace':
                return '籍贯';
                break;
            default: 
                return words;
        }
    }
  
    /**
     * 组件返回
     */
    render() {
      return (
        <table className="table table-hover table-striped table-sm table-bordered text-center">
  
          <thead className="thead-dark">
            <tr>
              {Object.keys(this.state.results[0]).map((key) => 
                <th scope="col" key={key}>{this.wordsTransform(key)}</th>
              )}
              <th scope="col">编辑</th>
              <th scope="col">删除</th>
            </tr>
          </thead>
  
          <tbody>
            {this.state.results.map((value) =>
              <tr key={value.id}>
                {Object.keys(value).map((key) => 
                  <td key={key}>{value[key]}</td>
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
                  <button type="button" 
                      className="btn btn-info btn-sm" 
                      value={'/' + value.id + '/del'}
                      onClick={this.sendDeleteGet} >
                    删除
                  </button>
                </td>
              </tr> 
            )}
          </tbody>
  
        </table>
      );
    }
}

export default Table;