const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');

const filePath = `${__dirname}/../front/www`;

const app = express();

const apiProxy = httpProxy.createProxyServer({
  target:"http://localhost:3001",
});
app.use('/api', (req, res) => {
  apiProxy.web(req, res);
});

app.use(express.static(filePath));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(filePath, 'index.html'));
});

app.listen(3000, () => {
  console.log('app is listening on port 3000');
});
