
> React中文文档阅读笔记

## 基础使用

### 安装

这里选择React构建器来生成开发环境，使用命令：

``` javascript
npm install -g creat-react-app  // 安装npmbao
creat-react-app my-app          // 生成应用

cd my-app                       // 进入应用目录
npm start                       // 启动应用
```

来启动环境。

### Hello World

进入应用目录，修改src文件夹下的index.js文件，将原有的ReactDOM.render及其后的内容注释掉，改为：

``` javascript
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);
```

打开浏览器查看效果，会渲染出一个Hello,World!的标题。

### JSX

JSX相当于语法糖，可以在HTML标签中书写JavaScript代码。

修改index.js的内容，除保留import的所有内容外，改为：

``` javascript
// 声明格式化姓名的函数
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

// 定义常量对象
const user = {
    firstName: 'Small',
    lastName: 'Yu'
}

// 定义元素常量，其中调用了上面定义的函数
const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

// 调用元素常量，js代码会正常执行
ReactDOM.render(
    element,
    document.getElementById('root')
);
```

打开浏览器，可看到渲染出Hello, Small Yu的标题。

### 元素渲染

一个计时器的例子：

``` javascript
// 定义执行UI渲染的函数
function tick() {
  // 定义元素常量
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  // 执行渲染
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

// 每隔1秒渲染一次
setInterval(tick, 1000);
```

虽然代码重新渲染了整个UI，但事实上React只会更新发生变化的内容。

### 组件 & Props

这段代码定义了自定义组件Welcome：

``` javascript
// 定义组件
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
// 定义元素常量
const element = <Welcome name="smallyu" />;
// 渲染组件
ReactDOM.render(
    element,
    document.getElementById('root')
);
```

React会将JSX的属性以对单个对象的形式传递给组件，上面的代码将{ name: "smallyu" }传递给了Welcome组件，自定义组件使用的props参数便是从React接收到的对象。

注意调用自定义组件时**必须要写闭合标签。**

组件也可是组合使用：

``` javascript
// 定义Welcome组件
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
// App2组件重复使用了Welcome组件
function App2() {
    return (
        <div>
            <Welcome name="smallyu one" />
            <Welcome name="smallyu two" />
            <Welcome name="smallyu three" />
        </div>
    );
}
// 渲染App2组件
ReactDOM.render(
    <App2 />,
    document.getElementById('root')
);
```

注意组件**只能返回一个根元素**，所以必须要div将三个Welcome包含起来。

注意组件**必须像纯函数那样使用props**。

### State & 生命周期

使用下面的方式来重写上面计时器的例子：

``` javascript
// 声明一个自定义组件Clock
class Clock extends React.Component {

    // 调用构造方法，设置了属性state
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    // 构造方法之后元素渲染之前要执行的一个方法，可以理解为构造方法
    // 方法内设置了计时器
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // 元素渲染之后要执行的函数，相当于析构函数
    // 方法中清除了计时器
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // tick函数用于更新当前时间到state属性，內建方法
    tick() {
        this.setState({
            date: new Date()
        });
    }

    // 返回用于渲染的内容
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

// 渲染组件
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);
```

注意不可以直接给state属性赋值，React不会重载组件，要**调用SetState()方法**才行。

注意状态更新是**异步**的。

注意组件之间是相互**独立**的。

### 事件处理

下面代码使用了事件并向事件传递参数：

``` javascript
// 声明自定义组件
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggle: true,
                        name: 'Hello World!'
                        };
    }

    // 单击事件触发的函数，e要写在参数的后面
    handleClick(name, e) {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        e.preventDefault();
        alert(name);
    }

    render() {
        return (
            // 调用事件函数和传递参数都要使用.bind绑定
            <button onClick={this.handleClick.bind(this, this.state.name)}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }

}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);
```

React支持多种语法形式来调用事件和传递参数。

注意事件e要排在传递参数的**后面**。

### 条件渲染

使用if语句：

``` javascript
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

ReactDOM.render(
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
);
```

如果要阻止组件渲染，可以让render返回null。

### 列表 & Keys

使用map()打印列表：

``` javascript
function ListItem(props) {
    // 这里不需要指定key
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    // 在这里数组的上下文指定key值
    const listItems = numbers.map((number) =>
        <ListItem key={number.toString()} value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);
```

打印列表通常要为组件指定key值。

### 表单

表单处理用这样的方法：

``` javascript
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
    }

    render() {
        return (
            // 控制函数
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    // 获取表单值
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
);
```

与input类似的还有textarea和select。

### 状态提升

如果两个子组件需要共用某些数据，需要把这些数据提升到父组件的state上。

### 组合 vs 继承

React推荐大量使用组合而不是继承，可用预定义属性{props.children}或者其他自定义属性来实现各种组件的组合。


## 高级入门

### 关于JSX

JSX允许使用点表示法来引用组件：

``` javascript
import React from 'react';

const MyComponents = {
    DatePicker: function DatePicker(props) {
        return <div>Imagine a {props.color} datepicker here.</div>
    }
}

function BlueDatePicker() {
    return <MyComponents.DatePicker color="blue">;
}
```

JSX中，首字母大写表示自定义组件，小写字母开头表示内置的组件，如div。所有组件必须闭合。