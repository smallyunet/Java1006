## Java程序的运行机制

Java程序的运行会经过两个过程，开发者编写.java文件，经过编译生成.class字节码文件，再由程序执行.class文件。

![getStart](./images/getStart.gif)

.java文件是有我们编写的源文件，.class文件是字节码文件，与设备无关，可以用记事本打开看到，储存的是十六进制的数据。.class文件是在JVM上运行的，Java VM是Java自带的虚拟机，与平台相关，负责将字节码文件翻译成对应平台可执行的机器码。

## Java程序的运行

```
javac [文件名]     编译.java文件为.class文件
java  [文件名]     执行Java程序
```

## classpath属性

`set classpath`命令指定Java类的执行路径，假设Hello.class类位于F:\test目录下，在D盘的命令行中执行指令：

```
set classpath=F:\test
```

然后继续在命令行中执行java Hello命令，理论上Java会无错误地执行。

因为classpath只在程序运行时起作用，并不能直接写到源程序中生效，所以也许classpath属性在开发中很少用到。