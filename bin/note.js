#!/usr/bin/env node

const { Command } = require('commander');
const { addNote, listNotes, viewNote, deleteNote } = require('../src/commands');

const program = new Command();

program
  .name('note')
  .description('Markdown Note CLI - manage your notes from the terminal')
  .version('1.0.0');

program
  .command('add')
  .description('Create a new note')
  .argument('<title>', 'Note title')
  .argument('<content>', 'Note content')
  .action((title, content) => addNote(title, content));

program
  .command('list')
  .description('List all notes')
  .action(() => listNotes());

program
  .command('view')
  .description('View a note by ID')
  .argument('<id>', 'Note ID')
  .action((id) => viewNote(id));

program
  .command('delete')
  .description('Delete a note by ID')
  .argument('<id>', 'Note ID')
  .action((id) => deleteNote(id));

program.parse();
