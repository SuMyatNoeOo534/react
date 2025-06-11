import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{11}$/, "Phone must be 11 digits")
    .required("Phone is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  township: yup.string().required("Township is required"),
});
