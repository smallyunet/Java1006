<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>setProperty</h1>
	<hr>
	<jsp:useBean id="myUsers" class="com.po.Users" scope="session"/>
	<!-- 根据表单自动匹配所有属性 -->
	<%-- 
		<jsp:setProperty property="*" name="myUsers"/>
	--%>
	<!-- 根据表单自动匹配部分属性 -->
	
		<jsp:setProperty property="username" name="myUsers"/>
	
	<!-- 手工设置属性，和表单无关 -->
	<%--
		<jsp:setProperty property="username" name="myUsers" value="aaa"/>
		<jsp:setProperty property="password" name="myUsers" value="bbb"/>
	--%>
	<!-- 接受参数，可以是url中的值 -->
	<%--
		<jsp:setProperty property="password" name="myUsers" param="mypass"/>
	--%>
	<%--
		用户名：<%=myUsers.getUsername() %><br>
		密码：<%=myUsers.getPassword() %><br>
	--%>
	<!-- 使用传统的方式来获取用户名和密码 -->
	用户名：<jsp:getProperty name="myUsers" property="username"/><br>
	密码：<jsp:getProperty name="myUsers" property="password"/><br>
	<a href="testScope.jsp">测试javabean的四个作用域范围</a>
</body>
</html>