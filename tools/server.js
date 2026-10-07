const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = process.env.PORT || 8000;
const ROOT_DIR = path.resolve(__dirname, '..');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.wasm': 'application/wasm',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.swf': 'application/x-shockwave-flash',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
  '.m4a': 'audio/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.data': 'application/octet-stream',
  '.part1': 'application/octet-stream',
  '.part2': 'application/octet-stream',
  '.part3': 'application/octet-stream',
  '.unityweb': 'application/octet-stream',
  '.datagz': 'application/octet-stream',
  '.jsgz': 'application/javascript; charset=utf-8',
  '.track': 'text/plain; charset=utf-8',
  '.mem': 'application/octet-stream',
  '.memgz': 'application/octet-stream',
  '.pck': 'application/octet-stream',
  '.bundle': 'application/octet-stream',
  '.hash': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
  // CORS & Cross-Origin-Opener-Policy for WebAssembly and iframe embedding
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');

  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  let filePath = path.join(ROOT_DIR, reqPath);

  // If path is a directory, look for index.html inside it
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found: ' + reqPath);
    return;
  }

  const stat = fs.statSync(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  // Support HTTP Range requests (crucial for game audio/video assets)
  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;
    const chunksize = (end - start) + 1;
    const file = fs.createReadStream(filePath, { start, end });
    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${stat.size}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': contentType,
    });
    file.pipe(res);
  } else {
    res.writeHead(200, {
      'Content-Length': stat.size,
      'Content-Type': contentType,
      'Accept-Ranges': 'bytes'
    });
    fs.createReadStream(filePath).pipe(res);
  }
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}/`;
  console.log(`====================================================`);
  console.log(`🎮 Blooket1 Full Site Server is Running!`);
  console.log(`📍 URL: ${url}`);
  console.log(`👉 Press Ctrl+C to stop.`);
  console.log(`====================================================`);

  // Auto open browser on Windows
  const openCmd = process.platform === 'win32' ? `start ${url}` : `open ${url}`;
  exec(openCmd, (err) => {
    if (err) console.log(`Open manually: ${url}`);
  });
});
