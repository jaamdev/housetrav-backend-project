import {
  string,
  email,
  minLength,
  maxLength,
  toTrimmed,
  object,
} from 'valibot';

export const registerSchema = object({
  firstName: string('El nombre debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'El nombre no debe estar vacío'),
    maxLength(50, 'El nombre es demasiado grande'),
  ]),
  lastName: string('Los apellidos debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'Los apellidos no debe estar vacío'),
    maxLength(50, 'Los apellidos es demasiado grande'),
  ]),
  address: string('La dirección debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'La dirección no debe estar vacío'),
    maxLength(50, 'La dirección es demasiado grande'),
  ]),
  city: string('La ciudad debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'La ciudad no debe estar vacío'),
    maxLength(50, 'La ciudad es demasiado grande'),
  ]),
  country: string('El país debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'El país no debe estar vacío'),
    maxLength(50, 'El país es demasiado grande'),
  ]),
  postal: string('El código postal debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'El código postal no debe estar vacío'),
    maxLength(8, 'El código postal es demasiado grande'),
  ]),
  phone: string('El teléfono debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'El teléfono no debe estar vacío'),
    maxLength(100, 'El teléfono es demasiado grande'),
  ]),
  email: string('El correo electrónico debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'El correo electrónico no debe estar vacío'),
    maxLength(50, 'El correo electrónico es demasiado grande'),
    email('El correo electrónico no es válido'),
  ]),
  password: string('La contraseña debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'La contraseña no debe estar vacía'),
    minLength(8, 'La contraseña debe tener un mínimo de 8 caracteres'),
    maxLength(50, 'La contraseña es demasiado grande'),
  ]),
});

export const loginSchema = object({
  email: string('El correo electrónico debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'El correo electrónico no debe estar vacío'),
    maxLength(50, 'El correo electrónico es demasiado grande'),
    email('El correo electrónico no es válido'),
  ]),
  password: string('La contraseña debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'La contraseña no debe estar vacía'),
    minLength(8, 'La contraseña debe tener un mínimo de 8 caracteres'),
    maxLength(50, 'La contraseña es demasiado grande'),
  ]),
});
