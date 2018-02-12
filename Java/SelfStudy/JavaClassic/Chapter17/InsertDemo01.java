
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.SQLException;


public class InsertDemo01 {
    // 定义驱动
    public static final String DBDRIVER = "com.mysql.jdbc.Driver";
    // 定义连接地址
    public static final String DBURL = "jdbc:mysql://localhost:3306/mldn?useUnicode=true&characterEncoding=utf-8";
    // 用户名密码
    public static final String DBUSER = "root";
    public static final String DBPASS = "root";

    public static void main(String[] args) {
        Connection conn = null; // 数据库连接
        Statement stmt = null;  // 数据库操作
        String sql = "INSERT INTO user(name, password, age, sex, birthday) VALUES ('李兴华', 'www.mldn.cn', 33, '男', '2008-08-27')";

        try {
            Class.forName(DBDRIVER);    // 加载驱动程序
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
  
        try {
            // 连接数据库
            conn = DriverManager.getConnection(DBURL, DBUSER, DBPASS);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        try {
            stmt = conn.createStatement();  // 实例化Statement对象
            stmt.executeUpdate(sql);   // 执行
            stmt.close();   // 关闭
        } catch (SQLException e) {
            e.printStackTrace();
        }

        try {
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}