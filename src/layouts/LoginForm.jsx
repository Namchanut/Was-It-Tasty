// import { login, getMe } from "../api/wasItTastyApi";
// import { useState } from "react";
// import { useAuth } from "../contexts/AuthContext";

// export default function Login() {
//   const { user, setUser } = useAuth;

//   const [input, setInput] = useState({
//     email: "",
//     password: "",
//   });

//   const hdlChangeInput = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const hdlSubmit = (e) => {
//     e.preventDefault();

//     login(input)
//       .then((rs) => {
//         // console.log(rs.data.token)
//         localStorage.setItem("token", rs.data.token);
//         let token = localStorage.getItem("token");
//         return getMe(token);
//       })
//       .then((rs) => {
//         console.log(rs);
//         setUser(rs.data);
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
//       <div className="w-auto">
//         <div className="btn" onClick={() => window.loginmodal.showModal()}>
//           Login
//         </div>
//         <dialog id="loginmodal" className="modal">
//           <form method="dialog" className="modal-box">
//             <form onSubmit={hdlSubmit}>
//               {/* <button
//                 htmlFor="my-modal-3"
//                 className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//               >
//                 ✕
//               </button> */}

//               <div className="flex flex-col justify-center items-center gap-5 font-bold text-lg ">
//                 <div className="flex flex-col">
//                   <p1>Email</p1>
//                   <input
//                     type="text"
//                     placeholder="Email"
//                     className="input input-bordered w-full max-w-xs"
//                     onChange={hdlChangeInput}
//                     value={input.email}
//                     name="email"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <p1>Password</p1>
//                   <input
//                     type="text"
//                     placeholder="Password"
//                     className="input input-bordered w-full max-w-xs"
//                     onChange={hdlChangeInput}
//                     value={input.password}
//                     name="password"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="bg-slate-300 border rounded-xl p-2 hover:bg-slate-400"
//                   // onClick={(e) => hdlSubmit()}
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </form>
//         </dialog>
//       </div>
//     </div>
//   );
// }
