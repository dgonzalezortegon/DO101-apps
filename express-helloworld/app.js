var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('<html><b>Hello World   my name is Dani!</b> <br> <body>  <br> <h2> Click here ->  <a href=mars> here </a> to go to mars.</h2></body></html>')
  });


app.get('/mars', function (req, res) {
  res.send('<h1 >Dani says  Hello to Mars!</h1>\n');
});


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

