const express = require('express');
const app = express();

const port = 3000;

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get('/', (req, res) => {
  const response = {compiler: 'TypeScript', framework:"React"};
  res.json(response);
});

app.listen(port, () => {
  console.log(`server started!
  listening on port ${port}
  visiting http://localhost:${port}`);
});
