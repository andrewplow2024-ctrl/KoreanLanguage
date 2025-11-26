import * as XLSX from 'xlsx';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const excelPath = path.join(__dirname, '../한국어 학습용 어휘 목록.xls');

// Use the working access method found in debug
const readFile = XLSX.default.readFile;
const utils = XLSX.default.utils;

const workbook = readFile(excelPath);

console.log('Sheet Names:', workbook.SheetNames);

workbook.SheetNames.forEach(sheetName => {
    console.log(`\n--- Sheet: ${sheetName} ---`);
    const sheet = workbook.Sheets[sheetName];
    const data = utils.sheet_to_json(sheet, { header: 1 });

    // Print first 10 rows
    console.log(JSON.stringify(data.slice(0, 10), null, 2));
});
