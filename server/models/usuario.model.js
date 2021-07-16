const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre del usuario es requerido"]
    },
    email: {
        type: String,
        required: [true, "Debe ingresar su correo electrónico"]
    },
    password: {
        type: String,
        required: [true, "Debe ingresar su contraseña"]
    },
}, {timestamps: true});

UsuarioSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );

UsuarioSchema.pre('validate', function(next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Las contraseñas deben ser iguales');
  }
  next();
});

UsuarioSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    });
});

const Usuario = mongoose.model("usuario", UsuarioSchema);

module.exports = Usuario;