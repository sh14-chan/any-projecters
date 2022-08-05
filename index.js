const fs = require('fs');
const fetch = require('node-fetch');

const url = 'https://cataas.com/cat';

async function run() {
    const res = await fetch(url);
    const data = await res.arrayBuffer();
    fs.writeFileSync('pogcat.png', Buffer.from(data));
}

run();