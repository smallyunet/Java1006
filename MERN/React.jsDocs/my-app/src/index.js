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
// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }
//
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//
//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// );

// 事件处理
// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { isToggle: true,
//                         name: 'Hello World!'
//                         };
//     }
//
//     handleClick(name, e) {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//         e.preventDefault();
//         alert(name);
//     }
//
//     render() {
//         return (
//             <button onClick={this.handleClick.bind(this, this.state.name)}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         );
//     }
//
// }
//
// ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
// );

// 条件渲染
// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }
//
// function GuestGreeting(props) {
//     return <h1>Please sign up</h1>;
// }
//
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }
//
// ReactDOM.render(
//     <Greeting isLoggedIn={false} />,
//     document.getElementById('root')
// );

// 列表 & Keys
// function ListItem(props) {
//     return <li>{props.value}</li>;
// }
//
// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         <ListItem key={number.toString()} value={number} />
//     );
//     return (
//         <ul>
//             {listItems}
//         </ul>
//     );
// }
//
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
// );

// 表单
// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.value);
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }
//
// ReactDOM.render(
//     <NameForm />,
//     document.getElementById('root')
// );

