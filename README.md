# livehub-node

nohup npm run serve &

## 如何启动
1. 如果没有安装依赖，请先执行安装依赖的命令
```
npm install
```

2. 编译代码
```
tsc
```

3. 停止之前的启动
```
// 查看 10004 端口上是否有之前的启动
netstat -apn | grep 3000
// 如果有，杀掉。现在假设 3000 端口上的程序的进程号为 387465
kill -9 387465
```

3. 启动
```
nohup npm run serve &
// 启动后日志会输出到 nohup.out 文件中，这个文件可以帮助查找问题
```