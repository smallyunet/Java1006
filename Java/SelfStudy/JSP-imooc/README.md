
## 简介

慕课网[JAVA遇见HTML——JSP篇](https://www.imooc.com/learn/166)课程笔记。

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


### 案例代码

- index.jsp （在HTML中使用JSP脚本）
- execrice.jsp （JSP脚本的调用形式）
- out.jsp （out内置对象）
- reg.jsp （带有表单的注册页面，提交到request.jsp）
- request.jsp （request内置对象）