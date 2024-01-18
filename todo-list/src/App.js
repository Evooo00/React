import "./App.css";
import React, {useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { BiSolidEdit } from "react-icons/bi";
import supabase from "./supabaseClient"

function App() {
  
  
  const [items, setItems] = useState([]);

  const [Todos, setTodos] = useState([]);
  
  useEffect(() => {
    getTodos();
  }, [])
  
  async function getTodos(){
    const {data} = await supabase.from("Todos").select();
    setTodos(data);
  }

  const writingItem = (e) => {
    e.preventDefault();

    setNewItem(e.target.value);
  };


  const [newItem, setNewItem] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    console.log(newItem)

    const {data, error} = await supabase
      .from("Todos")
      .insert([{Content: newItem}]);

    if(error){
      console.log("Error")
    }
    if(data){
      console.log(data)
    }
    
  }

  function reloadWebsite(){
    window.location.reload(false);
  }

  
  async function handleDelete(e){
  

    const {data, error} = await supabase
      .from("Todos")
      .delete()
      .eq('id', e)
      console.log(e)
      
      if(error){
        console.log(error)
      }
      if(data){
        console.log(data)
        
      }
      reloadWebsite();
  }

  return (
    <div className="todoApp">
      <h1>What's your plan for today? :)</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="todoInput"
            type="text"
            placeholder="Add todo"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button className="todoButton" type="submit" onClick={reloadWebsite}>
            Dodaj
          </button>

        </form>
        
        
      </div>
      
      
      <ul>
        
        {
        Todos.map((item) => {
          return (
            <li className="todoTask" key={item.id}>
              {item.Content}
              <span className="buttons">
                <button
                  className="mainButtons"
                  onClick={() => handleDelete(item.id)}
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
