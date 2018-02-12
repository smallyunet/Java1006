public class ConnectionDemo01 {
    // 定义驱动
    public static final String DBDRIVER = "com.mysql.jdbc.Driver";
    public static void main(String[] args) {
        try {
            Class.forName(DBDRIVER);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}