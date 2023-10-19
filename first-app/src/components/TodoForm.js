import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = x =>{
        setInput(x.target.value);
    };

    const handleSubmit = x =>{
        x.preventDefault();

        // props.onSumbit({
        //     id: Math.floor(Math.random() * 10000),
        //     text: input 
        // });

        setInput('')
    };

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
        <input type="text" placeholder="Add here todo" value={input} className="todoInput" onChange={handleChange}/>
        <button className="todoButton">Add</button>
    </form>
  )
}

export default TodoForm