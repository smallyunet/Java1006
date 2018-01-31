/**
 * 卖5张票，如果不使用同步，可能会出现票数为负的情况
 */
 class MyThread implements Runnable {
     private int ticket = 5;
     public void run() {
         for (int i=0; i<100;i++) {
             synchronized (this) {  // 同步代码块
                 if (ticket>0) {
                     try {
                         Thread.sleep(3000);
                     } catch (InterruptedException e) {
                         e.printStackTrace();
                     }
                     System.out.println("卖票：ticket = " + ticket--);
                 }
             }
         }
     }
 }

 public class SyncDemo02 {
     public static void main(String[] args) {
         MyThread mt = new MyThread();
         Thread t1 = new Thread(mt);
         Thread t2 = new Thread(mt);
         Thread t3 = new Thread(mt);
         t1.start();
         t2.start();
         t3.start();
     }
 }