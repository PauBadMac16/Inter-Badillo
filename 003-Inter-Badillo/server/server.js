require ('./config/config.js');
const express = require ('express');    
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 


app.get('/', function (req, res) {
    res.send('Esta es mi practica intercuatrimestral');
  });

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
   //aqui se pone el delete



   app.put('/usuario/:id/:nombre ', function (req, res){
    let id = req.params.id
    let nombre = req.params.nombre;
    res.json({
        ok: 200,
        mensaje: 'Usuario actualizado',
        id: id,
        nombre: nombre
    })
})

  app.listen(process.env.PORT, () => {
    console.log('El servidor está en línea en el puerto:  ', process.env.PORT);
    });