import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const TodoList = ({todos,setTodos,setEditTodo}) => {

    const handleComplete=(todo)=>{
       setTodos(
        todos.map((item)=>{
            if(item.id===todo.id){
                return{...item,completed:!item.completed};
            }
            return item;
        })
       )
    }

    const handleEdit=({id})=>{
        const findTodo=todos.find((todo)=>todo.id===id);
        setEditTodo(findTodo);
    };

    const handleDelete=({id})=>{
        setTodos(todos.filter((todo)=>todo.id!==id));
    };

    return ( 
        <div>
            {todos.map((todo)=>(
                <li className="list-item" key={todo.id}>
                    <input type="text" value={todo.title} className={` list ${todo.completed?"complete":""}`} onChange={(event)=>event.preventDefault()}/>
                    <div>
                        <button className="button-complete task-button" onClick={()=>handleComplete(todo)}>
                            <FaCheckCircle className="fa fa-check-circle"></FaCheckCircle>
                            
                        </button>
                        <button className="button-edit task-button"  onClick={()=>handleEdit(todo)} >
                            <FaEdit className="fa fa-edit"></FaEdit>
                           
                        </button>
                        <button className="button-delete task-button" onClick={()=>handleDelete(todo)}>
                            <FaTrash className="fa fa-trash"></FaTrash>
                           
                        </button>
                    </div>
                </li>
            ))}
        </div>
     );
}
 
export default TodoList;