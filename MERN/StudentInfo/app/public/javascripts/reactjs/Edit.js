import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import $ from 'jquery';


/**
 * Edit模块
 */
class Edit extends React.Component {

    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendEditPost = this.sendEditPost.bind(this);

        this.state = {
            id: "##",
            school: "##",
            class: "##",
            name: "##",
            gender: "##",
            age: "##",
            tel: "##",
            birthplace: "##"
        };
    }

    // 属性更新时立即执行，接收参数
    componentWillReceiveProps(nextProps) {
        let _this = this;
        $.getJSON('/' + nextProps.data + '/getOne', function(data) {
          _this.setState(data[0]);
        });
    }

    // 获取表单数据
    handleInputChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    // 发送新增请求，并关闭modal
    sendEditPost() {
        let _this = this;
        $.post('/' + this.state.id + '/edit', this.state, function(req) {
            location.reload();
        }, 'json');
    }

    render () {
        return (
            <div className="modal fade" id="exampleModalCenter2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">编辑信息</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    
                        <form>

                            <div className="form-group row">
                                <label htmlFor="btn-school" className="col-sm-2 col-form-label">学校</label>
                                <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="btn-school" 
                                    placeholder="太原工业学院" 
                                    name="school" 
                                    value={this.state.school} 
                                    onChange={this.handleInputChange} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="btn-class" className="col-sm-2 col-form-label">班级</label>
                                <div className="col-sm-10">
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="btn-class" 
                                    name="class"
                                    placeholder="152027100" 
                                    value={this.state.class} 
                                    onChange={this.handleInputChange} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="btn-name" className="col-sm-2 col-form-label">姓名</label>
                                <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="btn-name" 
                                    name="name"
                                    placeholder="smallyu" 
                                    value={this.state.name} 
                                    onChange={this.handleInputChange} />
                                </div>
                            </div>

                            <fieldset className="form-group">
                                <div className="row">
                                <legend className="col-form-label col-sm-2 pt-0">性别</legend>
                                    <div className="col-sm-10 text-left pl-3">
                                        <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name="gender" 
                                                id="inlineRadio1" 
                                                value="male"
                                                onChange={this.handleInputChange} />
                                            <label className="form-check-label" htmlFor="inlineRadio1">男</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name="gender" 
                                                id="inlineRadio2" 
                                                value="female"
                                                onChange={this.handleInputChange} />
                                            <label className="form-check-label" htmlFor="inlineRadio2">女</label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <div className="form-group row">
                                <label htmlFor="btn-age" className="col-sm-2 col-form-label">年龄</label>
                                <div className="col-sm-10">
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="btn-age" 
                                    name="age"
                                    placeholder="22" 
                                    value={this.state.age} 
                                    onChange={this.handleInputChange} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="btn-tel" className="col-sm-2 col-form-label">电话</label>
                                <div className="col-sm-10">
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="btn-tel" 
                                    name="tel"
                                    placeholder="166 6666 6666" 
                                    value={this.state.tel} 
                                    onChange={this.handleInputChange} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="btn-birthplace" className="col-sm-2 col-form-label">籍贯</label>
                                <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="btn-birthplace" 
                                    placeholder="山西省太原市" 
                                    name="birthplace"
                                    value={this.state.birthplace} 
                                    onChange={this.handleInputChange} />
                                </div>
                            </div>
                            
                        </form>

                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">取消</button>
                    <button type="button" className="btn btn-primary" onClick={this.sendEditPost}>确认</button>
                    </div>
                </div>
                </div>
            </div>
            
        );
    }
}

export default Edit;