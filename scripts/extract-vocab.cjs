const fs = require('fs');
const pdfLib = require('pdf-parse');
const path = require('path');

const pdfPath = path.join(__dirname, '../TOPIK-I-1671.pdf');
const dataBuffer = fs.readFileSync(pdfPath);

// Handle different export structures
// In some versions/environments it's the default export, in others it's a named export, or the module itself
const pdf = pdfLib.default || pdfLib.PDFParse || pdfLib;

console.log('Using PDF parser:', typeof pdf);

if (typeof pdf === 'function') {
    pdf(dataBuffer).then(function (data) {
        // Just output the text for now so we can see format
        console.log(data.text);
    }).catch(err => {
        console.error('Error parsing PDF:', err);
    });
} else {
    console.error('Could not find pdf function. Exports:', Object.keys(pdfLib));
}
