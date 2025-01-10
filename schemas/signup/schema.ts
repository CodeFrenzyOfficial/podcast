import * as yup from 'yup';
import { isValidPhoneNumber } from "react-phone-number-input";

export const signupSchema = yup.object().shape({
    f_name: yup.string().required("First name is required"),
    l_name: yup.string().required("Last name is required"),
    email: yup.string().email().required("Email is required"),
    phone: yup.string().test(
        "isValidPhoneNumber",
        "Invalid phone number",
        (value) => isValidPhoneNumber(value || "")
    ),
    role: yup.string().email().required("Role is required"),
    password: yup.string().required('Password is required'),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password')], 'Passwords must match').required('Password confirmation is required'),
})