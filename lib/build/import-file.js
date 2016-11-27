'use strict';

const fs = require('fs');

/**
 * This function read file from ./files folder and create file with data from label file
 * @param  {[string]} label [label file from ./files]
 * @param  {[string]} path  [path for new file]
 */
function importFile(label, path) {
  fs.readFile(__dirname + `/../../files/${ label }`, 'utf8', (err, data) => {
    if (err) throw err;

    fs.writeFile(path, data, err => {
      if (err) throw err;
    });
  });
}

module.exports = importFile;