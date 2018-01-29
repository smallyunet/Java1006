class MyThread implements Runnable {
	public void run() {
		for(int i=0;i<3;i++) {
			// 取得当前线程的名称
			System.out.println(Thread.currentThread().getName() + "运行， i = " + i);
		}
	}
}

public class ThreadNameDemo {
	public static void main(String[] args) {
		MyThread my = new MyThread();
		// 启动线程
		new Thread(my).start();
		// 手动设置线程名称
		new Thread(my, "线程-A").start();
		new Thread(my, "线程-B").start();
		new Thread(my).start();
		new Thread(my).start();
	}
}