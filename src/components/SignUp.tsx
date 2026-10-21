import { useState } from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type SignUpValues } from "../validation/schema";
import FormField from "./FormField";
import { inputClass } from "./inputClass";

type Props = {
  onClose: () => void;
  onSwitchToSignIn: () => void;
};

const SignUp = ({ onClose, onSwitchToSignIn }: Props) => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" },
  });

  const onSubmit = (data: SignUpValues) => {
    console.log("SignUp:", data);
    setSuccess(true);
    setTimeout(onClose, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-5 sm:p-8 relative mx-3">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-1">Create Account</h2>
        <p className="text-sm text-gray-500 mb-6">Sign up to get started today.</p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
          {success && (
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded px-3 py-2">
              Account created! Closing...
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <FormField label="First Name" error={errors.firstName?.message} className="flex-1">
              <input type="text" placeholder="First name" className={inputClass(!!errors.firstName)} {...register("firstName")} />
            </FormField>
            <FormField label="Last Name" error={errors.lastName?.message} className="flex-1">
              <input type="text" placeholder="Last name" className={inputClass(!!errors.lastName)} {...register("lastName")} />
            </FormField>
          </div>

          <FormField label="Email" error={errors.email?.message}>
            <input type="email" placeholder="Enter your email" className={inputClass(!!errors.email)} {...register("email")} />
          </FormField>

          <FormField label="Password" error={errors.password?.message}>
            <input type="password" placeholder="Create a password" className={inputClass(!!errors.password)} {...register("password")} />
          </FormField>

          <FormField label="Confirm Password" error={errors.confirmPassword?.message}>
            <input type="password" placeholder="Confirm your password" className={inputClass(!!errors.confirmPassword)} {...register("confirmPassword")} />
          </FormField>

          <button type="submit" className="w-full bg-[#7cb800] hover:bg-[#6aa300] text-white py-2 rounded font-medium transition-colors">
            Create Account
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <button onClick={onSwitchToSignIn} className="text-[#7cb800] font-medium hover:underline">Sign In</button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;