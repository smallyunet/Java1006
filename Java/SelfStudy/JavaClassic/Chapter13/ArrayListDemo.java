
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * 加载驱动程序
 */
class ArrayListDemo01 {
    public static void main(String[] args) {
        List<String> allList = null;    // 定义List对象
        Collection<String> allCollection = null;    // 定义Collection对象

        allList = new ArrayList<String>();  // 实例化List对象
        allCollection = new ArrayList<String>();    // 实例化Collection对象

        allList.add("Hello");   // 从Collection继承的方法
        allList.add(0, "World");    // List扩充的方法

        System.out.println(allList);

        allCollection.add("smallyu");
        allCollection.add("www.abc.com");
        
        allList.addAll(allCollection);  // 增加一组对象
        allList.addAll(0, allCollection);

        System.out.println(allList);
    }
}