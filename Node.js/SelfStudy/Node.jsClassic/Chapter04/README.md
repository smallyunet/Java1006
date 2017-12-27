
## 什么是回调

回调指将一个函数作为参数传递给另一个函数。例如在执行段落隐藏之后要执行一个函数去做一些事情：

```
$('p').hide('slow', function() {
    alert('The paragraph is now hidden');
});
```

slow参数指定段落缓慢隐藏，其后的参数是回调。不过回调是可选的，如果不需要回调，可以直接：

    $('p').hide('slow');

## 案例代码

- index01.html （不使用回调）
- index02.html （使用回调）


46 4.2