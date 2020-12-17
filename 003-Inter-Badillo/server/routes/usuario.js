constexpress = require('express');
const_ = require('underscore');
constusuario = require('../models/usuario');
constUsuario = require('../models/usuario');
constapp = express();
 
    app.get('/usuario', function (req, res) {
    // Ordenar:
    letdesde = req.query.desde || 0;
    lethasta = req.query.hasta || 5;
 
    Usuario.find({ estado:true })
        .skip(Number(desde))
        .limit(Number(hasta))
        .exec((err, usuarios) => {
    if (err) {
        returnres.status(400).json({
        ok:false,
        msg:'Error al consultar',
        err
            });
            }
    // Respuesta exitosa:
    res.json({
    ok:true,
    msg:'Muestreo exitoso',
    conteo:usuarios.length,
    usuarios
            });
        });
    });
 
    app.post('/usuario', function(req,res){
        letbody = req.body;
        letusr = newUsuario({
        nombre:body.nombre,
        primerApellido:body.primerapellido,
        segundoApellido:body.segundoApellido,
        edad:body.edad,
        curp:body.curp,
        telefono:body.telefono,
        mail:body.email,
        activo:body.activo
    });
        
    usr.save((err, usrDB) => {
    // Si hubo algún error:
    if (err){
    returnres.status(400).json({
        ok:false,
        msg:'Algo fallo ',
        err
        });
    }
    res.json({
    ok:true,
    msg:'Insercion exitosa',
    usrDB
            });
        });
 
        });
 
        app.put('/usuario/:id', function(req, res) {
          let id = req.params.id;
          let body = _.pick(req.body, ['nombre','primerApellido', 'segundoApellido', 'edad', 'curp', 'telefono', 'mail', 'activo');
      
          Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' },
              (err, usrDB) => {
                  if (err) {
                      return res.status(400).json({
                          ok: false,
                          msg: 'Error al actualizar',
                          err
                      });
                  }
      
                  res.json({
                      ok: true,
                      msg: 'Actualizacion exitosa',
                      usuario: usrDB
                  });
              });
      });
      app.delete('/usuario/:id', function(req, res){
        let id = req.params.id;
    
        Usuario.findByIdAndUpdate(id, {estado: false }, {new: true, runValidators: true, context: 'query'},
        (err, usrDB) =>{
          if (err){
                  return res.status(400).json({
                    ok: false,
                    msg: 'Error al eliminar',
                    err
                  });
                }
                res.json({
                  ok: true,
                  msg: 'Eliminacion exitosa',
                  usrDB 
                });
        });
      });
    module.exports = app;