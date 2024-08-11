  import logo from './logo.svg';
  import './App.css';
  import Input from './components/Input';
  import { useState } from "react";

  function App() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("") 

    function handleChange(event) {
      if(event.target.name === "Title"){
        setTitle(event.target.value)
      }else if(event.target.name === "Description"){
        setDesc(event.target.value)
      }
      
    }

    function handleUpdate() {
      
    }

    function handleDelete(){
      
    }

    function hancleClick(){
      console.log(`Title: ${title}, and Description: ${desc}`)
    }

    return (
      <div>
        <ul>
          <li>
          <Input label="Title" onClick={handleUpdate} name="Title" onChange={handleChange} value={title}/>
          </li>
          <li>
          <Input label="Description" onClick={handleDelete} name="Description" onChange={handleChange} value={desc}/>

          </li>
        </ul>
        <button onClick={hancleClick}>Submit</button>
      </div>
    );
  }

  export default App;