import * as z from "zod";   // Zod for validation

// Zod Schema for Validation
const registrationSchema = z.object({
    firstName: z.string().min(1, "First Name is required"), // Validate first name
    lastName: z.string().min(1, "Last Name is required"), // Validate last name
    email: z.string().email("Invalid email address"), // Validate email
    password: z.string().min(6, {message: "Password must be at least 6 characters"}),
    confirmPassword: z.string().min(6, "Confirm your password"),
    age: z.number().min(15, "You must be at least 15 years old"), // Validate age
    phoneNumber: z.string().min(10, "Phone number is required"), // Validate phone number
    address: z.string().min(5, { message: "Address must be at least 5 characters" }),
    city: z.string().min(2, { message: "City must be at least 2 characters" }),
    // course: z.string().nonempty({ message: "Please select a course" }),
    mode: z.string().nonempty({ message: "Please select a mode of study" }),
  }).refine((data) => data.password === data.confirmPassword,
  {
    message: "Password do not match",
    path: ['confirmPassword'],
  });

  export default registrationSchema;