#!/usr/bin/env node
const path_mod = require('path');
const program = require('commander');
const exportFile = require('../lib/build/export-file');
const importFile = require('../lib/build/import-file');
const showLabels  = require('../lib/build/show-labels');
const deleteLabel = require('../lib/build/delete-label');
const version = require('../package.json').version;


program
	.version(version);

program
	.command('collect [path]')
	.description('select file')
	.option('-l --label [label]', 'select label for your file')
	.action((path, label) => {
		exportFile(path_mod.resolve(path), label.label);
	});

program
	.command('import [label]')
	.description('select file by label')
	.option('-p --path [path]', 'select path for file')
	.action((label, path) => {
		importFile(label, path_mod.resolve(path.path));
	});

program
	.command('labels')
	.action(() => {
		showLabels();
	});

program
	.command('delete [label]')
	.action((label) => {
		deleteLabel(label);
	});

program.parse(process.argv);
