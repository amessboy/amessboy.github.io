---
title: "蚯蚓机场|帮助中心 | Windows客户端V2rayN配置教程"
source: "https://v2ray.tawk.help/article/windows"
author:
published:
created: 2025-06-25
description: "Windows客户端V2rayN新版4.27配置教程"
tags:
  - "clippings"
---
## Windows客户端V2Plus配置教程

switchproxy omega+v2plus清除系统代理


V2Plus5.39下载与配置

Big R

上次更新日期1 年前

下载

视频演示

<video src="https://d.hotland.us/qiuyin/qiuyin-v2rayn2023.mp4" controls="controls" width="100%" height="100%"></video>

配置教程

1\. 打开解压出来的文件夹V2Plus-core，找到文件夹中的蓝色图标V2Plus文件（图标如下图蓝色v），右键鼠标，以管理员身份运行。

软件界面如下图。

需要使用socks5代理和http代理端口的，看界面的底部。

![](https://tawk.link/5f4307111e7ade5df4434613/kb/attachments/7g7bM1YfG1.jpg)

登陆蚯蚓网站-菜单栏【仪表盘】-【一键订阅】-【复制订阅地址】

  

![](https://tawk.link/5f4307111e7ade5df4434613/kb/attachments/Ik4RR463ba.png)

2\. 点击菜单栏【订阅】-【订阅设置】，点击弹出窗口的左下角【添加】，下图【地址】中粘贴在上一步复制的订阅地址，点击【确定】。

![](https://tawk.link/5f4307111e7ade5df4434613/kb/attachments/ljB_SQSf56.jpg)

3.点击【更新订阅】，如下图，即可更新出节点。如果没有更新出来，解决方法： [参考这里](https://v2ray.tawk.help/article/qamore)

![](https://tawk.link/5f4307111e7ade5df4434613/kb/attachments/LpnclSOqJu.jpg)

4.右键别名中还有国家名称的节点，选择【设为活动服务器】，表示选择使用这个节点进行代理上网

![](https://tawk.link/5f4307111e7ade5df4434613/kb/attachments/W0UpUh0JHs.jpg)

5.右键节点，点击【测试服务真连接延迟】，表示对次节点的可用性进行测试，如果显示出xxxms表示节点可用

![](https://tawk.link/5f4307111e7ade5df4434613/kb/attachments/B93UOjOxSJ.jpg)

6.右键节点，点击【测试服务器速度】，表示对服务器的连接速度进行测试，测试延迟不通的情况，可以试下测试速度

![](https://tawk.link/5f4307111e7ade5df4434613/kb/attachments/Nl5Zl_G9uN.jpg)

7.【 **开启和关闭代理** 】右键客户端的图标（位于电脑屏幕右下角），如下图所示，

点击【自动配置系统代理】，即打开代理开关，可以上网了。

点击【清除系统代理】即关闭代理。

![](https://tawk.link/5f4307111e7ade5df4434613/kb/attachments/_588pyIdUr.jpg)

**8.【PAC和全局模式】推荐大家选择【黑名单】。**

路由中的三个选项解释：

【绕过大陆】列表里面的网站直接连接，其余使用代理；

【黑名单】列表里面的网站要使用代理，其余直连；

【全局】即所有流量都走代理

  

![](https://tawk.link/5f4307111e7ade5df4434613/kb/attachments/sNaKMsEeLM.jpg)

9.【更新订阅和换节点】如下图红色圆圈地方，可以更换节点。红线的地方可以更新订阅。

![](https://tawk.link/5f4307111e7ade5df4434613/kb/attachments/Zg8AjoEvxs.jpg)

更多高级配置，仅供参考

让特定网站走代理

菜单【设置】-【路由设置】，三个规则集中，推荐修改【黑名单】，双击【黑名单】，弹出【规则集设置】

  

outboundTag列表前三个：

direct-直连

block-屏蔽

proxy-代理

双击【proxy】即可配置要代理的网站。domain栏下按照图中例子填写要代理的域名。ip栏下填写要代理的IP。

![](https://tawk.link/5f4307111e7ade5df4434613/kb/attachments/xDthQpXOoG.png)