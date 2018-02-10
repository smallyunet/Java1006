import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import $ from 'jquery';


class Pages extends React.Component {
    constructor (props) {
        super(props);

        this.state = { 
            pagesLis: props.pagesLis,
            lastPage: props.lastPage,
            nowPage: props.nowPage
        }

        this.changePages = this.changePages.bind(this);
    }

    // 接收到参数立即返回
    componentWillReceiveProps(nextProps) {
        this.setState({ 
            pagesLis: nextProps.pagesLis,
            lastPage: nextProps.lastPage,
            nowPage: nextProps.nowPage
        });
    }

    // 当分页链接被点击
    changePages(event) {
        this.props.refreshAll(event.target.name);
        event.preventDefault();
    }

    render() {
        return (<nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {this.state.pagesLis.map((i) => 
                            <li className={this.state.nowPage == i ? "page-item active" : "page-item"} key={i}><a className="page-link" name={i} onClick={this.changePages}>{i}</a></li>
                        )}
                    </ul>
                </nav>);
    }
}

export default Pages;