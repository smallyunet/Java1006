import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.text.SimpleDateFormat;

/**
 * 数据库查询
 */
public class PreparedStatementDemo01 {
    // 定义驱动
    public static final String DBDRIVER = "com.mysql.jdbc.Driver";
    // 定义连接地址
    public static final String DBURL = "jdbc:mysql://localhost:3306/mldn?useUnicode=true&characterEncoding=utf-8";
    // 用户名密码
    public static final String DBUSER = "root";
    public static final String DBPASS = "root";

    public static void main(String[] args) throws Exception {
        Connection conn = null; // 数据库连接
        PreparedStatement pstmt = null;  // 数据库操作

        String name="王新华";
        String password = "www..dddddd";
        int age = 30;
        String sex = "女";
        String birthday = "2099-666";

        String sql = "INSERT INTO user(name, password, age, sex, birthday) "
            + " VALUES (?, ?, ?, ?, ?)";

        Class.forName(DBDRIVER);

        conn = DriverManager.getConnection(DBURL, DBUSER, DBPASS);
        pstmt = conn.prepareStatement(sql);

        pstmt.setString(1, name);
        pstmt.setString(2, password);
        pstmt.setInt(3, age);
        pstmt.setString(4, sex);
        pstmt.setString(5, birthday);

        pstmt.executeUpdate();
   
        pstmt.close();
        conn.close();
    }
}