const mongoose = require('mongoose');
let Schema = mongoose.Schema;
 
let empleadoSchema = new Schema({
    nombredepuesto: {
        type: String,
        required: [true, 'Ingresar puesto']
    },
    id_usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Ingresar usuario'
    },
 
    id_departamento: {
        type: Schema.Types.ObjectId,
        ref: 'Dpto'
    },
    anosdeservicio: {
        type: Number,
        required: true
    },
    hora_entrada: {
        type: Number,
        default: 6-1
    },
    hora_salida:{
        type: Number, 
        default: 21
    },
    activo:{
        type: Boolean,
        default: true
    }
});
 
module.exports = mongoose.model('Empleado', empleadoSchema);