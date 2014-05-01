var assert = require('assert');
var elpdf = require('./../');
var fs = require('fs');
var outputFilename = 'output.pdf';
var finished = false;

elpdf.htmlToPdf({
  user: process.env.HYPDF_USER,
  password: process.env.HYPDF_PASSWORD,
  content: '<html><body><p>This is some text</p></body></html>',
  test: true
}, function(err, res) {
  assert(!err, err);
  var output = fs.createWriteStream(outputFilename);
  output.on('close', function() {
    var stats = fs.statSync(outputFilename);
    assert(stats.size);
    finished = true;
  });
  res.pipe(output);
});

process.on('exit', function() {
  assert(finished);
});