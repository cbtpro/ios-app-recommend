FROM nginx:1.21.6

COPY dist/ /usr/share/nginx/html/
COPY nginx.conf.template /etc/nginx/conf.d/default.conf

# 暴露80端口
EXPOSE 80

# 启动 nginx 服务器
CMD ["nginx", "-g", "daemon off;"]