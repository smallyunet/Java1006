
### 案例代码

- ThreadDemo.java （继承Thread类启动线程）

- RunnableDemo.java （实现runnable接口启动线程）

- ThreadDemo04.java （继承Thread类资源不共享）

- RunnableDemo02.java （实现runnable接口资源共享）

- ThreadNameDemo.java （打印、设置线程名称）

#### 9.5 线程操作范例

设计一个线程操作类，可以产生3个线程对象，并分别设置3个线程的休眠时间：

- 线程A，休眠10秒

- 线程B，休眠20秒

- 线程C，休眠30秒

线程的实现有两种方式，一种是继承Thread类，另一种是实现Runnable接口。

- ExecDemo01 （使用Thread类实现）

- ExecDemo02 （实现runnable接口实现）

#### 9.6 同步与死锁

可以使用同步代码块的方式使用同步：

``` java
synchronized(同步对象) {
    需要同步的代码；
}
```

- SyncDemo02.java （使用同步解决问题）