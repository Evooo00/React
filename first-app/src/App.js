
import './App.css';
import React, {useState} from 'react';

function App() {
const [newItem, setNewItem] = useState("");

//Creating array for holding all items
const [items, setItems] = useState([]);
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

  return (
    <div className="todoApp" >


      <h1>Todo List</h1>
      <div>
        <input
          className="todoInput"
          placeholder="Add todo"
          value={newItem}  
          onChange={writingItem}
          />
            
          
        <button className="todoButton" onClick={addItem}>Add</button>
      </div>
      <ul>
        {items.map(item =>{
          return(
            <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>X</button></li>
          )
        })}

      </ul>

    </div>
  );
}

export default App;
