// require ('./config/config.js');
const express = require ('express');    
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 


app.get('/', function (req, res) {
    res.send('Paseme!');
  });
  app.use(require('./routes/usuario'));
  
  app.get('/usuario', function (req, res){
    res.json({
        ok: 200, 
        mensaje:'Consulta exitosa'
    })
})
 
app.post('/usuario', function (req, res){
    let nombre = req.body.nombre;
    let body = req.body;
    res.json({
        ok: 200, 
        mensaje:'Insercion exitosa',
       body:body 
    })
})
app.put('/usuario', function (req, res){
    let id = req.params.id
    let nombre = req.params.nombre;
    res.json({
        ok: 200,
        mensaje: 'Actualizacion exitosa',
        id: id,
        nombre: nombre
    })
})
app.delete ('/usuario/:id', function (req, res){ 
    let id = req.params.id
    
    res.json({
        ok: 200,
        mensaje: 'Eliminacion exitosa',
        id: id
    })
    })
 mongoose.connect('mongodb://localhost:27017/003-Inter-Badillo', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}, (err, res) => {

 if (err) throw err;
 console.log('BDD ONLINE ');
});
  app.listen(3000, () => {
      console.log('El servidor esta en la linea por el puerto 3000')
  });