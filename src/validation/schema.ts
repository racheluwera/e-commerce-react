import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  remember: z.boolean().optional(),
});

export const signUpSchema = z
  .object({
    firstName: z.string().min(1, "First name is required").max(50, "Too long"),
    lastName: z.string().min(1, "Last name is required").max(50, "Too long"),
    email: z.string().min(1, "Email is required").email("Enter a valid email"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Add an uppercase letter")
      .regex(/[0-9]/, "Add a number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

export const newsletterSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
});

export type SignInValues = z.infer<typeof signInSchema>;
export type SignUpValues = z.infer<typeof signUpSchema>;
export type ContactValues = z.infer<typeof contactSchema>;
export type NewsletterValues = z.infer<typeof newsletterSchema>;
