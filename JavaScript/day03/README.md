
#### 回顾

js中的变量类型有三种：

1. 基础数据类型，包括数值型、布尔型、字符串型

2. 特殊数据类型，包括undefined和null

3. 复合数据类型，包括数组、函数、对象

#### 对象

定义类/对象有三种方式：

1. ES5中对象是一个函数，可以直接使用函数定义，使用new关键字实例化对象

2. 也可以new Object()来定义，这样定义会忽略类的初始化操作

3. 常用的{}形式也是用来定义类的

#### 内置对象

定义字符串有两种方式，`var str1 = new String('123')`或者`var str2 = '123'`。分别console.log()这两个变量，会发现它们是不一样的，部分区别在于开辟内存空间的不同，前者为堆，后者为栈。

内置对象拥有很多内置的方法，可以直接使用。

```
String
  .substr()
  .substring()
  .replace()
  .match()
  .split()

Math
  .PI
  .random()
  .floor()
  .cell()
  .round()

Date
  .getFullYear()
  .getMonth()
  .getDate()
  .getHours()
  .getMinutes()
  .getSeconds()
```

instanceof 用于判断复合变量的类型，包括数组、函数、对象

#### 事件

事件是HTML DOM的对象之一

#### document对象

```
document
  .getElementById()
    .innerHTML
    .value
  .getElementsByTagName()
  .getElementsByName()
```

要注意文档流的加载顺序，先dom节点后script。
