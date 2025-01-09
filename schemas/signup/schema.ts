import * as yup from 'yup';

export const signupSchema = yup.object().shape({
    f_name: yup.string().required("First name is required"),
    l_name: yup.string().required("Last name is required"),
    email: yup.string().email().required("Email is required"),
    number: yup.string().required("Number is required"),
    role: yup.string().email().required("Role is required"),
    password: yup.string().required('Password is required'),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password')], 'Passwords must match').required('Password confirmation is required'),
})