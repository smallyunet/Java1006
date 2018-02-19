
## 回调

回调指将一个函数作为参数传递给另一个函数。例如在执行段落隐藏之后要执行一个函数去做一些事情：

```
$('p').hide('slow', function() {
    alert('The paragraph is now hidden');
});
```

slow参数指定段落缓慢隐藏，其后的参数是回调。不过回调是可选的，如果不需要回调，可以直接：

    $('p').hide('slow');

回调函数的调用发生在远程服务器发回响应之后而不是之前(why?)。由于访问网络，服务器的响应时间是不可预测的，Node.js正是对这一问题的响应，也是Node.js实现网络编程的关键方法。

## 案例代码

- index01.html （事件触发后不使用回调）
- index02.html （事件触发后使用回调）
- app01.js （定义带有回调函数参数的函数）
- app02.js （体验用回调实现的异步网络I/O）
- app03.js （同步代码，演示会被阻塞的请求）
- app04.js （异步代码，演示不会被阻塞的请求）