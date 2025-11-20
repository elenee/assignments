import * as Yup from "yup"

export const SignInSchema = Yup.object().shape({
    email: Yup.string().email().required("email is required"),
    password: Yup.string().required("password is required").min(6, "min 6 char").max(20, "max 20 char"),
})

export type SignInFormSchema = Yup.InferType<typeof SignInSchema>