# livehub-node

## 目录结构
```
|-- livehub-node
    |-- src                       // 源码
    |   |-- app.ts                // 关键项
    |   |-- server.ts             // 服务器
    |   |-- taos.ts               // taos 数据库
    |   |-- controllers           // 控制器
    |   |   |-- height.ts
    |   |-- interface             // 接口文件
    |   |   |-- response.ts
    |   |-- middlewares           // 中间件
    |   |   |-- handleLog.ts
    |   |-- util                  // 工具
    |       |-- logger.ts
    |       |-- secrets.ts
    |       |-- tools.ts
    |-- test                      // 测试
        |-- height.html
    |-- .env.example
    |-- .eslintrc
    |-- .gitignore
    |-- package.json
    |-- README.md
    |-- tsconfig.json
```

## NPM 包依赖
|名称|作用|
|-|-|
|express|主框架|
|body-parser|请求体解析|
|dotenv|环境变量文件解析|
|errorhandler|开发时错误解析|
|td-connector|TDengine 数据库|
|winston|主要日志管理|
|winston-daily-rotate-file|日志文件按时间切割|
|morgan|express 原生日志|
|mkdirp|生成目录|

## 安装 & 使用

### 1.安装
```
git clone git@github.com:livehub-root/livehub-node.git
```

### 2.npm install
```
npm install --save
npm install --save-dev
```

### 3. typescript 编译
```
tsc
```

### 4.使用
```
npm run serve
```

### 5.后台使用
```
nohup npm start &
```
启动后日志会输出到 nohup.out 文件中，这个文件可以帮助查找问题

停止之前的启动
```
// 查看 10004 端口上是否有之前的启动
netstat -apn | grep 10004
// 如果有，杀掉。现在假设 10004 端口上的程序的进程号为 387465
kill -9 387465
```
