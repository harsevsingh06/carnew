const queries = ['mercedes s-class', 'range rover', 'lamborghini urus', 'rolls royce ghost'];

async function search() {
  for (const q of queries) {
    const res = await fetch(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(q)}&per_page=1`);
    const json = await res.json();
    if (json.results && json.results.length > 0) {
      console.log(`${q} -> ${json.results[0].id}`);
    } else {
      console.log(`${q} -> NOT FOUND`);
    }
  }
}
search();
