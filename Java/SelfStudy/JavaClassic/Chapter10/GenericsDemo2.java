
// 使用泛型定义Point
class Point<T> {
    private T var;
    public T getVar() {
        return var;
    }
    public void serVar(T var) {
        this.var = var;
    }
}

// 使用Point类将var的类型设置成整数
class GenericsDemo05 {
    public static void main(String[] args) {
        // 外部指定了泛型类的数据类型
        Point<Integer> p = new Point<Integer>();

        p.serVar(30);
        System.out.println(p.getVar() * 2);
    } 
}

// 转变成String
class GenericsDemo06 {
    public static void main(String[] args) {
        Point<String> p = new Point<String>();

        p.serVar("中国");
        System.out.println(p.getVar().length());
    }
}