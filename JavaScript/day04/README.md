#### 元素选择

使用css语法获取节点：

```
document
  .querySelector()
  .querySelectorAll()
```

前者只选择一个元素，后者返回一个数组。

利用节点关系访问元素：

```
document
  .parentNode
  .childNodes
  .previousSibling
  .nextSibling
  .firstChild
  .lastChild
```

注意访问子节点时，浏览器会把空格、空行也当做节点算进去。

#### 操作html元素

访问html内容：document.getElementById(id).innerHTML = ''

访问html属性：document.getElementById(id).attribute = ''

脚本化css：document.getElementById(id).style.property = ''

脚本化事件：document.getElementById(id).event = () => {}

#### 操作html节点

创建html节点：

    document.createTextNode("")
    document.createElement("p")

插入html节点：

    appendChild(node)
    insertBefore(node, childnode)

这里insertBefore需要传入两个参数，这个函数在父元素调用，第一个参数指定插入哪个节点，第二个参数指定在哪个子节点的前面插入节点。

删除html节点

    child.parentNode.removeChild(child)

替换html节点

    parent.replaceChild(newnode, oldnode)

#### BOM

Browser对象一共包含五个对象，Window、Navigator、Screen、History、Location

#### 延时

setTimeout()

setInterval()

#### 页面加载状态

window.onload是一个事件，在文档被完全加载后自动触发。

doucment.readyState是一个属性，返回当前文档加载的状态，有5种取值：

- uninitialized - 文档未开始加载
- loading - 正在加载
- loaded - 已经加载
- interactive - 可响应用户行为
- complete - 完全加载

jQuery中的常用写法$(document).ready()，会在文档加载结束，图片等非文本媒体加载完之前就执行。
