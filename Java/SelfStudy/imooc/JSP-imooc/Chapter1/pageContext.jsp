<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>page内置对象</h1>
	用户名是：<%=pageContext.getSession().getAttribute("username") %><br>
	<%
		// 跳转到注册页面,地址栏地址不会变化
		// pageContext.forward("reg.jsp");
		pageContext.include("pageContext_include.jsp");
	%>
</body>
</html>