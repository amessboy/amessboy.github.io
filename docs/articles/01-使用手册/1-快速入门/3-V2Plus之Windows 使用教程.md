---
title: "V2Plus Windows 教程 | shadowrocket"
source: "https://shadowrocket-app.gitbook.io/shadowrocket/windows/v2rayn"
author:
published: 2024-04-04
created: 2025-06-25
description: "V2rayN客户端是一个基于V2ray 内核的windows客户端，它目前支持Xray内核，然后也可以手动更新核心和客户端的版本。下载即用，数据可视化（能看到你访问的网址）、上手也简单。"
tags:
  - "clippings"
---
# V2Plus Windows使用教程

V2Plus是Windows系统下的**免费**代理软件客户端，功能强大且支持多种代理协议，如VMess、VLESS、Trojan、Socks、Shadowsocks、Hysteria2、Tuic等代理协议。通过本文2025最新使用教程快速入门篇所掌握的技巧，能快速方便配置代理协议进行代理访问。

## 一、 界面预览

![](asserts/222%202.jpg)

（主界面）

### 二、下载

**V2Plus官网** ： [V2Plus - 专业稳定的科学上网梯子服务 | 翻墙VPN代理 - V2Plus科学上网](http://www.v2plus.xyz/)
下载地址： https://gofile.io/d/NbgZX8
备用地址： https://www.mediafire.com/file/7msuyqnxbl4ilmn/v2plus-windows-x64-0617.7z/file

## 三、安装教程

### 3.1 软件目录

下载完成后，找到合适的目录，推荐安装在非系统盘，解压压缩包。
软件为绿色免安装版，无需安装、无需配置、即开即用。
找到软件主程序 `V2Plus.exe` 双击鼠标左键即可开始使用。

![](asserts/221%201.jpg)

程序启动后会最小化到任务右小角的托盘，鼠标双击蓝色的小火箭图标，即可打开软件的主界面。

### 3.2 图标说明

不同状态下软件的图标颜色是不一样的，参考下表图标颜色说明。

| <center>图标</center>         | <center>软件状态</center>     | <center>说明</center>                  |
| --------------------------- | ------------------------- | ------------------------------------ |
| ![](asserts/清除系统代理%201.jpg) | <center>清除系统代理</center>   | 每次启动/重启服务的时候，强制把windows系统(ie)的代理清除掉。 |
| ![](asserts/自动配置系统代理.jpg)   | <center>自动配置系统代理</center> | 每次启动/重启服务的时候，强制设定windows系统(ie)的代理。   |
| ![](asserts/不改变系统代理.jpg)    | <center>不改变系统代理</center>  | 每次启动/重启服务的时候，什么都不做。作用就是保留其他软件设定的代理。  |
（图标状态说明）

## 四、节点

节点即软件中的服务器，在使用之前，首先需要添加一个 **V2Plus节点** 即服务端才能使用代理上网功能，更多节点可参考本站 [节点订阅地址](https://v2rayn.org/v2rayn-node/) 或 [好用的V2Plus节点购买机场推荐](https://v2rayn.org/node/) 。

### 4.1 免费节点

由于软件支持VMess、VLESS、Trojan、Socks、Shadowsocks、Hysteria2、Tuic等代理协议，如需 **免费节点** 可以使用搜索引擎搜索。

### 4.2 收费节点

免费节点资源少或者觉得免费节点不稳定的话可以考虑购买收费节点。推荐搬瓦工官方机场 [Just My Socks](https://jmsnode.com/) ，支持 Shadowsocks 及 V2Ray 协议，并且多个数据中心及套餐可选。

技术小白建议购买机场，无需编写配置文件，直接导入节点订阅地址链接即可使用，机场推荐购买： [大哥云机场 (注册可免费试用！国内高速中转加密隧道，价格低至19.99元！)](https://v2rayn.org/dageyun/)

### 4.3 自己搭建节点

如果对稳定性要求高且有一定的技术基础，推荐自己搭建节点，速度有保证且安全性也最高，具体搭建教程可参考下面的链接。

- [V2Ray 搭建](https://www.linuxv2ray.com/) (VMess)
- [Xray 搭建](https://www.linuxxray.com/) (VLESS)
- [Trojan 搭建](https://www.linuxtrojan.com/)
- [Shadowsocks 搭建](https://www.linuxsss.com/) (SS)




- 下载地址 [**点击此处直接下载**](https://down.apple02.com/v2rayN-Core.zip) 

1. #### 下载解压到桌面，右键，管理员身份运行V2Plus

![](asserts/311.jpg)
1. #### 找到订阅设置，粘贴订阅地址 推荐订阅节点购买
	![](https://shadowrocket-app.gitbook.io/shadowrocket/~gitbook/image?url=https%3A%2F%2F1266655170-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FU3M4Vt69t4ZRMHo955XR%252Fuploads%252FndiVzpy4BLhQvPIq4klM%252Fimage.png%3Falt%3Dmedia%26token%3Dbc331169-7242-47f8-ba76-c5c2720e85ef&width=768&dpr=4&quality=100&sign=907558b&sv=2)
2. #### 找到订阅-> 更新订阅，会出现节点
	![](https://shadowrocket-app.gitbook.io/shadowrocket/~gitbook/image?url=https%3A%2F%2F1266655170-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FU3M4Vt69t4ZRMHo955XR%252Fuploads%252FXJSlj9fjClyOJhT7UFal%252Fimage.png%3Falt%3Dmedia%26token%3Da67d8f32-4fba-4d91-93f4-d58779f175e6&width=768&dpr=4&quality=100&sign=f6c63df7&sv=2)
3. **电脑右下角 右键V2Plus 系统代理 选择 自动配置系统代理**
	![](https://shadowrocket-app.gitbook.io/shadowrocket/~gitbook/image?url=https%3A%2F%2F1266655170-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FU3M4Vt69t4ZRMHo955XR%252Fuploads%252FVvWYOxXu2ztIebLR1lmf%252F4ed7376e7cf818d.png%3Falt%3Dmedia%26token%3D4fed61c9-1656-4066-95ac-f80e9d09dacd&width=768&dpr=4&quality=100&sign=c32942bb&sv=2)
4. #### 右键某一个节点，设置为活动服务器即可
	![](https://shadowrocket-app.gitbook.io/shadowrocket/~gitbook/image?url=https%3A%2F%2F1266655170-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FU3M4Vt69t4ZRMHo955XR%252Fuploads%252FrKS3qD93qwpac2ry8laP%252Fimage.png%3Falt%3Dmedia%26token%3Dbe9ee1fe-d7e8-4eb7-ad02-3ef027ae6627&width=768&dpr=4&quality=100&sign=61c4c556&sv=2)
5. #### 其他功能，测试节点是否可以用，测试节点速度
	![](https://shadowrocket-app.gitbook.io/shadowrocket/~gitbook/image?url=https%3A%2F%2F1266655170-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FU3M4Vt69t4ZRMHo955XR%252Fuploads%252F7UJtIkECm7ZW6UDnAi4u%252Fimage.png%3Falt%3Dmedia%26token%3Da9f6981c-5ac1-4bfb-8aa9-0a4a5a34ab3e&width=768&dpr=4&quality=100&sign=e5f4eaf6&sv=2)
6. #### 【不能用的一些常见问题】
	1. V2Plus设置 -参数设置-> 传输层选TLS时候，跳过证书验证/允许行不安全连接 allowInsecure – 把此项勾选。
	2. 若你用的谷歌浏览器，安装的有插件，建议先关闭所有插件开关再试，因为有可能有插件影响代理，会冲突。
	3. 打开电脑浏览器，百度搜索’‘北京时间’，再把电脑系统时间调节和北京时间一模一样，分秒不差，测试是否可以使用。
	4. 提示缺少.NET Framework，就安装Microsoft.NET Framework [点击下载](https://www.microsoft.com/zh-cn/download/details.aspx?id=30653&6B49FDFB-8E5B-4B07-BC31-15695C5A2143=1) 安装 测试是否可以使用。
	5. 下载最新版本 v2ray windows软件，找到V2Plus-Core.zip [点击下载v2rayN-Core.zip](https://github.com/2dust/v2rayN/releases) 测试是否可以使用。
