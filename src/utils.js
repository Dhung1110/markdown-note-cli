const fs = require('fs');
const path = require('path');

const NOTES_DIR = path.join(process.env.HOME || process.env.USERPROFILE, 'notes');

function ensureNotesDir() {
  fs.mkdirSync(NOTES_DIR, { recursive: true });
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .substring(0, 50);
}

function formatDate(date) {
  return date.toISOString().replace('T', ' ').replace(/\.\d+Z$/, '');
}

function getNoteFiles() {
  ensureNotesDir();
  return fs.readdirSync(NOTES_DIR)
    .filter(f => f.endsWith('.md'))
    .sort()
    .map((file, index) => {
      const filePath = path.join(NOTES_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const titleMatch = content.match(/^# (.+)$/m);
      const dateMatch = content.match(/\*Created: (.+)\*/);
      return {
        id: index + 1,
        file,
        title: titleMatch ? titleMatch[1] : file,
        date: dateMatch ? dateMatch[1] : 'N/A',
        path: filePath,
      };
    });
}

module.exports = { NOTES_DIR, ensureNotesDir, slugify, formatDate, getNoteFiles };
