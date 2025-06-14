---
title: 跨域问题怎么处理？
---

# 跨域问题怎么处理？

跨域是由浏览器的**同源策略**所引起的资源访问的一种安全限制。

浏览器为了避免不同源之间的恶意交互，限制了脚本只能访问同源的资源。所谓同源是指**协议、域名和端口**都相同。

跨域可分为：

- 客户端与客户端通信的跨域
- 客户端与服务端通信的跨域

我们通常说的跨域问题主要是客户端与服务器之间通信的跨域。

## 跨域的原因

如果A站点与B站点不同源，那么当A站点的脚本想要访问B站点的资源时，就会被浏览器阻止。因此，跨域是浏览器的限制，也只会存在于浏览器环境中。

## 解决方案

### 1. JSONP <Badge text="不推荐" type="danger"></Badge>

利用了`script`标签不受同源策略限制的特点，通过动态创建`script`标签来实现跨域请求。服务端需要返回一个函数回调的js代码，并将数据作为参数传入，并且客户端需要提前定义好这个回调函数。因此，此方法只能发送GET请求。现在已不推荐使用。

### 2. CORS

CORS（Cross-Origin Resource Sharing）是W3C标准，它允许浏览器向跨源服务器发送Ajax请求，从而克服了同源策略的限制。

CORS需要服务端通过设置HTTP响应头来允许跨域请求。常用的响应头包括：

- `Access-Control-Allow-Origin`：允许跨域请求的域名
- `Access-Control-Allow-Methods`：允许跨域请求的方法
- `Access-Control-Allow-Headers`：允许跨域请求的头部
- `Access-Control-Allow-Credentials`：允许跨域携带cookie

### 3. 反向代理

反向代理是代理服务器将客户端发送的请求转发到真实的服务器端，并将真实的服务器端的响应返回给客户端，从而避免了不同源的问题。

- 开发环境：使用webpack或vite的`devServer.proxy`配置来实现反向代理。
- 生产环境：使用Nginx服务器配置来实现反向代理。
  
```nginx
# nginx配置反向代理
location /api {
  proxy_pass https://target-api.com;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
}
```

### 其他方案

- WebSocket：WebSocket协议允许跨域通信，但需要服务端支持，一般不会用它来解决http的跨域问题。
- postMessage：window.postMessage()方法可以实现客户端之间的跨域通信。
- document.domain：通过设置document.domain可以实现不同子域之间的跨域通信。

<ClientOnly>
  <PostMessageTest/>
</ClientOnly>

<script setup>
import PostMessageTest from './components/PostMessageTest.vue';
</script>