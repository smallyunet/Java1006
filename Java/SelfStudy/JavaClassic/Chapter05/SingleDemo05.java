
class Singleton {
    // 在内部产生本类的实例化对象，将属性封装
    private static Singleton instance = new Singleton();
    private Singleton() { }     // 构造方法私有
    public static Singleton getInstance() {  // 取得实例化对象
        return instance;
    }
    public void print() {
        System.out.println("Hello World!!!");
    }
}

public class SingleDemo05 {
    public static void main(String args[]) {
        Singleton s1 = Singleton.getInstance();
        Singleton s2 = Singleton.getInstance();
        Singleton s3 = Singleton.getInstance();

        s1.print();
        s2.print();
        s3.print();
    }
}