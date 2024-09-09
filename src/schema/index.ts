import * as yup from "yup";

export const SignUpSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const RegisterSchoolSchema = yup.object().shape({
  name: yup
    .string()
    .min(6, "Name must be at least 6 characters")
    .max(100, "Name must be at most 100 characters")
    .required("Field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Field is required"),
  schoolAlias: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Field is required"),
  numberOfStaffs: yup
    .number()
    .typeError("Number of staffs must be a valid number")
    .min(1)
    .required("Field is required"),
  numberOfStudents: yup
    .number()
    .typeError("Number of students must be a valid number")
    .min(1)
    .required("Field is required"),
  phoneNumber: yup
    .string()
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Phone number is not valid")
    .required("Phone number is required"),
  address: yup
    .string()
    .min(1)
    .max(100, "Address must be at most 100 characters")
    .required("Field is required"),
});

export const ContactSchema = yup.object().shape({
  name: yup
    .string()
    .min(6, "Name must be at least 6 characters")
    .max(100, "Name must be at most 100 characters")
    .required("Field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Field is required"),
  subject: yup
    .string()
    .min(2, "Subject must be at least 2 characters")
    .max(100, "Subject must be at most 100 characters")
    .required("Field is required"),
  message: yup
    .string()
    .min(6, "Message must be at least 6 characters")
    .required("Field is required"),
});
