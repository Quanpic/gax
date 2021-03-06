'use strict';

const fs = require('fs');

let paths = {};

function showFiles() {
	fs.readFile(__dirname + '/../../files/paths/paths.json', 'utf8', (err, data) => {
		if (err) throw err;

		paths = JSON.parse(data);

		for (let i = 0; i < paths.length; i++) {
			console.log(`${ i } => ${ paths[i] }`);
		}
	});
}

module.exports = showFiles;