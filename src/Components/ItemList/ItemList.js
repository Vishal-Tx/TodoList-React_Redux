import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item/Item";
import "./ItemList.css";

const ItemList = () => {
  const { ItemList } = useSelector((store) => store.Items);
  console.log("ItemList", ItemList);
  return !ItemList.length ? (
    <div className="default-Items">
      <ul className="list">
        <li>
          Type in the Input box and press/Click Create button to add a task.
        </li>
        <li>
          Created task can be deleted by Pressing/Clicking on the Delete Icon.
        </li>
        <li>
          After completing the task you can mark the task as finished by
          pressing/clicking on the checkmark.
        </li>
        <li>
          For Updating a current task press/Click on three dots and then update
          it in input box. Press Update to update.
        </li>
      </ul>
    </div>
  ) : (
    ItemList?.map((item, index) => {
      return <Item item={item} key={index} index={index} />;
    })
  );
};

export default ItemList;
