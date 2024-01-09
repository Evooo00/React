import "./App.css";
import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { BiSolidEdit } from "react-icons/bi";

function App() {
  const [newItem, setNewItem] = useState("");

  //Creating array for holding all items
  const [items, setItems] = useState([]);
  //------------------------------------

  //Edycja
  const [editItemIndex, setEditItemIndex] = useState(null);
  const [editMode, setEditMode] = useState(false);
  //------------------------------------

  const writingItem = (e) => {
    e.preventDefault();

    setNewItem(e.target.value);
  };

  function addItem() {
    //console.log("test");
    if (!newItem) {
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem("");

    // console.log(items);
  }

  function deleteItem(id) {
    // console.log(id);

    const array = items.filter((item) => item.id !== id);
    setItems(array);
  }

  function editItem(id) {
    setEditMode(true);
    setEditItemIndex(id);
    const itemToEdit = items.find((item) => item.id === id);
    setNewItem(itemToEdit.value);
  }

  function saveItem(id) {
    if (!newItem) {
      return;
    }

    const updatedItems = items.map((item) => {
      if (item.id === editItemIndex) {
        return { ...item, value: newItem };
      }
      return item;
    });

    setItems(updatedItems);
    setNewItem("");
    setEditMode(false);
    setEditItemIndex(null);
  }

  return (
    <div className="todoApp">
      <h1>What's your plan for today? :)</h1>
      <div>
        <input
          className="todoInput"
          placeholder="Add todo"
          value={newItem}
          onChange={writingItem}
        />

        {editMode ? (
          <button className="todoButton" onClick={saveItem}>
            Zapisz
          </button>
        ) : (
          <button className="todoButton" onClick={addItem}>
            Dodaj
          </button>
        )}
      </div>
      <ul>
        {items.map((item) => {
          return (
            <li className="todoTask" key={item.id}>
              {item.value}{" "}
              <span className="buttons">
                <button
                  className="mainButtons"
                  onClick={() => editItem(item.id)}
                >
                  <BiSolidEdit />
                </button>
                <button
                  className="mainButtons"
                  onClick={() => deleteItem(item.id)}
                >
                  <TiDeleteOutline />
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
