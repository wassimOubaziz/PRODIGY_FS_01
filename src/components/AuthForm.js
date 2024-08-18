import Button from "./Button";
import Input from "./Input";

export default function AuthForm({ type, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        {type === "register" ? "Create an Account" : "Welcome Back"}
      </h2>
      {type === "register" && (
        <Input
          type="text"
          id="username"
          name="username"
          label="Username"
          required
        />
      )}
      <Input type="email" id="email" name="email" label="Email" required />
      <Input
        type="password"
        id="password"
        name="password"
        label="Password"
        required
      />
      <Button type="submit" className="w-full mt-4">
        {type === "register" ? "Register" : "Login"}
      </Button>
    </form>
  );
}
