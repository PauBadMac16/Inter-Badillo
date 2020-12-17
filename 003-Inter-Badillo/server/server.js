require ('../server/config/config');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
 
app.get('/', function (req, res) {
    res.send('este es mi inter');
  });
  app.use(require('./models/usuario'));
//   //aqui empieza el get
//   app.get('/usuario', function (req, res){
//     res.json({
//         ok: 200, 
//         mensaje:'Usuario consultado'
//     })
// })
// //este es el post
//    app.post('/usuario', function (req, res){
//        let nombre = req.body.nombre;
//        let body = req.body;
//        res.json({
//            ok: 200, 
//            mensaje:'Usuario insertado con exito',
//           body:body 
//        })
//   })
//    //aqui va el delete
 
//    app.delete('/usuario/:id', function(req, res){
//     let id = req.params.id;
 
//     Usuario.findByIdAndUpdate(id, {estado: false }, {new: true, runValidators: true, context: 'query'},
//     (err, usrDB) =>{
//       if (err){
//               return res.status(400).json({
//                 ok: false,
//                 msg: 'Ocurrió un error al momento de eliminar.',
//                 err
//               });
//             }
//             res.json({
//               ok: true,
//               msg: 'Usuario eliminado exitosamente.',
//               usrDB //Declarado en línea 176.
//             });
//     });
//   });
 
//    //aqui va pone el put
//    app.put('/usuario', function (req, res){
//     let id = req.params.id
//     let nombre = req.params.nombre;
//     res.json({
//         ok: 200,
//         mensaje: 'Usuario actualizado con exito',
//         id: id,
//         nombre: nombre
//     })
// })
 
// Conexión a la base de datos Mongoose:
mongoose.connect('mongodb://localhost:27017/003-Inter-Badillo', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }, (err, res) => {
  
   if (err) throw err;
   console.log('BDD ONLINE');
  });
 
app.listen(3000, () => {
    console.log('El servidor esta en la linea por el puerto 3000')
});