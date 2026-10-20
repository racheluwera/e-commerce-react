import { X } from "lucide-react";

type Props = {
  onClose: () => void;
  onSwitchToSignIn: () => void;
};

const SignUp = ({ onClose, onSwitchToSignIn }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-5 sm:p-8 relative mx-3">

        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-1">Create Account</h2>
        <p className="text-sm text-gray-500 mb-6">Sign up to get started today.</p>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700">First Name</label>
              <input type="text" placeholder="First name" className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-[#7cb800]" />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" placeholder="Last name" className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-[#7cb800]" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input type="email" placeholder="Enter your email" className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-[#7cb800]" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input type="password" placeholder="Create a password" className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-[#7cb800]" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Confirm Password</label>
            <input type="password" placeholder="Confirm your password" className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-[#7cb800]" />
          </div>
          <button type="button" className="w-full bg-[#7cb800] hover:bg-[#6aa300] text-white py-2 rounded font-medium transition-colors">
            Create Account
          </button>
        </div>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <button onClick={onSwitchToSignIn} className="text-[#7cb800] font-medium hover:underline">Sign In</button>
        </p>

      </div>
    </div>
  );
};

export default SignUp;
