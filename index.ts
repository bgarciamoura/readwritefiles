import express from 'express';
import fs from 'fs';

const server = express();

server.listen(3333, () => {
    console.log('🚀 Server running on port 3333 ');

    const filenames = fs.readdirSync('./files');
    var data = '';

    filenames.forEach((file) => {
        data = data + fs.readFileSync(`./files/${file}`, { encoding: 'utf-8' }) + '\n';
    });

    fs.writeFileSync('temp.txt', data);

    console.log(data);
});
