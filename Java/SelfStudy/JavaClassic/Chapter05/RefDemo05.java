/**
 * 范例——一对一冠关系
 * 人的类中有属性表示书，书的类中有属性表示人
 */

class Person {
	private String name;
	private int age;
	private Book book;
	public Person(String name, int age) {
		this.setName(name);
		this.setAge(age);
	}
	public String getName() {
		return name;
	}
	public void setName(String n) {
		name = n;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int n) {
		age = n;
	}
	public Book getBook() {
		return book;
	}
	public void setBook(Book b) {
		book = b;
	}
}

class Book {
	private String title;
	private float price;
	private Person person;
	public Book(String title, float price) {
		this.setTitle(title);
		this.setPrice(price);
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String t) {
		title = t;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float p) {
		price = p;
	}
	public Person getPerson() {
		return person;
	}
	public void setPerson(Person person) {
		this.person = person;
	}
}

public class RefDemo05 {
	public static void main(String[] args) {
		Person per = new Person("smallyu", 30);
		Book bk = new Book("Java开发实战经典", 90.0f);
		per.setBook(bk);	// 设置两个对象间的关系，一个人有一本书
		bk.setPerson(per);	// 设置两个对象间的关系，一本书属于一个人
		System.out.println("从人找到书 -> 姓名: " + per.getName() 
			+ "; 年龄：" + per.getAge() 
			+ "；书名：" + per.getBook().getTitle() 
			+ "；价格：" + per.getBook().getPrice());
		System.out.println("从书找到人 -> 书名: " + per.getBook().getTitle()
			+ "；价格：" + per.getBook().getPrice()
			+ "；姓名：" + per.getName() 
			+ "；年龄：" +per.getAge());
	}
}