var https = require('https');

function htmlToPdf(options, cb) {
  var jsonRequest = JSON.stringify(options);

  var httpOptions = {
    hostname: 'www.hypdf.com',
    port: 443,
    path: '/htmltopdf',
    method: 'POST'
  };

  var req = https.request(httpOptions, function(res) {
    cb(null, res);
  });

  req.on('error', cb);

  req.setHeader('Accept', '*/*');
  req.setHeader('Content-Type', 'application/json');
  req.setHeader('Content-Length', jsonRequest.length);
  req.write(jsonRequest);

  req.end();
}

module.exports = {
  htmlToPdf: htmlToPdf
};
