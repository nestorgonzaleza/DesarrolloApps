import { object, string, ref } from 'yup'

export const signupSchema = object().shape({
  email: string()
    .email('Dirección de correo inválida')
    .required('Debe proporcionar un correo electrónico'),
  password: string()
    .min(6, 'La contraseña debe contener al menos 6 caracteres')
    .required('La contraseña es requerida'),
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Ambas contraseñas deben coincidir')
    .required(),
})