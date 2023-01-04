---
keywords: [go,goroutain,routain,区块链,kubernetes,k8s,大厂,面试,高级,中级]
title: 'Header获取不到'
description:  go 教程
toc: content
nav:
 title: 即时通讯
 order: 2
group:
 title: 问题解决
 order: 3
---
# 程序上线之后，Header获取不到的问题
大家有没有遇到过，在本地测试可以获取到`Header`，但是到了正式线上环境就获取不到`Header`的情况？

### 原因：
可能是由于`Header`的`Key`中存在特殊字符，如：下划线`_`等。
### 解决：
*第一种*：如果不想折腾`Nginx`配置，则可以把`下划线`改为`中划线`：`-`，或者去掉`下划线`

*第二种*：配置`Nginx`支持下划线，在`Nginx`里的`nginx.conf`，配置文件中的`http`部分中添加如下配置：`underscores_in_headers on;`
>注：默认`underscores_in_headers`为`off`

