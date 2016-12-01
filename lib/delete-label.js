const fs = require('fs');

let paths = {};

function deleteLabel(label) {
	fs.unlink(__dirname + `/../../files/${label}`, (err) => {
		if (err) throw err;

		paths = JSON.parse(fs.readFileSync(__dirname + '/../../files/paths/paths.json', 'utf8'));
		delete paths[label];
		let json = JSON.stringify(paths, null, 2);

		fs.writeFile(__dirname + '/../../files/paths/paths.json', json, 'utf8', (err) => {
			if (err) {
				throw err;
			} else {
				console.log(`\n ⚡  File successfully deleted \n`);
			}
		});
	});
}

module.exports = deleteLabel;