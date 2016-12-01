const fs = require('fs');

let paths = {};

function showLabels() {
	fs.readFile(__dirname + '/../../files/paths/paths.json', 'utf8', (err, data) => {
		if (err) throw err;

		paths = JSON.parse(data);
		
		for (let i in paths) {
			console.log(`\n ⚪  List of files \n`);
			console.log(`${i}    =>    ${paths[i]}`);
			console.log('\n');
		}
	});
}

module.exports = showLabels;
