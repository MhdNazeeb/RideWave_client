import * as yup from 'yup';

// const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export const CarEditSchema = yup.object().shape({
  model: yup
    .string()
    .min(2, 'modal  must be at least 2 characters')
    .max(20)
    // .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed')
    .required('Required'),
  year: yup
    .string()
    .min(2, 'this filed  must be at least 2 number')
    .max(20)
    // .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed')
    .required('Required'),
    RegistrationNumber: yup
    .string()
    .min(2, 'modal  must be at least 2 number')
    .max(20)
    // .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed')
    .required('Required'),
  //  Seats: yup
  //   .string()
  //   // .min(2, 'modal  must be at least 2 number')
  //   // .max(20)
  //   // .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed')
  //   .required('Required'),
    Features: yup
    .string()
    .min(2, 'modal  must be at least 2 characters')
    .max(100)
    // .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed')
    .required('Required'),
    Rate: yup.number()
    .typeError('Please enter a valid number')
    .required('Number is required')
    .positive('Number must be positive')
    .integer('Number must be an integer')
 


//   dob: yup.date().required('Required'),
//   gender: yup.string().required('Required'),
//   email: yup.string().email('Please enter a valid email').required('Required'),
// //   phone: yup
// //     .number('Phone number must be a 10 digit number')
// //     .positive()
// //     .integer()
// //     .test('len', 'Phone number should be a 10 digit number', val => /^\d{10}$/.test(val))
// //     .required('Required'),
//   password: yup
//     .string()
//     .min(5, 'password should contain 5-16 characters')
//     .max(16, 'password should contain 5-16 characters')
//     // .matches(passwordRule, 'Please create a stronger password')
//     .required('Required'),
//   cpassword: yup
//     .string()
//     .oneOf([yup.ref('password'), null], 'Password must match')
//     .required('Required')
});
