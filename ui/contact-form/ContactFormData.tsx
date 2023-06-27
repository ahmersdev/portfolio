import * as Yup from "yup";

export const CONTACTFORMINTIALVALUES = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export const CONTACTFORVALIDATIONSCHEMA = Yup.object().shape({
  name: Yup.string().required("Please Enter Your Name!"),
  email: Yup.string().email().required("Please Enter Your Email!"),
  phone: Yup.string().required("Please Enter Your Phone Number!"),
  subject: Yup.string().required("Please Enter Your Subject!"),
  message: Yup.string().required("Please Enter Your Message!"),
});
