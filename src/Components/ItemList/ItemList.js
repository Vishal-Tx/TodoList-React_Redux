import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item/Item";
import "./ItemList.css";

const ItemList = () => {
  const [items, setItems] = useState();
  const { ItemList } = useSelector((store) => store.Items);
  console.log("ItemList", ItemList);
  return !ItemList.length ? (
    <div className="default-Items">
      <ul className="list">
        <li>
          Type in the Input box and press/Click Create button to add a ToDo
        </li>
        <li>
          Created ToDo can be deleted by Pressing/Clicking the Delete Button
        </li>
        <li>
          After completing the task you can mark the task as finished by
          pressing/clicking the checkmark
        </li>
        <li>
          For Updating a current task press/Click on three dots and then
          updateit in input box. Press Update to update.
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
