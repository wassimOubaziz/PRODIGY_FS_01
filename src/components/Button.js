export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 font-semibold text-white transition-colors duration-200 rounded-lg shadow-md bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-75 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
