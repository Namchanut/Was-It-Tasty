import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Card({
  title,
  image,
  subTitle,
  handleDelete,
  id,
  toggle,
  item,
}) {
  const { user } = useAuth();

  const navigate = useNavigate();
  return (
    <div className="card w-80 h-96 bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-80"
          src={image}
          onClick={() => navigate(`/content/${id}`)}
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title h-10">{title}</h2>
        <p className="">{subTitle}</p>
      </div>
      <div className=" flex justify-end m-3">
        <button
          className={
            user.role === "ADMIN" ? "btn btn-square btn-outline" : "hidden"
          }
          id={id}
          onClick={() => handleDelete(id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <button
          className={user.role === "ADMIN" ? "" : "hidden"}
          onClick={() => toggle(item)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
