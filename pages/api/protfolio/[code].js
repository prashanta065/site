import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { code } = req.query;
  const baseDir = path.join(process.cwd(), 'protfolio', code);
  const indexPath = path.join(baseDir, 'index.html');

  if (!fs.existsSync(indexPath)) {
    res.status(404).send('Not found');
    return;
  }

  let html = fs.readFileSync(indexPath, 'utf-8');

  // Fix CSS and image paths
  html = html.replace(/href=["']style\.css["']/g, `href="/protfolio/${code}/style.css"`);
  html = html.replace(/src=["'](hc\.png|hcb\.png|pb\.jpg)["']/g, `src="/protfolio/${code}/images/$1"`);
  html = html.replace(/src=["']images\//g, `src="/protfolio/${code}/images/`);

  res.setHeader('Content-Type', 'text/html');
  res.send(html);
}
