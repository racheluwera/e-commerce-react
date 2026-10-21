type FormFieldProps = {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
};

const FormField = ({ label, error, className = "", children }: FormFieldProps) => (
  <div className={className}>
    <label className="text-sm font-medium text-gray-700">{label}</label>
    {children}
    {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

export default FormField;
