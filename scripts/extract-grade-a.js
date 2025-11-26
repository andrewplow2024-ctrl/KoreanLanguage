import * as XLSX from 'xlsx';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const excelPath = path.join(__dirname, '../한국어 학습용 어휘 목록.xls');

const readFile = XLSX.default.readFile;
const utils = XLSX.default.utils;

const workbook = readFile(excelPath);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

const data = utils.sheet_to_json(sheet, { header: 1 });

// Column indices based on inspection:
// 0: 순위 (Rank)
// 1: 단어 (Word)
// 2: 품사 (Part of Speech)
// 4: 등급 (Grade)

const gradeAWords = data
    .slice(1) // Skip header
    .filter(row => row[4] === 'A') // Filter for Grade A
    .map(row => ({
        word: row[1],
        pos: row[2]
    }))
    .slice(0, 30); // Get top 30 for now

console.log(JSON.stringify(gradeAWords, null, 2));
