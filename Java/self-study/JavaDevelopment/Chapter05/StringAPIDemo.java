/**
 * 字符串与字符数组的转换
 * 字符串可以使用toCharArray()方法变成一个字符数组，也可以使用String类的构造方法把一个字符数组变为一个字符串
 */
class StringAPIDemo01 {
	public static void main(String[] args) {
		String str1 = "hello";				// 定义字符串
		char c[] = str1.toCharArray();		// 将字符串变为字符数组
		for(int i = 0; i < c.length; i++) { // 循环输出
			System.out.print(c[i] + "\t");
		}
		System.out.println("");
		String str2 = new String(c);		// 将全部字符数组变为String
		String str3 = new String(c, 0, 3);  // 将部分字符数组变为String
		System.out.println(str2);
		System.out.println(str3);
	}
}

/**
 * 从字符串中取出指定位置的字符
 */
class StringAPIDemo02 {
	public static void main(String[] args) {
		String str1 = "hello";
		System.out.println(str1.charAt(3));		// 取出字符串中的第四个字符
	}
}

/**
 * 字符串和byte数组互转
 */
class StringAPIDemo03 {
	public static void main(String[] args) {
		String str1 = "hello";
		byte b[] = str1.getBytes();		// 将字符串变为byte数组
		System.out.println(new String(b));		// 将全部byte数组变为字符串
		System.out.println(new String(b, 1, 3));		// 将部分byte数组变为字符串
	}
}

/**
 * 取得一个字符串的长度
 */
class StringAPIDemo04 {
	public static void main(String[] args) {
		String str1 = "hello smallyu";
		System.out.println("\"" + str1 + "\" 的长度为：" + str1.length());
	}
}

/**
 * 查找一个指定的字符串是否存在
 */
class StringAPIDemo05 {
	public static void main(String[] args) {
		String str1 = "abcdefgh";
		System.out.println(str1.indexOf("c"));		// 查找位置
		System.out.println(str1.indexOf("c", 3));	// 查找位置，从第四个开始
		System.out.println(str1.indexOf("x"));		// 没有找到返回-1
	}
}

/**
 * 去掉左右空格
 */
class StringAPIDemo06 {
	public static void main(String[] args) {
		String str1 = "       hello          ";
		System.out.println(str1.trim());
	}
}

/**
 * 字符串截取
 */
class StringAPIDemo07 {
	public static void main(String[] args) {
		String str1 = "hello world";
		System.out.println(str1.substring(6));	 // 从第七个位置开始截取
		System.out.println(str1.substring(0, 5)); // 截取第0~5个位置的内容
	}
}

/**
 * 按照指定字符串拆分字符串
 */
class StringAPIDemo08 {
	public static void main(String[] args) {
		String str1 = "hello world";
		String s[] = str1.split(" ");	// 按空格进行字符串的截取
		for(int i = 0; i < s.length; i++) {
			System.out.println(s[i]);
		}
	}
}

/**
 * 字符串的大小写转换
 */
class StringAPIDemo09 {
	public static void main(String[] args) {
		System.out.println("将\"hello world\"转成大写：" + "hello world".toUpperCase());
		System.out.println("将\"HELLO WORLD\"转成小写：" + "HELLO WORLD".toLowerCase());
	}
}

/**
 * 判断是否以指定的字符串开始或结束
 */
class StringAPIDemo10 {
	public static void main(String[] args) {
		String str1 = "**HELLO";
		String str2 = "HELLO**";
		if(str1.startsWith("**")) {
			System.out.println("(**HELLO)以**开头");
		}
		if(str2.endsWith("**")) {
			System.out.println("(HELLO**)以**开头");
		}
	}
}

/**
 * 不区分大小写进行字符串比较
 */
class StringAPIDemo11 {
	public static void main(String[] args) {
		String str1 = "HELLO";
		String str2 = "hello";
		System.out.println("\"HELLO\" equals \"hello\"" + str1.equals(str2));
		System.out.println("\"HELLO\" equalsIgnoreCase \"hello\"" + str1.equalsIgnoreCase(str2));
	}
}

/**
 * 将一个指定的字符串替换成其他的字符串
 */
class StringAPIDemo12 {
	public static void main(String[] args) {
		String str = "hello";
		String newStr = str.replaceAll("l", "x");	// 将l替换成x
		System.out.println("替换之后的结果：" + newStr);
	}
}
