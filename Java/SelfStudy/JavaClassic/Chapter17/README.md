JDBC

### 数据库编码问题

#### 连接语句

在程序中定义链接地址时，设置链接的字符集：

    jdbc:mysql://xxxxx:3306/dbname?useUnicode=true&characterEncoding=utf-8

如果在管理工具中mysql的编码正常，而java程序无法正确执行，就可以这样来解决。

#### 数据库

创建库时设置编码：

    create database database_name character set utf8;

创建表时设置编码：

```
    CREATE TABLE `abc` (
        ...
    ) DEFAULT CHARSET=utf8;
```

`set names 'utf8'` 相当于三条语句，可以在crud前执行一下：

```
set character_set_client = utf8;
set character_set_results = utf8;
set character_set_connection = utf8;
```

数据库编码转换：

    alter database database_name character set utf8;

数据表编码转换：

    alter table table_name convert to character set utf8;

数据表编码转换**可能**可用的另一种语句：

    alter table table_name charset=utf8; 

查看数据库的编码：

    show create database database_name;

查看数据表的编码：

    show create table table_name;


这些语句应该可以解决多数编码问题。


### 划重点

- ResultSet中的所有数据都可以通过getString()方法取得

- 开发中必须明确地写出查询列，而不是使用*

- 开发中要使用PreparedStatement，而不是Statement