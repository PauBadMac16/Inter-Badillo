const mongoose = require('mongoose');
let Schema = mongoose.Schema;
 
let departamentoSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Ingresar nombre del dpto']
    },
    id_jefe_de_area: {
        type: Schema.Types.ObjectId,
        ref: 'Jefe de area'
    },
    numero_empleados: {
        type: Number,
        required: true
    },
    extension_telefonica: {
        type: Number,
        default: true
    },
    activo:{
        type: Boolean,
        default: true
    }
});
 
module.exports = mongoose.model('Departamento', departamentoSchema);