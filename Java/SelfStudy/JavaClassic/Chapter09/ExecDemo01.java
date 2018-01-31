/**
 * 继承Thread只需再设置休眠时间
 */
class MyThread extends Thread {
    private int time;
    public MyThread(String name, int time) {
        super(name);
        this.time = time;
    }
    public void run() {     // 覆写run方法
        try {
            Thread.sleep(this.time);    // 指定休眠时间
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName() + "线程，休眠" + this.time + "毫秒。");
    }
}

public class ExecDemo01 {
    public static void main(String[] args) {
        MyThread mt1 = new MyThread("线程A", 10000);
        MyThread mt2 = new MyThread("线程A", 20000);
        MyThread mt3 = new MyThread("线程A", 30000);

        mt1.start();    // 启动线程
        mt2.start();
        mt3.start();
    }
}