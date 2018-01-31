<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>Hello, This is my first JSP page!</h1>
	<hr>
	<!--  一段客户端可见注释  -->
	<%--  一段客户端不可见注释  --%>
	<%!
		String s = "张三";
		int add(int x, int y)
		{
			return x + y;
		}
	%>
	<%
		// java脚本中使用脚本注释
		/*    多行注释 	*/
		out.println("大家好，欢迎大家学习JAVAEE开发");
	%>
	<br>
	你好，<%=s %><br>
	x + y =<%=add(10, 5) %>
</body>
</html>