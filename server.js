// Lara Site — servidor estático zero-dependências
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.ico':  'image/x-icon',
  '.json': 'application/json',
  '.woff2':'font/woff2',
};

http.createServer((req, res) => {
  let url = decodeURIComponent(req.url.split('?')[0]);
  if (url === '/') url = '/index.html';
  const filePath = path.join(ROOT, url);
  if (!filePath.startsWith(ROOT)) { res.writeHead(403); return res.end('forbidden'); }
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404, {'Content-Type':'text/plain'}); return res.end('404'); }
    res.writeHead(200, {'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream'});
    res.end(data);
  });
}).listen(PORT, () => console.log(`[lara-site] http://0.0.0.0:${PORT}`));
