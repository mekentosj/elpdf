## ElPDF

El Pdf is a node wrapper for the HyPDF Heroku add-on. It uses the built-in https module.

```js
elpdf.htmlToPdf({
  user: process.env.HYPDF_USER,
  password: process.env.HYPDF_PASSWORD,
  content: '<html><body><p>This is some text</p></body></html>',
  test: true
}, function(err, res) {
  assert(!err, err);
  var output = fs.createWriteStream(outputFilename);
  res.pipe(output);
});
```

### Running the tests

You need to set the `HYPDF_USER` and `HYPDF_PASSWORD` environmental variables in your shell. These are provided by Heroku.

To run the test, type `npm test` in your shell.