# IOS APP推荐

## 预览

- 手机扫码访问(需代理)

  ![手机扫码访问(需代理)](./qr-code-vercel.png)

预览图

## 开发环境

- node v18

## 开发指南

- 复制.env.example 到.env，这里存放API请求地址。

  ```sh
  cp .env.example .env
  ```

- 使用 node v18
- 安装依赖
  
  ```sh
  npm i
  ```

- 运行开发环境

  ```sh
  npm run dev
  ```

- 编译静态文件

  ```sh
  npm run generate
  ```
  使用 vite 运行项目
  ```sh
  npm install -g vite
  cd dist && vite
  ```

## docker

### 使用 docker 请先登录

```sh
docker login
```

### 创建docker容器镜像

```sh
docker build --pull --rm -f "Dockerfile" -t ios-app-recommend:0.0.1 "."
```

### 启动容器

```sh
docker run -d --name ios-app-recommend -p 8888:3000 ios-app-recommend:0.0.1
```

然后可以通过本机 ip 地址访问，可以通过手机扫描 ip 生成的地址访问。

### 停止容器

```sh
# 列出正在运行的容器
docker ps
# 使用container id停止容器 推荐方式 docker stop 容器id
docker stop 021507f525b3
# 使用名称停止容器
docker stop ios-app-recommend
```
### 删除容器

```sh
# 生产和测试不建议直接删除，应该生成新版本的容器
docker rm fake-wechat-client
```

## 设计稿尺寸 750px

## 引入 vant

```shell
npm i vant @vant/nuxt -D
```

## typings

所有类型定义放在 `typings`文件夹中

## 工具附录

- json 转 ts 接口 <https://loocode.com/tool/json-to-typescript>
- postman

## 已知问题

vant 集成 nuxt 水合的警告 runtime-core.esm-bun….js?v=b1da173b:3632 Hydration completed but contains mismatches. <https://github.com/youzan/vant/issues/12548>

## 待添加

- 端到端测试
- 单元测试（RFC 阶段）