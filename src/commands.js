const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { NOTES_DIR, ensureNotesDir, slugify, formatDate, getNoteFiles } = require('./utils');

function addNote(title, content) {
  ensureNotesDir();
  const timestamp = Date.now();
  const slug = slugify(title);
  const filename = `${timestamp}-${slug}.md`;
  const filePath = path.join(NOTES_DIR, filename);
  const now = formatDate(new Date());

  const md = `# ${title}

*Created: ${now}*

${content}
`;

  fs.writeFileSync(filePath, md, 'utf-8');
  console.log(chalk.green(`✅ Note created: ${filename}`));
  console.log(chalk.gray(`   ${filePath}`));
}

function listNotes() {
  const notes = getNoteFiles();
  if (notes.length === 0) {
    console.log(chalk.yellow('No notes found.'));
    return;
  }
  console.log(chalk.bold(`\n📝 Notes (${notes.length}):\n`));
  notes.forEach(n => {
    console.log(chalk.cyan(`  ${n.id}.`) + ` ${chalk.bold(n.title)} ${chalk.gray(`(${n.date})`)}`);
  });
  console.log();
}

function viewNote(id) {
  const notes = getNoteFiles();
  const note = notes.find(n => n.id === parseInt(id));
  if (!note) {
    console.log(chalk.red(`❌ Note #${id} not found.`));
    return;
  }
  const content = fs.readFileSync(note.path, 'utf-8');
  console.log(chalk.bold(`\n📄 ${note.title}\n`));
  console.log(content);
}

function deleteNote(id) {
  const notes = getNoteFiles();
  const note = notes.find(n => n.id === parseInt(id));
  if (!note) {
    console.log(chalk.red(`❌ Note #${id} not found.`));
    return;
  }
  fs.unlinkSync(note.path);
  console.log(chalk.green(`🗑️  Deleted: ${note.title}`));
}

module.exports = { addNote, listNotes, viewNote, deleteNote };
