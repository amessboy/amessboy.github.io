---
title: "梯子工具合集：Clash & V2Ray 全指南（下载 + 教程）"
source: "https://proxynotes.net/bypassnet/267"
author:
published:
created: 2025-06-25
description: "目前市面上主流的科学上网代理工具主要包括以下几类核心：Shadowsocks (SS)、Trojan、NaiveProxy、Hysteria / TUIC、WireGuard / Tailscale / Outline、Clash / Clash.Meta、V2Ray / V2Fly。 其中，Clash 和 V2Ray"
tags:
  - "clippings"
---
![](https://proxynotes.net/wp-content/uploads/2025/02/clash.png)

目前市面上主流的科学上网代理工具主要包括以下几类核心：Shadowsocks (SS)、Trojan、NaiveProxy、Hysteria / TUIC、WireGuard / Tailscale / Outline、Clash / Clash.Meta、V2Ray / V2Fly。

其中，Clash 和 V2Ray 是当前最广泛使用的核心工具，本文将重点介绍基于 Clash 和 V2Ray 的客户端工具，涵盖它们的功能特点、支持平台、GitHub 开源地址，以及如何安装配置、实现科学上网。

## Clash / V2Ray 梯子工具

<table><colgroup><col> <col> <col> <col></colgroup><thead><tr><th rowspan="1" colspan="1"><p><span><strong>客户端名称</strong></span></p></th><th rowspan="1" colspan="1"><p><span><strong>GitHub</strong></span></p></th><th rowspan="1" colspan="1"><p><span><strong>支持系统</strong></span></p></th><th rowspan="1" colspan="1"><p><span><strong>说明</strong></span></p></th></tr></thead><tbody><tr><td>FlClash</td><td><a href="https://github.com/chen08209/FlClash"><span>GitHub</span></a></td><td>Windows、Android、macOS、Linux</td><td>轻量跨平台，界面简洁，使用 Flutter 开发。</td></tr><tr><td>V2rayN</td><td><a href="https://github.com/2dust/v2rayN"><span>GitHub</span></a></td><td>Windows、macOS、 Linux</td><td>一款功能强大的 V2Ray 客户端，支持多种代理协议，界面简洁。</td></tr><tr><td>Mihomo Party</td><td><a href="https://github.com/mihomo-party-org/mihomo-party"><span>GitHub</span></a></td><td>Windows、macOS、 Linux</td><td>基于 Meta 内核，UI 清爽，支持常用功能。</td></tr><tr><td>Clash Verge Rev</td><td><a href="https://github.com/clash-verge-rev/clash-verge-rev"><span>GitHub</span></a></td><td>Windows、macOS、 Linux</td><td>Verge 的升级版，功能更丰富，维护活跃。</td></tr><tr><td>Clash Nyanpasu</td><td><a href="https://github.com/LibNyanpasu/clash-nyanpasu"><span>GitHub</span></a></td><td>Windows、macOS、 Linux</td><td>新兴客户端，界面美观，支持多内核。</td></tr><tr><td>ClashX Meta</td><td><a href="https://github.com/MetaCubeX/ClashX.Meta"><span>GitHub</span></a></td><td>macOS</td><td>基于 Meta 内核的 ClashX 升级版，支持新协议，维护活跃。</td></tr><tr><td>Clash Meta for Android</td><td><a href="https://github.com/MetaCubeX/ClashMetaForAndroid"><span>GitHub</span></a></td><td>Android</td><td>基于 Clash.Meta 开发，支持更现代的协议，功能更全面。</td></tr><tr><td>V2rayNG</td><td><a href="https://github.com/2dust/v2rayNG"><span>GitHub</span></a></td><td>Android</td><td>专为 Android 设备设计的 V2Ray 客户端，界面简洁，支持多种协议。</td></tr><tr><td>Clash for Windows(已删库)</td><td><a href="https://github.com/Fndroid/clash_for_windows_pkg"><span>GitHub</span></a></td><td>Windows</td><td>早期稳定客户端，功能全面，已停止维护。</td></tr><tr><td>Clash Verge(已删库)</td><td><a href="https://github.com/zzzgydi/clash-verge"><span>GitHub</span></a></td><td>Windows</td><td>界面现代，支持多配置和测速，已停止维护。</td></tr><tr><td>ClashX(已删库)</td><td><a href="https://github.com/yichengchen/ClashX"><span>GitHub</span></a></td><td>macOS</td><td>macOS 上早期常用的图形客户端，轻量、易用。</td></tr><tr><td>Clash for Android(已删库)</td><td><a href="https://github.com/Kr328/ClashForAndroid"><span>GitHub</span></a></td><td>Android</td><td>官方的 Clash 客户端，功能简单，适合基础使用。</td></tr></tbody></table>


## 使用 Clash / V2Ray 工具的基本步骤

以下流程适用于大多数图形客户端，具体以每个工具为准。

#### 1\. 获取代理节点订阅链接

- 电脑上，打开 V2Plus，单击选择一个可用的节点   ![](../2-配置设置/asserts/Pasted%20image%2020250620164432.png)
- 直接按下快捷键 `ctrl + F`，或者右键单击节点，选择”分享服务器“     
- 此时屏幕上会显示出用于分享服务器的二维码![](../2-配置设置/asserts/Pasted%20image%2020250620164629.png)

#### 2\. 下载并安装客户端工具

- 根据你的操作系统选择合适的工具（如 Clash for Windows、Clash Verge、V2rayN、NekoRay、v2rayNG 等）
- 从本文上方提供的 GitHub 地址下载安装最新版

#### 3\. 导入订阅链接

- 在客户端界面中找到“订阅”或“配置”入口
- 扫描电脑屏幕上共享的二维码

#### 4\. 启动代理服务

- 启用 HTTP / SOCKS5 本地代理（或系统代理）
- 浏览器/系统就可以自动使用代理访问国外网站

#### 5\. 验证是否成功

- 打开浏览器访问 [Google](https://www.google.com/) 、 [YouTube](https://www.youtube.com/)
- 或使用 [ip111.cn](https://ip111.cn/) 查看当前 IP 和地区是否为海外