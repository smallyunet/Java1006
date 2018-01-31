/**
 * 和继承Thread相比，使用Runnable接口需要单独定义一个name属性保存名称
 */
class MyThread implements Runnable {
    private String name;
    private int time;
    public MyThread(String name, int time) {
        this.name = name;
        this.time = time;
    }
    public void run() {
        try {
            Thread.sleep(this.time);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(this.name + "线程，休眠" + this.time + "毫秒");
    }
}

public class ExecDemo02 {
    public static void main(String[] args) {
        MyThread mt1 = new MyThread("线程A", 1000);
        MyThread mt2 = new MyThread("线程A", 2000);
        MyThread mt3 = new MyThread("线程A", 3000);

        new Thread(mt1).start();
        new Thread(mt2).start();
        new Thread(mt3).start();
    }
}