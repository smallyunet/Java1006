import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 自动生成
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// JSX简介
// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }
//
// const user = {
//     firstName: 'Small',
//     lastName: 'Yu'
// }
//
// function getGreeting(user) {
//     if (user) {
//         return <h1>Hello, {formatName(user)}!</h1>;
//     } else {
//         return <h1>Hello, Stranger!</h1>;
//     }
// }
//
// const element = (
//     getGreeting(user)
// );
//
// ReactDOM.render(
//     // <h1>Hello, world!</h1>,
//     element,
//     document.getElementById('root')
// );

// 元素渲染
// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );
// }
//
// setInterval(tick, 1000);

// 组件 & props
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
//
// // const element = <Welcome name="smallyu" />;
//
// function App2() {
//     return (
//         <div>
//             <Welcome name="smallyu one" />
//             <Welcome name="smallyu two" />
//             <Welcome name="smallyu three" />
//         </div>
//     );
// }
//
// ReactDOM.render(
//     <App2 />,
//     document.getElementById('root')
// );

// state & 生命周期
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);
