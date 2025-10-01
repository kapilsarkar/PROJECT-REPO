import * as Yup from "yup";

export const SignUpSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(25, "Name must not exceed 25 characters")
    .required("Please Enter Your Name"),

  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile Number must be exactly 10 digits")
    .required("Please Enter Your Mobile Number"),

  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Please Enter Your Username"),

  email: Yup.string()
    .email("Invalid Email Format")
    .required("Please Enter Your Email"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Please Enter Your Password"),

  confirm_password: Yup.string()
    .required("Please confirm your Password")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
