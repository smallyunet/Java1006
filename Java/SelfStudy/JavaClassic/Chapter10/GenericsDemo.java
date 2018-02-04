/**
 * 要求设计一个可以表示坐标点的类，坐标由X和Y组成
 * 整数表示：x=10、y=20
 * 小数表示：x=10.5、y=20.6
 * 字符串表示：x="东京180度"、y="北纬210度"
 */

// 表示坐标点
class Point {
    private Object x;
    private Object y;

    public void setX(Object x) {
        this.x = x;
    }

    public void setY(Object y) {
        this.y = y;
    } 

    public Object getX() {
        return this.x;
    }

    public Object getY() {
        return this.y;
    }
}

// 整数表示
class GenericsDemo01 {
    public static void main(String[] args){
        Point p = new Point();
        p.setX(10);
        p.setY(20);

        int x = (Integer)p.getX();
        int y = (Integer)p.getY();

        System.out.println("整数表示，X坐标为：" + x);
        System.out.println("整数表示，Y坐标为：" + y);
    }
}

// 小数表示
class GenericsDemo02 {
    public static void main(String[] args) {
        Point p = new Point();
        p.setX(10.5f);
        p.setY(20.6f);

        float x = (Float)p.getX();
        float y = (Float)p.getY();

        System.out.println("小数表示，X坐标为：" + x);
        System.out.println("小数表示，Y坐标为：" + y);
    }
}

// 字符串表示
class GenericsDemo03 {
    public static void main(String[] args) {
        Point p = new Point();
        p.setX("东经180度");
        p.setY("北纬120度");

        String x = (String)p.getX();
        String y = (String)p.getY();

        System.out.println("字符串表示，X坐标为：" + x);
        System.out.println("字符串表示，Y坐标为：" + y);
    }
}