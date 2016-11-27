#!/usr/bin/env node
const path_mod = require('path');
const program = require('commander');
const exportFile = require('../lib/build/export-file');
const importFile = require('../lib/build/import-file');
// console.log(path_mod.resolve(__dirname + '/lib/build/export-file'));
// const exportFile = require(__dirname + '/../lib/build/export-file');

program
	.version('0.0.1');

program
	// .option('-gf --getfile <label> <path>', 'get file')
	// .option('-i --import <label>', 'import file')
	.command('collect [path]')
	.description('select file')
	.option('-l --label [label]', 'select label for your file')
	.action((path, label) => {
		console.log(path_mod.resolve(path));
		exportFile(path_mod.resolve(path), label.label);
	});

program
	.command('import [label]')
	.description('select file by label')
	.option('-p --path [path]', 'select path for file')
	.action((label, path) => {
		console.log(label);
		importFile(label, path_mod.resolve(path.path));
	});

program.parse(process.argv);
