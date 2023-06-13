import * as yup from 'yup';

// const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export const driverProfile = yup.object().shape({
  name: yup
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(20)
    .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed')
    .required('Required'),
//   dob: yup.date().required('Required'),
//   gender: yup.string().required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required'),
//   phone: yup
//     .number('Phone number must be a 10 digit number')
//     .positive()
//     .integer()
//     .test('len', 'Phone number should be a 10 digit number', val => /^\d{10}$/.test(val))
//     .required('Required'),
//   password: y
//     .string()
//     .min(5, 'password should contain 5-16 characters')
//     .max(16, 'password should contain 5-16 characters')
//     // .matches(passwordRule, 'Please create a stronger password')
//     .required('Required'),
//   cpassword: yup
//     .string()
//     .oneOf([yup.ref('password'), null], 'Password must match')
//     .required('Required'),
//   // image: yup.mixed()
//   //   .nullable()
//   //   .notRequired()
//   //   // .test("fileSiz", "Uploaded file is too big.", 
//   //   //     value => !value || (value && value.size <= 3048572))
//   //   .test("FILE_FORMAT", "Uploaded file has unsupported format.", 
//   //       value => !value || (value && ['image/jpeg','image/png','image/jpg'].includes(value.type)))
});
