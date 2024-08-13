import { useState } from "react"


function Input(){
    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        data : ''
      })
   
      const {title, desc, data} = formData
   
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }


  const handleSubmit = () => {
   
    setFormData({title: '', desc: '', data: `title: ${title} desc: ${desc}`})
  }


    return(
        <div>
            <input type ="text" name='title' onChange={handleChange} value={title} />
            <input type ="text" name='desc' onChange={handleChange} value={desc} />
            <button onClick={handleSubmit}>Submit</button>
            <div>
                data: {data}
            </div>
        </div>
    )
}

export default Input;