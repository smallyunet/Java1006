第一天的内容涉及到git的安装使用和一些其他工具的安装使用。

## git的安装使用

### git安装

选择使用gitee代码仓库进行内容的版本控制。Windows下直接运行git安装包进行安装。


### git使用

git安装后，使用命令配置用户信息：

```
git config --global user.name "username"
git config --global user.email "username@domain.com"
```

接下来，首先在gitee注册账号，然后接受由管理员发起的项目邀请加入项目，再在设置中添加由git命令行生成的公钥。

```
ssh-keygen -t rsa -C "xxxxx@xxxxx.com"
```

git命令行面板中用于生成公钥的命令，双引号内填自己的邮箱。执行命令后会在默认目录下生成两个文件，复制其中一个文件id_rsa.pub中的内容粘贴到gitee设置页面的文本框中。

（Windows下安装git后提供的命令行工具类似于Linux的命令行，相当于Windows下的Linux虚拟机面板，使WIndows环境中可以使用linux命令。）

完成公钥配置后进行git基本使用的操作练习。

git常用命令（按照使用顺序）

```
	git branch			查看本地分支
	git branch -r			查看远程分支
	git branch name			新建分支name
	git checkout name		更换分支到name
	git add *			提交./所有内容到暂缓区
	git commit -m ""		提交内容到本地仓库	
	git push origin name		提交内容到分支name	
	git pull			同步内容到本地
```

规则说明：班级内每个人在项目中分别管理一个由自己姓名命名的分支。

如果在远程仓库误删，使用`git pull`拉取内容同步到本地。

如果在本地删除内容，想要远程仓库和本地内容保持同步，使用`git push`的一系列命令重新推送分支内容。

如果在本地误删内容，想要从远程仓库恢复本地内容，需要在本地删除整个项目，然后使用`git clone "name" git@xxx.git`带参数从name分支克隆内容。

删除本地文件夹，可以在图形界面操作，也可以使用命令`rm -rf`删除。Windows下使用`git rm -rf`删除。-r代表遍历目录，-f代表强制删除。

## 其他工具的安装使用

### XMind

Windows下解压安装。

新建主题，enter键新建同级分支，tab键新建子分支，以及侧边工具栏的基本使用。

### webstorm

Windows下解压安装。

使用被提供的注册机获取权限。也可以选择网络上提供的License server方式使用http://idea.iteblog.com/key.php 这个地址进行验证。

接下来安装webstorm的插件使其支持markdown。

菜单栏进入File > Settings... > Plugins，点击Browse repositories...进入仓库，搜索markdown，选择安装Markdown Navigator或者Markdown support任意一个。

任意新建工程，右键点击，New > Edit File Templates...，新建模板Name: MarkDown File，Extension: md，确定保存。

这样webstorm就可以完备地支持markdown文件了。

## 其他

归档： <http://blog.smallyu.net/2017/12/09/%E5%9F%B9%E8%AE%AD%E7%AC%AC%E4%B8%80%E5%A4%A9/>