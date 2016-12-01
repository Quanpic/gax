const chai = require('chai');
const fs = require('fs');
const path = require('path');
chai.use(require('chai-fs-latest'));
const exportFile = require('../lib/build/export-file');
const expect = chai.expect;

describe('exportFile()', () => {

  function e(file) {
    exportFile(path.resolve('test/' + file), 'testFile');
  }
  

  beforeEach(() => {
    e('testFile.md');
  });

  afterEach((done) => {
    fs.unlink(path.resolve('files/testFile'), (err) => {
      if (err) {
        done(err);
      } else {
        done();
      }
    });
  });


  it('экспортирует файл', function () {
    expect('./files/testFile').to.be.a.file();
  });

});
