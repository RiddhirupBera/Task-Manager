import { useState } from 'react'
import '../App.css'

export const NewTask = () =>{

    const [task,setTask] = useState("");
    const [priority,setPriority] = useState("");
    const [date,setDate] = useState("");
    const [taskList,setTaskList] = useState([]);
    const [itemId, setitemid] = useState(0);

    const handleTask = (e) =>{
        setTask(e.target.value);
    }
    const handlepriority = (e) =>{
        setPriority(e.target.value);
    }
    const handleDate = (e) =>{
        setDate(e.target.value);
    }
    const handleSubmit = (e) =>{
        setitemid(itemId + 1);
        let taskCurr = {
            id : itemId,
            task,
            priority,
            date
        }
        setTaskList([taskCurr,...taskList]);
    }
    const deleteRow = (id) =>{
        setTaskList(taskList.filter(item=>item.id!==id))
    }

    return(
    <div className="centered">
        <div className='row1'><h2>ToDo</h2></div>
    <div className="row1">
      <input type="text" value={task} onChange={handleTask}></input>
      <input type="text" value={priority} onChange={handlepriority}></input>
      <input type="date" value={date} onChange={handleDate}></input>
    </div>
    <div className='row1'><button onClick={handleSubmit}>Add</button></div>
    <div className="tableStyle">
        <table>
            <thead>
                            <tr>
                                <th>Task</th>
                                <th>Priority</th>
                                <th>Deadline</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
         
        {taskList.map((t)=>(
            // <div className="row1">
                <tr>
            <td>{t.task}</td>
            <td>{t.priority}</td>
            <td>{t.date}</td>
            <td><button onClick={()=>deleteRow(t.id)}>Delete</button></td>
            </tr>
            // </div>
        ))}
        
        </tbody>
        </table>
    
    </div>
    </div>
    )
}