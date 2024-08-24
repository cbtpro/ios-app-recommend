# 使用官方的 Node.js 作为基础镜像
FROM node:18-alpine

# 设置工作目录为 /app
WORKDIR /app

# 复制 package.json 和 lock 文件到工作目录
COPY package.json package-lock.json ./
COPY .env.example .env

# 安装依赖
RUN npm install --production

# 复制所有文件到工作目录
COPY . .

# 构建 Nuxt.js 项目
RUN npm run build

# 暴露容器的端口
EXPOSE 3000

# 启动应用程序
CMD ["npm", "start"]
