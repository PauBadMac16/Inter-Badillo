constmongoose = require('mongoose');
letSchema = mongoose.Schema;
 
let usuarioSchema = newSchema({​​​​​​​​
nombre: {​​​​​​​​
type:String,
required: [true, 'Ingresar nombre']
    }​​​​​​​​,
primer_apellido: {​​​​​​​​
type:String,
required: [true, 'Ingresar primer apellido']
    }​​​​​​​​,
segundo_apellido: {​​​​​​​​
type:String,
required: [true, 'Ingresar segundo apellido']
    }​​​​​​​​,
edad:{​​​​​​​​
type:Number, 
required: [true, 'Ingresar edad']
    }​​​​​​​​,
curp:{​​​​​​​​
type:String,
required: [true, 'Ingresar curp']
    }​​​​​​​​,
telefono:{​​​​​​​​
type:Number,
required: [true, 'Ingresar No. de telefono']
    }​​​​​​​​,
mail:{​​​​​​​​
type:String,
unique: [true, 'Ingresar correo electronico']
    }​​​​​​​​,
activo:{​​​​​​​​
type:Boolean,
default:true
    }​​​​​​​​
}​​​​​​​​);
 
module.exports = mongoose.model('Usuario', usuarioSchema);

