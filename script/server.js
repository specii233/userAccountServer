const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const fs = require("fs");

const app = express();
app.use(bodyParser.json()); // 解析JSON请求体

// 处理POST请求
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("收到登录请求:", { email, password });

  // 模拟验证逻辑
  if (email === "test@example.com" && password === "123456") {
    res.json({ message: "登录成功！" });
  } else {
    res.status(401).json({ message: "邮箱或密码错误！" });
  }
});

// 读取HTTPS证书（自签名，仅用于开发）
const options = {
  key: fs.readFileSync("key.pem"),    // 私钥
  cert: fs.readFileSync("cert.pem"),  // 证书
};

// 启动HTTPS服务器
const PORT = 3000;
https.createServer(options, app).listen(PORT, () => {
  console.log(`HTTPS服务器运行在 https://localhost:${PORT}`);
});