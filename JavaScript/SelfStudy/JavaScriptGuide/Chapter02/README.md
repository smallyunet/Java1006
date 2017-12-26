## 字符集

JavaScript程序是用Unicode字符集编写的，Unicode是ASCII和atin-1的超集，并支持地球上几乎所有在用的语言。

## 关于分号

JavaScript同样使用分号";"将语句分割开，如果语句各自独占一行，则可以省略语句之间的分号。

```
// 第一个分号是可以省略掉的
a = 3;
b = 4;

// 这样格式书写，第一个分号不能省略
a = 3; b = 4;
```

需要注意的地方是，JavaScript并不是在所有换行处都填补分号，而是尽可能地将JavaScript满足正确解析的要求，如：

```
var a
a
=
b
console.log(a)
```

JavaScript将其解析为：

    var a; a = 3; console.log(a);

这样的分割规则有时也会导致一些意想不到的情形：

```
var y = x + f
(a + b).toString()
```

JavaScript会将其解析为：

    var y = x + f(a + b).toString();

第二行的圆括号作为f的函数调用解析了。

另外需要注意的是return、break和continue之后的表达式不能随意换行，遇到"++"或"--"运算符时也不可以。
