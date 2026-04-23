//import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from '../../assets/bg.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const navigate = useNavigate();

  //Form validation function
  const validateForm = () => {
    let isValid = false;
    let isEmailValid = false;
    let isPasswordValid = false;

    // Email regex: basic pattern requiring @ and domain with dot
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Password regex: min 6 chars, at least one uppercase, one lowercase, one digit
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    //Email validation
    if (!email.trim()) {
      setEmailError("Email is required !");
    } else if (!emailRegex.test(email.trim())) {
      setEmailError("Please enter a valid email address!");
    } else {
      setEmailError("");
      isEmailValid = true;
    }

    //Password validation
    if (!password) {
      setPasswordError("Password is required !");
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be min 6 chars, at least one uppercase, one lowercase, one digit",
      );
    } else {
      setPasswordError("");
      isPasswordValid = true;
    }

    isValid = isEmailValid && isPasswordValid;

    return isValid;
  };

  //Form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitError("");
    setSubmitSuccess(false);

    const isValid = validateForm();
    if (!isValid) return;

    setIsLoading(true);

    try {
      //after backend ready
      // const response = await axios.post("http://localhost:500/api/v1/login", {
      //   email,
      //   password,
      // });

      //  const { token, user } = response.data;

      //  localStorage.setItem('authToken', token);
      //  localStorage.setItem('user', JSON.stringify(user));

      await new Promise((resolve) => setTimeout(resolve, 1500));
       console.log(email,password)
      setSubmitSuccess(true);

      setEmail("");
      setPassword("");

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      setSubmitError("Invalid Email or Password. Please Try Again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat" 
       style={{ backgroundImage: `url(${bgImage})` }}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-4/5 md:w-3/5 lg:w-1/3 h-2/3 mx-auto my-auto border-2 border-black px-8 py-10 rounded-xl  bg-white/40 backdrop-blur-md border-white/30"
      >
        <h1 className="text-center text-3xl font-semibold">Log In</h1>

        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="border-2 border-black rounded-xl p-2"
            value={email}
            onChange={(e) => {
              console.log("New Email: ", e.target.value);
              setEmail(e.target.value);
            }}
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label>Password </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            className="border-2 border-black rounded-xl p-2"
            value={password}
            onChange={(e) => {
              console.log("New Password: ", e.target.value);
              setPassword(e.target.value);
            }}
          />
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
        </div>

        <div className="text-right text-red-500">
          <a href="">Forgot Password?</a>
        </div>

        <div className="flex flex-col gap-1">
          {submitError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
              {submitError}
            </div>
          )}

          {submitSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
              Login successful! Redirecting...
            </div>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="bg-black rounded-xl py-4 px-2 text-white font-semibold"
          >
            {isLoading ? "Logging in..." : "Log In"}
          </button>
        </div>

        <div>
          <p>
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 font-semibold">
              SignUp
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
