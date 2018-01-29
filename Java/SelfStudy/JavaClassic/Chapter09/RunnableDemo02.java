/**
 * 实现runnable类可以实现资源共享
 */
class MyThread implements Runnable {
	private int ticket = 5;
	public void run() {
		for(int i=0;i<100;i++){
			if(ticket>0){
				System.out.println("卖票：ticket = " + ticket--);
			}
		}
	}
}

/**
 * 卖票
 */
public class RunnableDemo02 {
	public static void main(String[] args) {
		MyThread my = new MyThread();
		// 启动三个进程
		new Thread(my).start();
		new Thread(my).start();
		new Thread(my).start();
	}
}