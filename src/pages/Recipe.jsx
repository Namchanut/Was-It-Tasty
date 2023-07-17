import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";
import { getContent, deleteContent } from "../api/wasItTastyApi";
import EditModal from "../components/EditModal";

export default function Recipe() {
  const [content, setContent] = useState([]);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState({});

  const toggleModal = (item = null) => {
    setOpen((prev) => !prev);
    if (item) {
      setEditItem(item);
    } else {
      setEditItem({});
    }
  };

  const updateContent = (input) => {
    setContent(input);
  };

  const handleDelete = (id) => {
    // let id = e.target.id;
    let token = localStorage.getItem("token");

    deleteContent(id, token).then((rs) => {
      if (rs.data > 0) {
        const deleteIndex = content.findIndex((el) => el.id == id);
        const newContent = [...content];
        newContent.splice(deleteIndex, 1);
        setContent(newContent);
      }
    });
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    getContent(token).then((rs) => {
      setContent(rs.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-4">
      {content &&
        content.length > 0 &&
        content.map((item) => {
          return (
            <div>
              {/* <NavLink className="navlink" to={`/content/${item.id}`}> */}
              <div className="mt-2 mx-4 w=[50rem] gap-4">
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  subTitle={item?.subTitle}
                  image={item.image}
                  handleDelete={handleDelete}
                  toggle={toggleModal}
                  item={item}
                />
              </div>
              {/* </NavLink> */}
            </div>
          );
        })}
      <EditModal
        open={open}
        toggle={toggleModal}
        item={editItem}
        updateEditContent={updateContent}
      />
    </div>
  );
}
