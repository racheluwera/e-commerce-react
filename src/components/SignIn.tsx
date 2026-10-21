import { useState } from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, type SignInValues } from "../validation/schema";
import FormField from "./FormField";
import { inputClass } from "./inputClass";

type Props = {
  onClose: () => void;
  onSwitchToSignUp: () => void;
};

const SignIn = ({ onClose, onSwitchToSignUp }: Props) => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "", remember: false },
  });

  const onSubmit = (data: SignInValues) => {
    console.log("SignIn:", data);
    setSuccess(true);
    setTimeout(onClose, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-5 sm:p-8 relative mx-3">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-1">Sign In</h2>
        <p className="text-sm text-gray-500 mb-6">Welcome back! Please enter your details.</p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
          {success && (
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded px-3 py-2">
              Signed in successfully!
            </p>
          )}

          <FormField label="Email" error={errors.email?.message}>
            <input type="email" placeholder="Enter your email" className={inputClass(!!errors.email)} {...register("email")} />
          </FormField>

          <FormField label="Password" error={errors.password?.message}>
            <input type="password" placeholder="Enter your password" className={inputClass(!!errors.password)} {...register("password")} />
          </FormField>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" {...register("remember")} /> Remember me
            </label>
            <a href="#" className="text-[#7cb800] hover:underline">Forgot password?</a>
          </div>

          <button type="submit" className="w-full bg-[#7cb800] hover:bg-[#6aa300] text-white py-2 rounded font-medium transition-colors">
            Sign In
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <button onClick={onSwitchToSignUp} className="text-[#7cb800] font-medium hover:underline">Sign Up</button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;