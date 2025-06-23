# IOS:

注：此方法需要手机和电脑连接在同一个局域网下

1. 在电脑上启动v2plus，点击“设置”，打开“参数设置”  
    ![](asserts/Pasted%20image%2020250620163630.png)
    
2. 开启“允许来自局域网的连接”功能，并记录下你的“本地监听端口”，点击“确定”  
    ![](asserts/Pasted%20image%2020250620163645.png)
    
3. 弹出“Windows安全中心”窗口后，点击“允许访问”  
    ![](asserts/Pasted%20image%2020250620163701.png)
    
4. 获取你的局域网IP
    - 按下 `Win + R` 键，打开“运行”窗口。
    - 输入 `cmd`，然后按下回车，打开“命令提示符”。  
        ![](asserts/Pasted%20image%2020250620163733.png)
    - 在命令行中输入此命令：`ipconfig`，然后按下回车
        
5. 记录下你的IPv4地址  
    ![](asserts/Pasted%20image%2020250620163800.png)
    
6. 下面来到你的IOS设备上进行操作，首先打开“设置”，进入“WLAN”，并点击你正在连接的网络  
    ![](asserts/Pasted%20image%2020250620163813.png)
    
7. 点击"HTTP“代理”下的“配置代理”  
    ![](asserts/Pasted%20image%2020250620163828.png)
    
8. 选择“手动”  
    ①在“**服务器**”处填入<步骤5>中记录下的“**IPv4地址**”；  
    ②在“**端口**”处填入<步骤2>中记录下的“**本地监听端口**”：  
    ③点击“**存储**”按钮  
    ![](asserts/Pasted%20image%2020250620163841.png)
    

配置完成，让我们尝试在浏览器中输入www.google.com  
  ![](asserts/Pasted%20image%2020250620164145.jpg)
访问成功！

# Android:

想要在安卓手机上魔法上网？本文提供两种方法，跟随本教程一步一步操作即可。

## 方法一：下载v2rayNG共享电脑端的订阅

1. 使用手机浏览器打开以下网址：[https://github.com/2dust/v2rayNG/releases](https://github.com/2dust/v2rayNG/releases "https://github.com/2dust/v2rayNG/releases")  
    下滑找到“Latest”（最新版）  
    点击下载通用安装包  
    如果你的网络暂时无法访问GitHub，请下载网盘链接中提供的文件（_链接_）  
    ![](asserts/Pasted%20image%2020250620164245.png)
    
2. 安装后你的手机桌面上就出现了这款软件，打开它  
    ![](asserts/Pasted%20image%2020250620164313.jpg)
    
3. 现在让我们回到电脑上，打开V2Plus，单击选择一个可用的节点  
    ![](asserts/Pasted%20image%2020250620164355.png)
    
4. 直接按下快捷键`ctrl + F`，或者右键单击节点，选择”分享服务器“  
    ![](asserts/Pasted%20image%2020250620164432.png)
    
5. 此时屏幕上出现了一个二维码  
	![](asserts/Pasted%20image%2020250620164629.png)
	
6. 现在回到手机上的v2rayNG，点击右上角的加号  
    ![](asserts/Pasted%20image%2020250620164658.png)
    
7. 点击”扫描二维码“  
    ![](asserts/Pasted%20image%2020250620164712.png)
    
8. 点击右上角的扫描图标，然后扫描电脑屏幕上的二维码  
    ![](asserts/Pasted%20image%2020250620164732.png)
    
9. 此时你的安卓手机就获取到了电脑上分享的节点，点击右下角的运行按钮  
    ![](asserts/Pasted%20image%2020250620164751.png)
    
10. 点击”确定“以启用VPN  
    ![](asserts/Pasted%20image%2020250620164809.png)
    
11. 看到手机状态栏出现了VPN图标，意味着你已经成功接入了从电脑上获取的节点。试着访问一下www.google.com
    ![](asserts/Pasted%20image%2020250620165140.png)
成功！
- 如果VPN已经启动，却无法正常访问谷歌。这可能是节点的问题，请尝试在电脑上分享一个可用的节点到手机上来进行连接。

## 方法二：通过代理使用你电脑上的 v2plus 网络

注：此方法需要手机和电脑连接在同一个局域网下

1. 在电脑上启动v2plus，点击“设置”，打开“参数设置”  
    ![image.png](https://www.tapd.cn/tfl/pictures/202506/tapd_60828855_1750232056_895.png "点击看原图")
    
2. 开启“允许来自局域网的连接”功能，并记录下你的“本地监听端口”，点击“确定”  
    ![image.png](https://www.tapd.cn/tfl/pictures/202506/tapd_60828855_1750233896_778.png "点击看原图")
    
3. 弹出“Windows安全中心”窗口后，点击“允许访问”  
    ![image.png](https://www.tapd.cn/tfl/pictures/202506/tapd_60828855_1750232307_184.png "点击看原图")
    
4. 获取你的局域网IP
    
    - 按下 `Win + R` 键，打开“运行”窗口。
        
    - 输入 `cmd`，然后按下回车，打开“命令提示符”。  
        ![image.png](https://www.tapd.cn/tfl/pictures/202506/tapd_60828855_1750235084_753.png "点击看原图")
        
    - 在命令行中输入此命令：`ipconfig`，然后按下回车
        
5. 记录下你的IPv4地址  
    ![image.png](https://www.tapd.cn/tfl/pictures/202506/tapd_60828855_1750232663_338.png "点击看原图")
    
6. 下面来到你的安卓手机上进行操作，首先打开“设置”  
    ![image.png](https://www.tapd.cn/tfl/pictures/202506/tapd_60828855_1750235502_483.png "点击看原图")
    
7. 进入“WLAN”  
    ![image.png](https://www.tapd.cn/tfl/pictures/202506/tapd_60828855_1750235623_838.png "点击看原图")
    
8. 点击你正在连接的网络  
    ![image.png](https://www.tapd.cn/tfl/pictures/202506/tapd_60828855_1750235905_173.png "点击看原图")
    
9. 点击“代理”，选择“手动”  
    ![image.png](https://www.tapd.cn/tfl/pictures/202506/tapd_60828855_1750237008_555.png "点击看原图")
    
10. 在“**主机名**”处填入<步骤5>中记录下的“**IPv4地址**”；  
    在“**端口**”处填入<步骤2>中记录下的“**本地监听端口**”：  
    点击“**确定**”按钮  
    ![image.png](https://www.tapd.cn/tfl/pictures/202506/tapd_60828855_1750237626_892.png "点击看原图")
    

配置完成，现在让我们在浏览器输入www.google.com  
![8b602cdd734efec7c0e694f630f93a55_compress.jpg](https://www.tapd.cn/tfl/pictures/202506/tapd_60828855_1750237769_811.jpg "点击看原图")  
访问成功！