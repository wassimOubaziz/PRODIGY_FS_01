export default function Input({ label, id, className = "", ...props }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-2 font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-primary-500 ${className}`}
        {...props}
      />
    </div>
  );
}
