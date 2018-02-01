
## 简介

慕课网 [JAVA遇见HTML——JSP篇](https://www.imooc.com/learn/166) 课程笔记。

## JSP内置对象

JSP内置对象是Web容器创建的一组对象，不需要使用new关键字，如：

``` java
int[] value = {60, 70, 80, 90};
for (int i:value) {
    out.println(i);
}
```

#### Web程序的请求相应模式
- 用户发送请求（request）  
- 服务器给用户相应（response）

#### 什么是缓冲区
缓冲区：Buffer，所谓缓冲区就是内存的一块区域用来保存临时数据

### out对象
out对象是JspWrite类的示例，是向客户端输出内容常用的对象
常用方法:  
1. void println()
2. void clear()
3. void clearBuffer
4. void flush()
5. int getBufferSize()
6. int getRemaining()
7. boolean isAutoFlush()
8. void close()

### request对象

用来接收客户端请求的对象

### response对象

response对象包含了相应客户请求的有关信息，在JSP中很少直接使用。

#### 请求重定向与请求转发
- 请求重定向：客户端行为，相当于两次请求，前一次的请求内容不会保存，地址栏的URL会改变
- 请求转发：服务器行为，相当于一次请求，前一次的请求内容会被保存，地址栏的URL地址不会改变

### session对象

session对象在第一个JSP页面被装在时自动创建

#### 什么是session

session表示客户端与服务器的一次对话

#### session的生命周期

- 创建：当客户端第一次访问页面的时候  
- 活动：所有活动页面全部关闭之前  
- 销毁
    - 调用session.invalidate()方法
    - Session过期
    - 服务器重启

### application对象

application对象实现了用户数据的共享，可存放全局变量  
application开始于服务器的启动，终止于服务器的关闭

### page对象

page对象就是指当前JSP页面本身

### pageContext对象

pageContext对象提供了对JSP页面内所有对象及名字空间的访问

### Config对象

config对象是在一个servlet初始化时，JSP引擎传递信息用的，相当于配置文件

### Exception对象

exception对象就是一个异常对象

### 案例代码 

> ./Chapter1/

- index.jsp （在HTML中使用JSP脚本）
- execrice.jsp （JSP脚本的调用形式）
- out.jsp （out内置对象）
- reg.jsp （带有表单的注册页面，提交到request.jsp）
- request.jsp （request内置对象）
- response.jsp （response内置对象）
- session_page1.jsp （session内置对象，页面1）
- session_page2.jsp （用于测试session对象生命周期）
- page.jsp （page内置对象）
- pageContext.jsp （pageContent.jsp内置对象）
- exception_test.jsp （用于抛出异常的测试页面）
- exception.jsp （exception内置对象，处理异常信息）

## Javabean

### Javabean简介

Javabean是符合某种特定规范的Java类

### Javabean设计原则

- 共有类
- 无参的共有构造方法
- 属性私有
- getter和setter方法

### 什么是JSP动作

JSP动作元素为请求处理阶段提供信息

