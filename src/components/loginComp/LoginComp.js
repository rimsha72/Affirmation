import { Link } from "react-router-dom";

export default function LoginComp({ email, password, handleLogin, setEmail, setPassword, message, messages }) {
  return (
    <div className="">
      <div className="px-10 pt-6">
        <img src="images/logo.svg" className="h-16" />
      </div>
      <div className="min-h-screen flex flex-col items-center my-16 ">
        <div className="block max-w-xs w-full sm:max-w-lg lg:max-w-4xl px-6 py-16 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-50">
          <div className="flex justify-center mb-8">
            <img src="images/logo.svg" />
          </div>
          <div className="text-center pb-8">
            <h1 className="lg:text-3xl font-bold font-sans">Sign into your account</h1>
          </div>
          <form onSubmit={handleLogin}>
            <div className="lg:px-28 space-y-6">
              <input type="email" placeholder="Email" className="w-full rounded-md border-0 bg-gray-100 placeholder:text-gray-700" onChange={e => setEmail(e.target.value)} autoComplete="false" />
              <input type="password" placeholder="Password" className="w-full rounded-md border-0 bg-gray-100 placeholder:text-gray-700" onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="text-center text-red-500 pt-4">
              <p>{message} {messages}</p>
            </div>
            <div className="lg:px-28 text-center pt-8 space-y-4">
              <button className="rounded-md bg-black text-white px-20 py-2 font-sans font-bold" type="submit">Login</button>
            
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
