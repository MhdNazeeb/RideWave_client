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
    //  value => !value || (value && ['image/jpeg','image/png','image/jpg'].includes(value.type)))
});
