## 用public声明类

类可以直接使用关键字class声明，也可以在使用public class声明公共类：

```
class Demo{ ... }
public class Demo{ ... }
```

区别在于用public声明的类，文件名必须与该类名一致。

一个.java只能有一个公共类，但可以包含多个类。在编译后，每一个类都会分别生成对应其类名的.class文件，比如在一个Demo.java文件中，声明了三个类：
```
public class Demo{ ... }
class Demo2{ ... }
class Demo3{ ... }
```
执行`javac Demo.java`命令后，会生成三个文件Demo.class、Demo2.class、Demo3.class。

## 案例代码

- TestJava.java （基本输出）

- TestOther.java （类的声明）