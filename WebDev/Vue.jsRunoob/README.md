
> Vue.js菜鸟教程阅读笔记

## 模板语法

### 插值

- 数据绑定常见的形式是使用双括号{{ message }}

- 使用v-html指令用于输出html代码

- html属性的值使用vbind指令

- Vue.js支持完整的js表达式

### 指令

- 指令是带有v-前缀的特殊属性，指令用于在表达式的值改变时，将行为应用到DOM上

- 参数在指令后用冒号指明，所有属性都要用v-bind指令

- v-on指令可以监听事件，如v-on:click=""

- 修饰符用于特殊方式的绑定，像v-on:submit.prevent=""，阻止了默认行为

- v——model可用于输入框数据的双向绑定

### 过滤器

- 过滤器使用管道符，常用于格式化文本

- 过滤器可以串联

- 过滤器是js函数，可以接受参数

### 缩写

Vue.js为两个最常用的指令提供了缩写：

```
<a v-bind:href="url"></a>

<a :href="url"></a>
```

```
<a v-on:click="doSomething"></a>

<a @click="doSomething"></a>
```

### 构造器

Vue.js应用都是创建实例来启动的，每个Vue实例都会代理其data对象的所有属性

Vue也提供了一些特殊的方法，使用前缀$：

```
var data = { a: 1 }
var vm = new Vue({
    el: '#example',
    data: data
});

vm.$data === data // true
vm.$el === document.getElementById('example) // true
// $watch是一个特殊的方法
vm.$watch('a', unction (newVal, oldVal) {
    // 回调函数将在vm.a的值改变后调用
});
```

## 条件判断

Vue支持if、if-else、if-else-if语句

使用runoob上模板语法的案例会**报错**

## 循环语句

Vue支持遍历和迭代

## 计算属性

计算属性相当于一种函数，就可用函数定义实现。有区别。

## 组件

同样有prop属性，也可为prop验证值类型