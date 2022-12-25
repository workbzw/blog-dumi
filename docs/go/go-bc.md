---
keywords: [go,goroutain,routain,区块链,kubernetes,k8s,大厂,面试,高级,中级]
title: '区块链'
description:  go 教程
toc: content
nav:
 title: Go
 order: 0
group:
 title: 区块链
 order: 1
---

# 区块链

## Others
### 程序上线之后Header获取不到的问题
大家有没有遇到过，在本地测试可以获取到`Header`，但是到了正式线上环境就获取不到`Header`的情况？这种情况可能是由于`Header`的Key中存在特殊字符，如：下划线等，此时，需要配置`Nginx`支持下划线
解决方法是：在`Nginx`里的`nginx.conf`，配置文件中的`http`部分中添加如下配置：
`underscores_in_headers on;`
注：默认 underscores_in_headers 为off。
如果不想折腾`Nginx`配置，则可以把下划线改为中划线：`-`，或者去掉下划线
