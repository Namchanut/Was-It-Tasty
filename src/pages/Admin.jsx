import React, { useState } from "react";
import { addContent } from "../api/wasItTastyApi";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [input, setInput] = useState({
    title: "",
    subTitle: "",
    image: "",
    ingredients: "",
    directions: "",
    cardId: "",
    userId: "",
    typefoodId: "",
  });

  const navigate = useNavigate();

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    addContent(input, token).then((rs) => {
      navigate("/recipe");
    });
  };

  return (
    <form
      className="flex flex-col items-center mt-3 w-full gap-4"
      onSubmit={hdlSubmit}
    >
      <div>
        <p>Title</p>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
          name="title"
          onChange={hdlChangeInput}
          value={input.title}
        />
      </div>
      <div>
        <p>Subtitle</p>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
          name="subTitle"
          onChange={hdlChangeInput}
          value={input.subTitle}
        />
      </div>
      <div>
        <p>Image</p>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
          name="image"
          onChange={hdlChangeInput}
          value={input.image}
        />
      </div>
      <div>
        <p>Ingredients</p>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
          name="ingredients"
          onChange={hdlChangeInput}
          value={input.ingredients}
        />
      </div>
      <div>
        <p>Directions</p>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
          name="directions"
          onChange={hdlChangeInput}
          value={input.directions}
        />
      </div>
      <div>
        <p>Card id</p>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
          name="cardId"
          onChange={hdlChangeInput}
          value={input.cardId}
        />
      </div>
      <div>
        <p>User id</p>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
          name="userId"
          onChange={hdlChangeInput}
          value={input.userId}
        />
      </div>
      <div>
        <p>Typefood id</p>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
          name="typefoodId"
          onChange={hdlChangeInput}
          value={input.typefoodId}
        />
      </div>

      <button className="btn">Create</button>
    </form>
  );
}
