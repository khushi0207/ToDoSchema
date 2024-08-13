import { ENDPOINT_URL } from '../constants/constants';


export const createTodo = (todo)=>{
    //console.log('actions todo',todo)
    return fetch(`${ENDPOINT_URL}/create-Todo`,{
        method : 'POST',
        header:{
            Accept : 'application/json',
            'Content-type' : 'application/json'
        },
        body : todo
    }).then((response) => {
        return response.json()
    }).catch(error => {
        console.log(error)
    })
}

export const getAllTodo=()=>{
    //console.log("actions")
    return fetch(`${ENDPOINT_URL}/getAllTodos`,{
        method :'GET',
        header:{
            Accept : 'application/json',
            'Content-type' : 'application/json'
        },
    }).then((response) => {
        //console.log("return")
        return response.json()
    }).catch((err) => {
        console.log(err)
    })
}

export const updateTodo = (id,body) =>{
    return fetch(`${ENDPOINT_URL}/updateTodo/${id}`,{
        method:'PATCH',
        header:{
            Accept:'application/json',
            'Content-type' : 'application/json'
        },
        body:JSON.stringify(body)
    }).then((res) =>{
        return res.json()
    }).catch((err) =>{
        console.log(err)
    })
}

export const deleteTodo =(id) =>{
    return fetch(`${ENDPOINT_URL}/deleteTodo/${id}`,{
        method:'DELETE',
        header:{
            Accept:'application/json',
            'Content-type' : 'application/json'
        },
    }).then((res) =>{
        return res.json()
    }).catch((err) =>{
        console.log(err)
    })
}