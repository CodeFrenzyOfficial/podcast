import * as yup from 'yup'
import { isValidPhoneNumber } from "react-phone-number-input";


export const userProfileSchema = yup.object().shape({
    f_name: yup.string().required("First name is required"),
    l_name: yup.string().required("Last name is required"),
    phone: yup.string().test(
        "isValidPhoneNumber",
        "Invalid phone number",
        (value) => isValidPhoneNumber(value || "")
    ),
})