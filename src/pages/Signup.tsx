
const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form action="" className="flex flex-col gap-3 w-1/3 h-2/3 mx-auto my-auto border-2 border-black px-8 py-10 rounded-xl">
        <h1 className="text-center text-3xl font-semibold">Sign Up</h1>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full Name."
          required
          className="border-2 border-black rounded-xl p-2"
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="border-2 border-black rounded-xl p-2"
        />

        <label>Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number."
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
        <label>Confirm Password </label>
        <input
          type="password"
          name="cpassword"
          placeholder="Enter your password"
          required
          className="border-2 border-black rounded-xl p-2"
        />

        <button className="bg-black rounded-xl py-4 px-2 text-white font-semibold">Sign Up</button>
        <div>
          <p>
            Already have an account? <a href="/login" className="text-blue-500 font-semibold">Log in</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Signup