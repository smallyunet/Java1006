<%@ page language="java" import="java.util.*,java.io.*" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	response.setContentType("text/html;charset=utf-8");

	out.println("<h1>response内置对象</h1>");
	out.println("<hr>");
	// out.flush();  清空缓冲区，刷出内容，否则outer对象打印的内容会出现在前面
	
	PrintWriter outer = response.getWriter();  // 获得输出流对象
	outer.println("大家好，我是response对象生成的输出流outer对象");
	
	// response.sendRedirect("reg.jsp");  请求重定向
	
%>