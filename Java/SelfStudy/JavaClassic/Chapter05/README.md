## 构造方法

必须注意的是，只要是类，就必须存在构造方法。如果没有明确声明，程序在编译时会直接生成一个无参数的、什么都不做的构造方法：

```
class Person {
    public Person() {}
}
```

## String的内容比较

String的内容无法使用“==”来比较，因为“==”会直接比较String内容的地址值，而不是地址中的内容。

比较String的内容，可以使用equals方法：`str1.equals(str2)`

### 字符串的内容不可改变

这是一个比较重要的特性。

```
String str = "hello";
str = str + "world!";
```

以上代码会输出`hello world！`没有问题，但事实上在内存中，Java程序开辟了三块内存来做这件事情。第一块内存为`hello`，第二块内存为`world`，第三块内存为`hello world`。

因此，要尽量避免在开发中使用这样的程序：

```
String str = "smallyu";
for(int i = 0; i < 100; i++) {
    str += i;
}
```

这样的程序性能是比较低的，要解决这个问题，可以使用StringBuffer类完成。

### length和length()区别

对于数组，经常使用length来获取其长度，而length()是一个方法，常用于获取字符串的长度。

## 关于引用传递

一般对象的调用是引用传递，有函数调用改变对象的属性时，对象的的属性会被永久改变。

注意String类型的对象，因为字符串的内容一旦声明是不可改变的，改变的只是其内存地址的指向，所以如果直接改变String类型的变量，会开辟两块内存空间。

对于String类型的变量，如果是作为对象的一个属性作为变量，则可以被正常修改。


## 案例代码

- ConsDemo.java （构造方法示例）
- StringAPIDemo.java （String对象常用方法）
- RefDemo.java （对象的引用传递）
- RefDemo05.java （对象的一对一关系）

129页5.8.4