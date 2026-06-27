import https from 'https';
import fs from 'fs';

const data = fs.readFileSync('src/data.ts', 'utf8');
const urls = data.match(/https:\/\/images\.unsplash\.com\/[^\s'"]+/g) || [];

const checkUrl = (url) => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (err) => {
      resolve({ url, status: 0, err: err.message });
    });
  });
};

Promise.all(urls.map(checkUrl)).then((results) => {
  results.forEach(r => console.log(`${r.status} = ${r.url}`));
});
