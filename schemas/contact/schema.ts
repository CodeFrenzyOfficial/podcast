import * as yup from 'yup';
import { isValidPhoneNumber } from "react-phone-number-input";

export const contactSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    phone: yup.string().test(
        "isValidPhoneNumber",
        "Invalid phone number",
        (value) => isValidPhoneNumber(value || "")
    ),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required'),
})