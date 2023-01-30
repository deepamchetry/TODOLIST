import './App.css';
import './index.css';
import React from 'react';
import { useState } from 'react';
import TodoList from './TodoList';

const App = () => {


  const [inputList, setInputList] = useState(""); 
  const [items, setItems] = useState([]);  

  const seeChangeInput = (event) => { 
    setInputList(event.target.value);
  }

  const addListItems = () => { 
    var a = document.getElementById('hi').value; 
    if (a === '') alert("Please type something to add");

    else {
      setItems((oldItems) => {
        return ([...oldItems, inputList]);
      })
      setInputList("");
    }
  }

  const deleteTodo = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      })
    })
  }

  const removeAll =() => {
    setItems([]);
  }


  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>TO DO LIST</h1>
          <br />
          <input id='hi' type="text"
            placeholder='Add Your Task '
            onChange={seeChangeInput}
            value={inputList}
          />
          <button className='bye' onClick={addListItems}  > + </button>

          <ol>
            {/* <li>{inputList}</li> */}
            {
              items.map((itemsVal, index) => {
                return (<TodoList
                  key={index}
                  text={itemsVal}
                  id={index}

                  onSelect={deleteTodo}
                />)
              })
            }
          </ol>
        </div>
        <br />
        <div className='footer'> Tasks Assigned : {items.length} </div>

        <div className='listall'
        onClick={removeAll}
        >
          <button className='list1' >
            Erease All
          </button> </div>
      </div>

    </>
  )
}

export default App;
