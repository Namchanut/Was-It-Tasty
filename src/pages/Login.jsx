import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { login, getMe } from "../api/wasItTastyApi";

export default function Login() {
  const { user, setUser } = useAuth();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = (e) => {
    e.preventDefault();

    login(input)
      .then((rs) => {
        localStorage.setItem("token", rs.data.token);
        let token = localStorage.getItem("token");
        return getMe(token);
      })
      .then((rs) => {
        console.log(rs.data);
        setUser(rs.data);
      })
      .catch((err) => alert(err.response.data.error || err.message));
  };

  return (
    <div className="mt-5 ">
      <form className="max-w-lg mx-auto" onSubmit={hdlSubmit}>
        <h2 className="text-3xl mb-4">Login Form</h2>
        <div className="flex w-full mb-4">
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            placeholder="email"
            name="email"
            onChange={hdlChangeInput}
            value={input.email}
          />
        </div>

        <div className="flex w-full mb-4">
          <input
            className="input input-bordered w-full max-w-xs"
            type="password"
            placeholder="Password"
            name="password"
            onChange={hdlChangeInput}
            value={input.password}
          />
        </div>

        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
}
