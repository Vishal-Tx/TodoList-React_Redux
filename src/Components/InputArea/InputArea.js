import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { clear } from "../../Features/Item/ItemSlice";
import { AddItem, UpdateItems, clear } from "../../Features/Items/ItemsSlice";
import "./InputArea.css";

const InputArea = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const { Item } = useSelector((store) => store.Items);
  useEffect(() => {
    if (Item) {
      setTask(Item.item);
    }
  }, [Item]);
  const handleChange = (e) => {
    const { value } = e.target;
    setTask(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Item) {
      const { index } = Item;
      dispatch(UpdateItems({ task, index }), dispatch(clear()));
    } else {
      dispatch(AddItem(task));
    }

    setTask("");
  };
  return (
    <div className="inputArea">
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          name="content"
          onChange={handleChange}
          value={task}
          placeholder="Create a task..."
          rows={3}
          required
        />
        <button type="submit">{Item ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default InputArea;
