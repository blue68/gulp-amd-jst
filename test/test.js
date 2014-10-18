'use strict';

var assert = require('assert');
var compile = require('../index');
var gutil = require('gulp-util');
var fs = require('fs');


describe('gulp-jst', function() {
  it('should compile Lodash template into string', function(done) {
    var stream = compile();

    var fakeBuffer = new Buffer('Hello <%= name %>!');
    var fakeFile = new gutil.File({
      contents: fakeBuffer
    });

    stream.on('data', function(file) {
      assert.equal(file.contents.toString(), fs.readFileSync(__dirname + '/expected/hello.js'));
    });

    stream.on('end', function() {
      done();
    });

    stream.write(fakeFile);
    stream.end();
  });

  it('should compile Lodash template into string with amd', function(done) {
    var stream = compile({
      amd : true,
      prettify : true,
      namespace : false
    });

    var fakeBuffer = new Buffer('Hello <%= name %>!');
    var fakeFile = new gutil.File({
      contents: fakeBuffer
    });

    stream.on('data', function(file) {
      var content = fs.readFileSync(__dirname + '/expected/hello-amd.js').toString();
      assert.equal(file.contents.toString(), content);
    });

    stream.on('end', function(file) {
      done();
    });

    stream.write(fakeFile);
    stream.end();
  });
});
