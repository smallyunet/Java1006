
第三天的内容依旧是HTML标签部分，涉及到列表、表格、框架、音视频和表单等。

## HTML入门

### 列表相关元素

```
<ol>        用来定义有序列表，属性type用来更改默认标题，start用来指定开始位置
<ul>        用来定义无序列表，属性type更改列表项前的显示内容，square、circle
<li>        用来定义列表中的一个列表项
<dl>        用来定义自定义列表
<dt>        用来定义标题列表项
<dd>        用来定义普通列表项
```

#### 列表嵌套效果

用HTML标签实现类似这样的列表嵌套效果：

1. 山西
    - 运城
    - 太原
    - 临汾
2. 山东
    - 济南
    - 青岛
    - 烟台

语义上可以把无序列表ul写在有序列表的li标签里：

```html
<ol>
    <li>山西
        <ul>
            <li>运城</li>
            <li>太原</li>
            <li>大同</li>
        </ul>
    </li>

    <li>山东
        <ul>
            <li>济南</li>
            <li>青岛</li>
            <li>烟台</li>
        </ul>
    </li>
</ol>
```

但是如果想要改变有序列表项（内容项上一层级）的样式，如“山西”，“山东”，可能就需要其他方式来配合实现列表的嵌套，首先想到的也许是把内容写在span中。

### 表格相关元素

```
<table>             定义一个表格，border属性指定边框宽度
    cellpadding     设置单元格内容与单元格之间的距离
    cellspacing     设置单元格与单元格之间的距离
    <caption>       定义表格标题，内容居中
    <thead>         定义表格头部，语义化
    <tbody>         定义表格主体，语义化
    <tfoot>         定义表格脚部，语义化
    <tr>            定义表格中的一行
    <th>            定义表格表头，替换td，内容粗体居中
    <td>            定义表格中的一列
        colspan     设置单元格占据列数
        rowspan     设置单元格占据行数
```

### 框架相关元素

```
<frameset>      重构页面的body部分，和body不共存，已弃用
    rows        设置行高度，百分值
    cols        设置列宽度，百分值
    <frame>     引入一个页面，src指向资源
<iframe>        src引入页面，和body不冲突
```

### 音频和视频

```
<video>         定义视频控件
    src         配置视频资源路径
    controls    显示播放控件
    autoplay    页面加载后自动播放
    loop        循环播放
    width       控件宽度
    height      控件高度
```

### 表单相关元素

```
<form>          定义表单元素
<input>         定义输入框
    text        普通文本框
    password    密码文本框
    radio       单选按钮
    checkout    复选按钮
    file        文件选择框
    submit      提交按钮
    reset       重置按钮
    button      普通按钮
```

## 其他

归档： [培训第三天]()

## 打字测速

### 2017.12.17

![testing.png](./images/testing.png)