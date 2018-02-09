/**
 * 1.字符串连接操作
 */

// 通过append链接各种类型的数据
class StringBufferDemo01 {
    public static void main(String[] args) {
        StringBuffer buf = new StringBuffer();
        buf.append("Hello ");   // StringBuffer只能使用append方法添加内容

        buf.append("World").append("!!!");  // 连续调用append()
        buf.append("\n");   // 使用转义字符
        buf.append("数字 = ").append(1).append("\n");  // 添加数字
        buf.append("字符 = ").append('C').append("\n");   // 添加字符
        buf.append("布尔 = ").append(true);   // 布尔类型
        System.out.println(buf);    // 内容输出
    }
}

// 验证StringBuffer的内容是可以修改的
class StringBufferDemo02 {
    public static void main(String[] args) {
        StringBuffer buf = new StringBuffer();
        buf.append("Hello ");
        fun(buf);       // 修改buf的值
        System.out.println(buf);
    }
    public static void fun(StringBuffer s) {
        s.append("MLDN ").append("LiXigHua");
    }
}


/**
 * 2.在任意位置处为StringBuffer添加内容
 */

// 在任意位置处为StringBuffer添加内容
class StringBufferDemo03 {
    public static void main(String[] args) {
        StringBuffer buf = new StringBuffer();
        buf.append("World!!");
        buf.insert(0, "Hello ");
        System.out.println(buf);
        buf.insert(buf.length(), "MLDN ~");
        System.out.println(buf);
    }
}

/**
 * 3.字符串反转操作
 */
class StringBufferDemo04 {
    public static void main(String[] args) {
        StringBuffer buf = new StringBuffer();
        buf.append("World!!");
        buf.insert(0, "Hello ");
        String str = buf.reverse().toString();
        System.out.println(str);
    }
}

/**
 * 4.替换指定范围内容
 */
class StringBufferDemo05 {
    public static void main(String[] args) {
        StringBuffer buf = new StringBuffer();
        buf.append("Hello ").append("World!!");
        buf.replace(6, 11, "LiXingHua");
        System.out.println(buf);
    }
}
// replaceAll()方法可以替换所有内容

/**
 * 5.字符串截取
 */
 class StringBufferDemo05 {
    public static void main(String[] args) {
        StringBuffer buf = new StringBuffer();
        buf.append("Hello ").append("World!!");
        buf.replace(6, 11, "LiXingHua");
        String str = buf.substring(6, 15);
        System.out.println(str);
    }
}

/**
 * 6.删除指定范围的字符串
 */
class StringBufferDemo06 {
    public static void main(String[] args) {
        StringBuffer buf = new StringBuffer();
        buf.append("Hello ").append("World!!");
        buf.replace(6, 11, "LiXingHua");
        String str = buf.delete(6, 15).toString();
        System.out.println(str);
    }
}

/**
 * 7.查找指定的内容是否存在
 */
class StringBufferDemo07 {
    public static void main(String[] args) {
        StringBuffer buf = new StringBuffer();
        buf.append("Hello ").append("World!!");
        if (buf.indexOf("Hello") == -1) {
            System.out.println("没有找到指定内容");
        } else {
            System.out.println("可以找到指定内容");
        }
    }
}

/**
 * 8. 关于String类时，有过这样的代码
 */
class StringBufferDemo08 {
    public static void main(String[] args) {
        String str1 = "smallyu";
        for (int i = 0; i < 100; i++) {
            str1 += i;      // 不断修改String的内存和引用，性能低
        }
        System.out.println(str1);
    }
}

/**
 * 9. 使用StringBuffer完成要求
 */
 class StringBufferDemo09 {
    public static void main(String[] args) {
        StringBuffer buf = new StringBuffer();
        buf.append("smallyu");
        for (int i = 0; i < 100; i++) {
            buf.append(i);      // 不断修改String的内存和引用，性能低
        }
        System.out.println(buf);
    }
}