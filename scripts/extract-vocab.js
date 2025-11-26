import fs from 'fs';
import pdf from 'pdf-parse';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pdfPath = path.join(__dirname, '../TOPIK-I-1671.pdf');
const dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
}).catch(err => {
    console.error('Error:', err);
});
