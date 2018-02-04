
> MERN实现一个简单的学生信息表管理系统

## Ｖ0.1.0　(规划)

### 表结构

```
StudentInfo {
    id: Integer,        // 存入序号
    school: String,     // 学校
    class: Integer,     // 班级
    name: String,       // 姓名
    gender: String,     // 性别
    age: Integer,       // 年龄
    tel: Integer,       // 手机号码
    birthplace: String  // 籍贯
}
```

### 路由

| 目录 | 方法 | 描述 |
| --- | :---: | --- |
/         | post | 首页，默认查询所有数据 
/add      | post | 新增一条数据
/:id/edit | post | 编辑一条数据
/:id/del  | post | 删除一条数据

### 页面布局

没有header，没有footer，先用一个表格做主体，实现基本功能
