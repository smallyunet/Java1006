/**
 * 声明一个构造方法，并通过构造方法为属性赋值
 */
class Person {

	private String name;
	private int age;

	public Person(String name, int age) {	// 声明构造方法
		System.out.println("一个新的Person对象产生");
		this.setName(name);
		this.setAge(age);
	}

	public void tell() {	// 取得信息的方法
		System.out.println("姓名：" + getName() + "，年龄：" + getAge());
	}

	public String getName() {	// 取得姓名
		return name;
	}

	public void setName(String n) {	// 设置姓名
		name = n;
	}

	public int getAge() {	// 取得年龄
		return age;
	}

	public void setAge(int a) {	// 设置年龄
		age = a;
	}
}

public class ConsDemo01 {
	public static void main(String args[]) {
		System.out.println("声明对象：Person per = null;");
		Person per = null;		// 声明对象时不调用构造方法
		System.out.println("实例化对象：per = new Person();");
		per = new Person("smallyu", 30);		// 实例化对象时调用构造方法		
		per.tell();		// 输出信息
	}
}