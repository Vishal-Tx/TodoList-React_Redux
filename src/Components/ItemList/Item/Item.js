import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { update } from "../../../Features/Item/ItemSlice";
import "./Item.css";
import { MdDelete } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { DeleteItem, UpdateItem } from "../../../Features/Items/ItemsSlice";

const Item = ({ item, index }) => {
  const dispatch = useDispatch();
  const [toggleDone, setToggleDone] = useState(false);
  const handleUpdate = () => {
    dispatch(UpdateItem({ item, index }));
  };

  const handleDelete = () => {
    dispatch(DeleteItem(index));
  };

  const handleComplete = () => {
    setToggleDone((prev) => !prev);
  };
  return (
    <div className="item">
      <input type="checkbox" onClick={handleComplete} />
      <p className={toggleDone ? "done-text item-text" : "item-text"}>{item}</p>
      <div className="button-group">
        <button>
          <BsThreeDots onClick={handleUpdate} />
        </button>
        <button>
          <MdDelete onClick={handleDelete} />
        </button>
      </div>
    </div>
  );
};

export default Item;
