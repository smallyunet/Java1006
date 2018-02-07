<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isErrorPage="true"%>
<!-- 要处理异常信息，需要设置isErrorPage属性为true -->

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>处理异常</h1>
	<hr>
	异常消息是：<%=exception.getMessage() %><br>
	异常描述：<%=exception.toString() %>
</body>
</html>