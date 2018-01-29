/**
 * 实现runnable接口启动多线程
 */
class MyThread implements Runnable {
	private String name;
	public MyThread(String name) {
		this.name = name;
	}
	public void run () {
		for (int i = 0; i < 10; i++) {
			System.out.println(name + "运行, i = " + i);			
		}
	}
}

/**
 * 使用Thread类启动多线程
 * 启动线程始终都需要使用Thread类
 */
class RunnableDemo01 {
	public static void main(String args[]) {
		MyThread my1 = new MyThread("线程A");
		MyThread my2 = new MyThread("线程B");
		Thread t1 = new Thread(my1);
		Thread t2 = new Thread(my2);
		t1.start();
		t2.start();
	}
}