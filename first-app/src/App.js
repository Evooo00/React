
import './App.css';
import React, {useState} from 'react';

function App() {
const [newItem, setNewItem] = useState("");

const writingItem = e =>{
  e.preventDefault();

  setNewItem(e.target.value);
};



  return (
    <div className="todoApp" >


      <h1>Todo List</h1>
      <input
        className="todoInput"
        placeholder="Add todo"
        value={newItem}  
        onChange={writingItem}
        />
          
        
      <button className="todoButton">Add</button>
    </div>
  );
}

export default App;
