const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const allUsers = ['Hansheng', 'Jason', 'Aiden', 'Emily', 'Eli', 'Hanz', 'Han', 'Trent', 'Ethan', 'Kamron'];

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())


app.get('/allUser', function (req, res) {
  
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});