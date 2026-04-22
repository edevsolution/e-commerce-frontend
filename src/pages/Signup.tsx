import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const navigate = useNavigate();

  // Name Validation
  const validateName = (value) => {
    if (!value.trim()) {
      return "Full name is required";
    }
    if (value.trim().length < 2) {
      return "Name must be at least 2 characters";
    }
    if (!/^[A-Za-z\s]+$/.test(value)) {
      return "Name can only contain letters and spaces";
    }
    return "";
  };

  // Email validation
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value.trim()) {
      return "Email is required";
    }
    if (!emailRegex.test(value.trim())) {
      return "Please enter a valid email address .";
    }
    return "";
  };

  // Number validation
  const validatePhone = (value) => {
    if (!value.trim()) {
      return "Phone number is required";
    }
    if (!/^\d+$/.test(value)) {
      return "Phone number can only contain digits (no spaces, dashes, or symbols)";
    }
    if (value.trim().length !== 11) {
      return "Phone number must be exactly 11 digits";
    }
    return "";
  };

  // Password Validation
  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!value) {
      return "Password is required";
    }
    if (!passwordRegex.test(value)) {
      return "Password length must be at least 6 characters and include one uppercase, one lowercase, and a number";
    }
    return "";
  };

  // Confirm Password Validation
  const validateConfirmPassword = (value, passwordValue) => {
    if (!value) {
      return "Please confirm your password";
    }
    if (passwordValue && value !== passwordValue) {
      return "Passwords do not match";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitError("");
    setSubmitSuccess(false);

    // Run full validation on all fields
    const nameErr = validateName(name);
    const emailErr = validateEmail(email);
    const phoneErr = validatePhone(phone);
    const passwordErr = validatePassword(password);
    const confirmErr = validateConfirmPassword(confirmPassword, password);

    // Update all error states
    setNameError(nameErr);
    setEmailError(emailErr);
    setPhoneError(phoneErr);
    setPasswordError(passwordErr);
    setConfirmPasswordError(confirmErr);

    // Check if any field is invalid
    if (nameErr || emailErr || phoneErr || passwordErr || confirmErr) {
      return;
    }

    setIsLoading(true);

    try {

      // After backend complete
      // const response = await axios.post("http://localhost:5000/api/v1/signup", {
      //   name,
      //   email,
      //   phone,
      //   password,
      // });
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(name,email,phone,password)
      setSubmitSuccess(true);

      // Clear form fields
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");

      // Clear errors (optional)
      setNameError("");
      setEmailError("");
      setPhoneError("");
      setPasswordError("");
      setConfirmPasswordError("");

      // Redirect to login or home page
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      // Error handling
      const errorMessage =
        error.response?.data?.message || "Signup failed. Please try again.";
      setSubmitError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-4/5 md:w-3/5 lg:w-1/3 h-2/3 mx-auto my-auto border-2 border-black px-8 py-10 rounded-xl"
      >
        <h1 className="text-center text-3xl font-semibold">Sign Up</h1>

        <div className="flex flex-col gap-1">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError(validateName(e.target.value));
            }}
            placeholder="Enter your full Name."
            required
            className="border-2 border-black rounded-xl p-2"
          />
          {nameError && (
            <p className="text-red-500 text-sm mt-1">{nameError}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(validateEmail(e.target.value));
            }}
            placeholder="Enter your email"
            required
            className="border-2 border-black rounded-xl p-2"
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label>Number</label>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => {
              const digitsOnly = e.target.value.replace(/\D/g, "");
              setPhone(digitsOnly);
              setPhoneError(validatePhone(digitsOnly));
            }}
            placeholder="Enter your phone number."
            required
            className="border-2 border-black rounded-xl p-2"
          />
          {phoneError && (
            <p className="text-red-500 text-sm mt-1">{phoneError}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label>Password </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(validatePassword(e.target.value));
              if (confirmPassword) {
                setConfirmPasswordError(
                  validateConfirmPassword(confirmPassword, e.target.value),
                );
              }
            }}
            placeholder="Enter your password"
            required
            className="border-2 border-black rounded-xl p-2"
          />
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label>Confirm Password </label>
          <input
            type="password"
            name="cpassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPasswordError(
                validateConfirmPassword(e.target.value, password),
              );
            }}
            placeholder="Enter your password"
            required
            className="border-2 border-black rounded-xl p-2"
          />
          {confirmPasswordError && (
            <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>
          )}
        </div>

        {submitError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
            {submitError}
          </div>
        )}

        {submitSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
            Signup successful! Redirecting to login...
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="bg-black rounded-xl py-4 px-2 text-white font-semibold"
        >
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>

        <div>
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 font-semibold">
              Log in
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
