---
keywords: [go,goroutain,routain,区块链,kubernetes,k8s,大厂,面试,高级,中级]
title: 'Go'
description:  go 教程
---
# Go

### 程序上线之后Header获取不到的问题
可能是由于`Header`中的字段存在特殊字符，如：下划线等，需要配置`Nginx`支持下划线，解决方法是：在`Nginx`里的`nginx.conf`配置文件中的`http`部分中添加如下配置：

`underscores_in_headers on;`
>默认 underscores_in_headers 为off。

如果不想折腾`Nginx`配置，则可以把下划线改为中划线：`-`，或者去掉下划线
### 
