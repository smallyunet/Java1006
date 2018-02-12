import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 * 数据库查询
 */
public class ResultSetDemo01 {
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
        ResultSet rs = null;
        String sql = "SELECT * FROM user";
        Class.forName(DBDRIVER);
        conn = DriverManager.getConnection(DBURL, DBUSER, DBPASS);
        stmt = conn.createStatement();
        rs = stmt.executeQuery(sql);
        while(rs.next()) {
            String name = rs.getString("name");
            String pass = rs.getString("password");
            int age = rs.getInt("age");
            String sex = rs.getString("sex");
            String d = rs.getString("birthday");
            System.out.print("姓名：" + name + ";");
            System.out.print("密码：" + pass + ";");
            System.out.print("年龄：" + age + ";");
            System.out.print("性别：" + sex + ";");
            System.out.print("生日：" + d);
            System.out.print("-----------------------------------");
        }
        rs.close();
        stmt.close();
        conn.close();
    }
}