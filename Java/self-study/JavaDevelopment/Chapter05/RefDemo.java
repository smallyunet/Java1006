/**
 * 引用传递范例一
 * 对象的属性被改变了
 */
class Demo01 {
	int temp = 30;
}
class RefDemo01 {
	public static void main(String[] args) {
		Demo01 d1 = new Demo01();
		d1.temp = 50;
		System.out.println("fun()方法调用之前：" + d1.temp);
		fun(d1);
		System.out.println("fun()方法调用之后：" + d1.temp);
	}
	public static void fun(Demo01 d2) {
		d2.temp = 1000;
	}
}

/**
 * 引用传递范例二
 * String类型的变量值没有被改变
 */
class RefDemo02 {
	public static void main(String[] args) {
		String str1 = "hello";
		System.out.println("fun()方法调用之前：" + str1);
		fun(str1);
		System.out.println("fun()方法调用之后：" + str1);
	}
	public static void fun(String str2) {
		str2 = "world";
	}
}

/**
 * 引用传递范例一
 * 对象的属性被改变了
 */
class Demo03 {
	String temp = "hello";
}
class RefDemo03 {
	public static void main(String[] args) {
		Demo03 d1 = new Demo03();
		d1.temp = "hello";
		System.out.println("fun()方法调用之前：" + d1.temp);
		fun(d1);
		System.out.println("fun()方法调用之后：" + d1.temp);
	}
	public static void fun(Demo03 d2) {
		d2.temp = "world";
	}
}