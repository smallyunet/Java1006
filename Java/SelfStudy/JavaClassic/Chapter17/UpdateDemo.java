import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

/**
 * 数据库修改
 */
public class UpdateDemo {
    // 定义驱动
    public static final String DBDRIVER = "com.mysql.jdbc.Driver";
    // 定义连接地址
    public static final String DBURL = "jdbc:mysql://localhost:3306/mldn?useUnicode=true&characterEncoding=utf-8";
    // 用户名密码
    public static final String DBUSER = "root";
    public static final String DBPASS = "root";

    public static void main(String[] args) throws Exception {
        Connection conn = null; // 数据库连接
        Statement stmt = null;  // 数据库操作
        int id = 33;
        String name = "芳华";
        String password = "mldn";
        int age = 25;
        String sex = "男";
        String birthday = "2001-09-13";
        String sql = "UPDATE user SET name='" + name + "',password='" 
            + password + "',age=" + age + ",sex='" + sex + "',birthday='"
            + birthday + "' WHERE age=" + id;
        Class.forName(DBDRIVER);
        conn = DriverManager.getConnection(DBURL, DBUSER, DBPASS);
        stmt = conn.createStatement();
        stmt.executeUpdate(sql);
        stmt.close();
        conn.close();
    }
}