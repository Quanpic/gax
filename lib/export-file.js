const fs = require('fs');

let paths = {};

function exportFile(path, label) {
	fs.readFile(path, 'utf8', (err, data) => {
		if (err) throw err;

		fs.writeFile(__dirname + `/../../files/${label}`, data, (err) => {
			if (err) throw err;

			paths = JSON.parse(fs.readFileSync(__dirname + '/../../files/paths/paths.json', 'utf8'));
			paths[label] = path;
			let json = JSON.stringify(paths, null, 2);

			fs.writeFile(__dirname + '/../../files/paths/paths.json', json, 'utf8', (err) => {
				if (err) {
					throw err;
				} else {
					console.log(`\n ⭐  File successfully copied \n`);
				}
			});
		});
	});
}

module.exports = exportFile;
