

function Input(props){

  return(
    <div>
      <ul>
        <li>
        <label>Enter{props.label}: </label>
        </li>
        <dd>
        <input type="text" onChange={props.onChange} name={props.label} placeholder={`Enter ${props.label}: `} value={props.value} />
        </dd>
      </ul>
      <button  name="Update" onClick={props.onChange} style={{backgroundColor:'plum',margin: '10px', borderRadius:'10px', cursor:'pointer',display:'inline-flex'}}>Update</button>
      <button  name="Delete" onClick={props.onChange} style={{backgroundColor:'aqua',margin: '10px', borderRadius:'10px', cursor:'pointer', display:'inline-flex' }} >Delete</button>
    </div>
  );

}

  export default Input;