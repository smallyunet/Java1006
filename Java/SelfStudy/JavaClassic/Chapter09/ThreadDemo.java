/**
 * 继承Thread类实现多进程
 */
class MyThread extends Thread {
	private String name;
	public MyThread(String name) {
		this.name = name;
	}
	public void run() {
		for (int i = 0; i < 10; i++) {
			System.out.println(name + "运行，i = " + i);
		}
	}
};

/**
 * 并没有真正启动线程
 */
class ThreadDemo01 {
	public static void main(String[] args) {
		MyThread mt1 = new MyThread("线程A");
		MyThread mt2 = new MyThread("线程B");
		mt1.run();
		mt2.run();
		// 此时mt1和mt2是顺序执行的，也就是说线程并没有正真启动
	}
};

/**
 * 使用run方法启动了线程
 */
class ThreadDemo02 {
	public static void main(String[] args) {
		MyThread mt1 = new MyThread("线程A");
		MyThread mt2 = new MyThread("线程B");
		// 启动线程只能使用start()方法而不是run()
		mt1.start();
		mt2.start();
	}
};

/**
 * 重复调用start()方法
 */
class ThreadDemo03 {
	public static void main(String args[]) {
		MyThread mt1 = new MyThread("线程A");
		mt1.start();
		mt1.start();	// 会报错
	} 
}