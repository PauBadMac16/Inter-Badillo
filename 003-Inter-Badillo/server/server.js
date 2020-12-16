const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  res.send('Paseme!');
})
 
app.listen(3000, () => {
    console.log('El servidor esta en linea en el puerto 3000')
});