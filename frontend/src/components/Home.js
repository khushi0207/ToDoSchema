import { useEffect, useState } from 'react';
import { createTodo, getAllTodo } from '../actions/todoActions'
import { updateTodo } from '../actions/todoActions';
import { deleteTodo } from '../actions/todoActions';


const Home = () => {

    const [data, setData] = useState({
        title: '',
        description: '',
        id: ''
    })


    const [allTodos, setAllTodos] = useState([])


    useEffect(() => {
        console.log('todos', allTodos)


    },[allTodos])


    const handleChange = event => {
        setData({ ...data, [event.target.name]: event.target.value })
    }


    const handleSubmit = async () => {
        console.log('title', data.title)
        console.log('description', data.description)
        const body = {
            title: data.title,
            description: data.description
        }
         const res = await createTodo(JSON.stringify(body))
        // console.log('response',res)
    }


    const FetchTodo = async () => {
        console.log("asdfdasf")
        const res = await getAllTodo()
        setAllTodos(res.data)
    }
    const handleValues = (elem) =>{
        setData({
            title:elem.title,
            description: elem.description,
            id:elem._id
        })
    }

    const handleUpdate = async () =>{
        const body={
            title:data.title,
            description:data.description
        }
        const res = await updateTodo(data.id,body)
        console.log('response',res)
        FetchTodo();
    }

    const handleDelete = async (id) =>{
        const res = await deleteTodo(id)
        console.log('Delete..',res)
        FetchTodo()
    }

    return (
        <div>
            <label>Title</label>
            <input type='text' name='title' placeholder='Enter title' onChange={handleChange} />
            <br />
            <label>Description</label>
            <input type='text' name='description' placeholder='Enter Description' onChange={handleChange} />
            <br />
            <button className='btn btn-primary col-1 mt-2' onClick={handleSubmit}>Submit</button>
            <br />
            <button className='btn btn-primary col-1 mt-2' onClick={FetchTodo}>Fetch</button>
            <br/>
            <button className='btn btn-primary col-1 mt-2' onClick={handleUpdate}>Update</button>
            <br/>
            <div>
                {allTodos.map((elem, i) => (
                    <div className='border border-primary col-md-10 my-2'>
                        <div key={i} onClick={() => handleValues(elem)}>
                            <h3>{elem.title}</h3>
                            <p>
                                <h4>{elem.description}</h4>
                            </p>
                            <button className='btn btn-primary col-1 mt-2' onClick={handleDelete(elem._id)}>DELETE</button>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}


export default Home;
