
const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form action="" className="flex flex-col gap-3 w-1/3 h-2/3 mx-auto my-auto border-2 border-black px-8 py-10 rounded-xl">
        <h1 className="text-center text-3xl font-semibold">Log In</h1>

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="border-2 border-black rounded-xl p-2"
        />
        <label>Password </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          className="border-2 border-black rounded-xl p-2"
        />

        <div className="text-right text-red-500">
          <a href="">
            Forgot Password?
            </a>
        </div>

        <button className="bg-black rounded-xl py-4 px-2 text-white font-semibold">Log In</button>
        <div>
          <p>
            Don't have an account? <a href="/signup" className="text-blue-500 font-semibold">SignUp</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
