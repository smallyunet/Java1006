import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * 连接数据库
 */
public class ConnectionDemo02 {
    // 定义驱动
    public static final String DBDRIVER = "com.mysql.jdbc.Driver";
    // 定义连接地址
    public static final String DBURL = "jdbc:mysql://localhost:3306/mldn";
    // 用户名密码
    public static final String DBUSER = "root";
    public static final String DBPASS = "root";

    public static void main(String[] args) {
        Connection conn = null; // 数据库连接

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

        System.out.println(conn);

        try {
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}