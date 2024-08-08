
function Input(label){
    let arr = ["Title","description"];
    let arr1 =arr.map((i) => <Input label={i}></Input>)
  
    return (
        <div>
{arr1}
      </div>
     );
  }

  export default Input;