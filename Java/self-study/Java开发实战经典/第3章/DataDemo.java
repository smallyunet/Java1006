/**	
 * 验证如果数据过长可能出现的问题
 */
/* class DataDemo01 {
	public static void main(String[] args) {
		int num = 9999999999999999999999999999;	// 定义整型变量，会出错，超出长度范围
	}
} */

/**
 * 将整型的最大值加1和加2
 */
class DataDemo02 {
	public static void main(String[] args) {
		int max = Integer.MAX_VALUE;
		System.out.println("整型的最大值：" + max);		// 输出最大值
		System.out.println("整型最大值 + 1：" + (max + 1)); // 最大值加1
		System.out.println("整型最大值 + 2：" + (max + 2)); // 最大值加2
	}
}

/**
 * 使用强制类型转换，防止数据溢出
 */
class DataDemo03 {
	public static void main(String[] args) {
		int max = Integer.MAX_VALUE;
		System.out.println("整型的最大值：" + max);		// 输出最大值
		System.out.println("整型最大值 + 1：" + (max + 1)); // 最大值加1
		System.out.println("整型最大值 + 2：" + (max + 2L)); // 最大值加2，变为long型
		System.out.println("整型最大值 + 2：" + ((long)max + 2)); // 强制转换为long型
	}
}

/**
 * 测试字符和整型之间的相互转换
 */
class DataDemo04 {
	public static void main(String[] args) {
		char ch1 = 'a';			// 定义字符
		char ch2 = 97;			// 定义字符，整型转字符
		System.out.println("ch1 = " + ch1);		// 打印输出
		System.out.println("ch2 = " + ch2);		// 打印输出
	}
}

/**
 * 转义字符的应用
 */
class DataDemo05 {
	public static void main(String[] args) {
		char ch1 = '\"';	// 定义转义字符
		char ch2 = '\\';	// 定义转义字符
		System.out.println("ch1 = " + ch1);		// 打印输出
		System.out.println("ch2 = " + ch2);		// 打印输出
		System.out.println("\"Hello World\"");	// 直接输出转义字符
	}
}

/**
 * 浮点型数据计算
 */
class DataDemo06 {
	public static void main(String[] args) {
		float num = 3.0f;
		System.out.println("两个小数相乘：" + num * num);	// 计算两数相乘
	}
}

/**
 * 布尔类型的使用
 */
class DataDemo07 {
	public static void main(String[] args) {
		boolean flag = true;
		System.out.println("flag = " + flag);
	}
}