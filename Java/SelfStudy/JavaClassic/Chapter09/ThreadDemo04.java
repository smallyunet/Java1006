/**
 * 继承Thread类不能资源共享
 */
class MyThread extends Thread {
	private int ticket = 5;
	public void run() {
		for(int i=0; i<100; i++) {
			if(ticket>0){
				System.out.println("卖票：ticket = " + ticket--);
			}
		}
	}
};

/**
 * 启动了三个进程，三个进程分别卖了各自的五张票
 */
public class ThreadDemo04 {
	public static void main(String args[]) {
		MyThread mt1 = new MyThread();
		MyThread mt2 = new MyThread();
		MyThread mt3 = new MyThread();
		mt1.start();
		mt2.start();
		mt3.start();
	}
}