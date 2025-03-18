import * as yup from "yup"

export const FormSubmitSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, "The Name must be atleast 3 characters long")
        .required("Name is Required"),

    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is Required"),
    
    phone: yup.string()
        .matches(/^\d{10,15}$/, "Enter a valid phone number")
        .required("Phone number is required"),
    
    address: yup
        .string()
        .min(3, "The Address must be atleast 3 characters Long")
        .required("The Address is required"),
    
    message: yup
        .string()
        .min(10, "Enter atleast 10 characters message")
        .required("Message Filed is required")
})