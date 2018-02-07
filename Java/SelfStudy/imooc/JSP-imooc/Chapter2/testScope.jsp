<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="com.po.Users" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>javabean的四个作用域范围</h1>
	<hr>
	<jsp:useBean id="myUsers" class="com.po.Users" scope="session"/>
	用户名：<jsp:getProperty name="myUsers" property="username"/><br>
	密码：<jsp:getProperty name="myUsers" property="password"/>
	<!-- 使用内置对象获取 -->
	<hr>
	用户名：<%=((Users)application.getAttribute("myUsers")).getUsername() %><br>
	密码：<%=((Users)application.getAttribute("myUsers")).getPassword() %>
</body>
</html>