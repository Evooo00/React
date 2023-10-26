
import './App.css';
import React, {useState} from 'react';

function App() {
const [newItem, setNewItem] = useState("");

//Creating array for holding all items
const [items, setItems] = useState([]);
//------------------------------------

//Edycja
const [editItemIndex, setEditItemIndex] = useState(null);
const [editMode, setEditMode] = useState(false);
//------------------------------------

const writingItem = e =>{
  e.preventDefault();

  setNewItem(e.target.value);
};



function addItem(){
  //console.log("test");
  if (!newItem){
    return;
  }

  const item = {
    id: Math.floor(Math.random() * 1000000),
    value: newItem
  }

  setItems(oldList => [...oldList, item]);
  setNewItem("");
  
  // console.log(items);

}


function deleteItem(id){
  // console.log(id);

  const array = items.filter(item => item.id !== id);
  setItems(array);
}

function editItem(id){
  setEditMode(true);
  setEditItemIndex(id);
  const itemToEdit = items.find(item => item.id === id);
  setNewItem(itemToEdit.value);
}

function saveItem(id) {
  if(!newItem){
    return
  }

  const updatedItems = items.map(item => {
    
      
    
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
    
      <div className="todoApp" >


        <h1>What's your plan for today? :)</h1>
        <div>
          <input
            className="todoInput"
            placeholder="Add todo"
            value={newItem}  
            onChange={writingItem}
            />
              
            
              {editMode ? (
            <button className="todoButton" onClick={saveItem}>Zapisz</button>
          ) : (
            <button className="todoButton" onClick={addItem}>Dodaj</button>
          )}
        </div>
        <ul>
          {items.map(item =>{
            return(
              <li key={item.id}>{item.value} <button onClick={() => editItem(item.id)}>Edit</button><button onClick={() => deleteItem(item.id)}>X</button></li>
            )
          })}

        </ul>

      </div>
    
  );
}

export default App;
