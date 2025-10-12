import * as Yup from "yup";

export const SignUpSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(25, "Name must be less than 25 characters")
    .required("Please enter your name"),
  username: Yup.string().required("Please enter a username"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile Number must be exactly 10 digits")
    .required("Please enter your mobile number"),
  email: Yup.string().email("Invalid email").required("Please enter your email"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your password"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

export const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Please enter your email"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your password"),
  username: Yup.string().required("Please enter your username"),
});
