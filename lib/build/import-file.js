'use strict';

const fs = require('fs');

function importFile(label, path) {
  fs.readFile(__dirname + `/../../files/${ label }`, 'utf8', (err, data) => {
    if (err) throw err;

    fs.writeFile(path, data, err => {
      if (err) {
        throw err;
      } else {
        console.log(`\n 🎉  File successfully saved \n`);
      }
    });
  });
}

module.exports = importFile;