
// 防止脚本在初始化从stdin的读取时退出
// 如果没有这句，脚本会完成，进程结束
process.stdin.resume();

// node接收到SIGINT信号会调用回调函数退出进程
// SINGINT是中断信号，Ctrl + C就会向node进程发出一个SIGINT信号
process.on('SIGINT', function() {
	console.log('Got a SIGINT. Exiting');
	process.exit(0);
});

// SIGINT信号常用于在进程退出前做点什么，如关闭链接、写入日志