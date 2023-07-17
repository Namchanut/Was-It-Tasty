import React, { useState } from "react";
import { updateContent, getContent } from "../api/wasItTastyApi";

export default function EditModal({ open, toggle, item, updateEditContent }) {
  const [input, setInput] = useState({});

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    const rs = await updateContent(item.id, input, token);
    const result = await getContent(token);
    // console.log(result);
    updateEditContent(result.data);
    toggle();
  };

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={toggle}
    >
      <div
        className="bg-white flex justify-center p-10 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <form
          className="flex flex-col gap-10 justify-center items-center"
          onSubmit={handleUpdate}
        >
          <img className="w-56 object-contain rounded-md" src={item.image} />
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p>Title</p>
              <input
                type="text"
                placeholder={item.title}
                className="input input-bordered input-accent w-full max-w-xs"
                name="title"
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <p>Subtitle</p>
              <input
                type="text"
                placeholder={item.subTitle}
                className="input input-bordered input-accent w-full max-w-xs"
                name="subTitle"
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <p>Image</p>
              <input
                type="text"
                placeholder={item.image}
                className="input input-bordered input-accent w-full max-w-xs"
                name="image"
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <p>Ingredients</p>
              <input
                type="text"
                placeholder={item.ingredients}
                className="input input-bordered input-accent w-full max-w-xs"
                name="ingredients"
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <p>Directions</p>
              <input
                type="text"
                placeholder={item.directions}
                className="input input-bordered input-accent w-full max-w-xs"
                name="directions"
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <p>Card id</p>
              <input
                type="text"
                placeholder={item.cardId}
                className="input input-bordered input-accent w-full max-w-xs"
                name="cardId"
                onChange={handleChangeInput}
              />
            </div>

            <div>
              <p>User id</p>
              <input
                type="text"
                placeholder={item.userId}
                className="input input-bordered input-accent w-full max-w-xs"
                name="userId"
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <p>Typefood id</p>
              <input
                type="text"
                placeholder={item.typefoodId}
                className="input input-bordered input-accent w-full max-w-xs"
                name="typefoodId"
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <button className="btn-primary py-2 rounded-md w-20">SAVE</button>
        </form>
      </div>
    </div>
  );
}
