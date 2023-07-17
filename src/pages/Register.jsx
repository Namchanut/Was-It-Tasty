import { Navigate, useNavigate } from "react-router-dom";
import { register } from "../api/wasItTastyApi";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "USER",
  });

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = (e) => {
    const { firstName, lastName, email, password, confirmPassword, role } =
      input;

    e.preventDefault();
    // console.log(input);
    if (password !== confirmPassword)
      return alert("Password not macth, recheck");
    register({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      role: role,
    })
      .then((rs) => {
        console.log(rs);
        navigate("/Login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mt-5 grid grid-cols-1 gap-4">
      <form className="max-w-lg mx-auto" onSubmit={hdlSubmit}>
        <h2 className="text-3xl mb-4">Register Form</h2>

        <div className="flex w-full mb-4">
          <input
            type="text"
            placeholder="Firstname"
            className="input input-bordered w-full max-w-xs"
            onChange={hdlChangeInput}
            value={input.firstName}
            name="firstName"
          />
        </div>

        <div className="flex w-full mb-4">
          <input
            type="text"
            placeholder="Lastname"
            className="input input-bordered w-full max-w-xs"
            onChange={hdlChangeInput}
            value={input.lastName}
            name="lastName"
          />
        </div>

        <div className="flex w-full mb-4">
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
            onChange={hdlChangeInput}
            value={input.email}
            name="email"
          />
        </div>
        <div className="flex w-full mb-4">
          <input
            type="text"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
            onChange={hdlChangeInput}
            value={input.password}
            name="password"
          />
        </div>
        <div className="flex w-full mb-4">
          <input
            type="text"
            placeholder="Confrim password"
            className="input input-bordered w-full max-w-xs"
            onChange={hdlChangeInput}
            value={input.confirmPassword}
            name="confirmPassword"
          />
        </div>

        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>

    // <div>
    //   <div className="btn" onClick={() => window.registermodal.showModal()}>
    //     Register
    //   </div>
    //   <dialog id="registermodal" className="modal">
    //     <form method="dialog" className="modal-box" onSubmit={hdlSubmit}>
    //       <button
    //         htmlFor="my-modal-3"
    //         className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
    //       >
    //         ✕
    //       </button>
    //       <div className="">
    //         <div className="flex flex-col justify-center items-center gap-5 font-bold text-lg ">
    //           <div className="flex flex-col">
    //             <p1>Firstname</p1>
    //             <input
    //               type="text"
    //               placeholder="Firstname"
    //               className="input input-bordered w-full max-w-xs"
    //               onChange={hdlChangeInput}
    //               value={input.firstName}
    //               name="firstName"
    //             />
    //           </div>
    //           <div className="flex flex-col">
    //             <p1>Lastname</p1>
    //             <input
    //               type="text"
    //               placeholder="Lastname"
    //               className="input input-bordered w-full max-w-xs"
    //               onChange={hdlChangeInput}
    //               value={input.lastName}
    //               name="lastName"
    //             />
    //           </div>
    //           <div className="flex flex-col">
    //             <p1>Email</p1>
    //             <input
    //               type="text"
    //               placeholder="Email"
    //               className="input input-bordered w-full max-w-xs"
    //               onChange={hdlChangeInput}
    //               value={input.email}
    //               name="email"
    //             />
    //           </div>
    //           <div className="flex flex-col">
    //             <p1>Password</p1>
    //             <input
    //               type="text"
    //               placeholder="Password"
    //               className="input input-bordered w-full max-w-xs"
    //               onChange={hdlChangeInput}
    //               value={input.password}
    //               name="password"
    //             />
    //           </div>
    //           <div className="flex flex-col">
    //             <p1>Confrim password</p1>
    //             <input
    //               type="text"
    //               placeholder="Confrim password"
    //               className="input input-bordered w-full max-w-xs"
    //               onChange={hdlChangeInput}
    //               value={input.confirmpassword}
    //               name="confirmpassword"
    //             />
    //           </div>
    //           <button className="bg-slate-300 border rounded-xl p-2 hover:bg-slate-400">
    //             Submit
    //           </button>
    //         </div>
    //       </div>
    //     </form>
    //   </dialog>
    // </div>
  );
}
