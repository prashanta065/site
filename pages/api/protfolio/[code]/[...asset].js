import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { code, asset } = req.query;
  const assetPath = path.join(process.cwd(), 'protfolio', code, asset.join('/'));
  if (!fs.existsSync(assetPath)) {
    res.status(404).send('Not found');
    return;
  }
  const ext = path.extname(assetPath).toLowerCase();
  let contentType = 'application/octet-stream';
  if (ext === '.css') contentType = 'text/css';
  if (ext === '.png') contentType = 'image/png';
  if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
  res.setHeader('Content-Type', contentType);
  res.send(fs.readFileSync(assetPath));
}
