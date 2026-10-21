import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactValues } from "../validation/schema";
import FormField from "../components/FormField";
import { inputClass } from "../components/inputClass";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: ContactValues) => {
    console.log("Contact:", data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <div className="h-1 w-16 bg-[#7cb800] mb-6"></div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
        {sent && (
          <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded px-3 py-2">
            Message sent! We'll get back to you soon.
          </p>
        )}

        <FormField label="Name" error={errors.name?.message}>
          <input type="text" placeholder="Your name" className={inputClass(!!errors.name)} {...register("name")} />
        </FormField>

        <FormField label="Email" error={errors.email?.message}>
          <input type="email" placeholder="Your email" className={inputClass(!!errors.email)} {...register("email")} />
        </FormField>

        <FormField label="Message" error={errors.message?.message}>
          <textarea rows={5} placeholder="Your message" className={inputClass(!!errors.message)} {...register("message")} />
        </FormField>

        <button type="submit" className="bg-[#7cb800] hover:bg-[#6aa300] text-white py-2 rounded transition-colors">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;