import fs from 'fs';

const data = fs.readFileSync('src/data.ts', 'utf8');
const urls = data.match(/https:\/\/images\.unsplash\.com\/[^\s'"]+/g) || [];
// add hero image
urls.push("https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=3540&auto=format&fit=crop");

async function run() {
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(3000) });
      console.log(`${res.status} = ${url}`);
    } catch (err) {
      console.log(`ERROR = ${url}`);
    }
  }
}
run();
