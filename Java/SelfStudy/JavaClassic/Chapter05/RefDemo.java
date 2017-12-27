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
 * 引用传递范例三
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

/**
 * 接受自己本类的对象
 */
class Demo04 {
	private int temp = 30;
	public void fun(Demo04 d2) {
		d2.temp = 50;
	}
	public int getTemp() {
		return temp;
	}
	public void setTemp(int t) {
		temp = t;
	}
}
class RefDemo04 {
	public static void main(String[] args) {
		Demo04 d1 = new Demo04();
		d1.setTemp(50);
		d1.fun(d1);		// 这里把Demo的对象穿回到了自己的类中
		System.out.println("temp = " + d1.getTemp());
	}
}