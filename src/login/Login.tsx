import { useState } from "react";
import BackgroundImage from "../assets/background.jpg";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "../api/auth";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

export type SignInFormData = {
  username: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsLoggedIn } = useAppContext();
  const [password, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const onSubmit: SubmitHandler<SignInFormData> = async (formData) => {
    try {
      const response = await signIn(formData);
      console.log("Login successful:", response);
      toast.success("Login successful!");
      setIsLoggedIn(true);
      navigate(location.state?.from?.pathname || "/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Login error: ${error.message}`);
      } else {
        toast.error("An error occurred");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!password);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="w-full max-w-md p-8 space-y-6 bg-white bg-opacity-70 rounded-lg shadow-lg border-t-4 border-blue-500">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              {...register("username", {
                required: "This field is required",
              })}
              type="text"
              autoComplete="username"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.username && (
              <p className="mt-2 text-sm text-red-600" id="username-error">
                {errors.username.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type={password ? "text" : "password"}
                autoComplete="current-password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.password && (
                <p className="mt-2 text-sm text-red-600" id="password-error">
                  {errors.password.message}
                </p>
              )}
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 py-2 text-sm text-gray-500 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {password ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
