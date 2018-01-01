第五天的内容涉及CSS的常用属性、盒子模型和页面布局、定位等内容。

## 常用属性

### 字体相关属性

```
font-style                  字体样式
font-weight                 字体粗细
font-size                   字体大小
font-family                 字体类型
font-decoration             字体修饰
    none                    无修饰
    underline              下划线
    line-through            中划线
    overline                上划线
font-transform              大小写转换
    none                    不转换
    capitalize              首字母大写
    uppercase               全部大写
    lowercase               全部小写
line-height                 设置行高
letter-spacing              字符间距
word-spacing                单词间距
text-indent                 段落文本缩进
text-align                  文本对齐方式
text-shadow                 文本阴影
    color                   阴影颜色
    xoffset                 横坐标偏移
    yoffset                 纵坐标偏移
    radius                  阴影模糊半径
```

### 背景相关属性

```
background-color            背景颜色
background-image            背景图像
background-repeat           背景是否平铺
background-size             背景图像尺寸
background-position         背景图像位置
```

### 边框相关属性

```
border-style                边框样式
border-color                边框颜色
border-width                边框宽度
border-radius               圆角边框
```

### 表格相关元素

```
border-collapse             设置单元格样式
border-spacing              设置单元格间距
caption-side                设置表格标题位置
```

注意这三个属性的使用有前后顺序，尤其是`border-spacing`的位置。

### 列表相关属性

```
list-style-type             列表项样式类型
list-style-image            列表项样式图像
list-style-position         列表项样式位置
```

### 过度相关属性

```
transition-delay            过渡延迟
transition-duration         过渡持续时间
transition-property         过渡涉及属性
transition-timing-function  过渡效果路径
```

### 其他属性

设置鼠标样式：

    cursor:pointer;

设置缩放比例：

    transform: scale(1.5);

设置区域的透明度：

    opacity: 0.5;

## 盒子模型

```
margin                      外边距
border                      边框
padding                     内边距
overflow                    溢出内容处理
    hidden                  隐藏
    scroll                  滚动条
```

- inline 行内元素，不可以设置宽高，不能独占一行。
- inline-block 行内块级元素，可以设置宽高，不能独占一行。
- block 块级元素，可以设置宽高，可以独占一行。

`display`可以用来转换元素类型，也可以使元素隐藏，不保留原有空间。如果想要保留原有空间并隐藏元素，可以使用`visibility:hidden`实现，其值为`visible`时元素显示。

    float                   浮动
    clear:both              清除浮动

`position`属性用于定位：

- absolute 绝对定位，相对于父元素定位
- relative 相对定位，相对于元素本身定位
- fixed 固定定位，相对于浏览器窗口定位

## 其他

归档：[培训第五天](http://blog.smallyu.net/2017/12/30/培训第五天)

