const fs = require('fs');

/**
 * This function read selected file and create file with data from path file with and label-name
 * @param  {[type]} path  [selected file]
 * @param  {[type]} label [file in ./files folder]
 */
function exportFile(path, label) {
	fs.readFile(path, 'utf8', (err, data) => {
		if (err) throw err;

		console.log(__dirname + `/../../files/${label}`);

		fs.writeFile(__dirname + `/../../files/${label}`, data, (err) => {
			if (err) throw err;
			// console.log(data);
		});
	});
}

module.exports = exportFile;
