import { useState } from 'react'
import '../App.css'

export const NewTask = () =>{

    const [task,setTask] = useState("");
    const [priority,setPriority] = useState("");
    const [date,setDate] = useState("");
    const [taskList,setTaskList] = useState([]);
    const [itemId, setItemId] = useState(0);

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
        //setItemId(itemId + 1);
        let taskCurr = {
            id : crypto.randomUUID(),
            task,
            priority,
            date
        }
        setTaskList([taskCurr,...taskList]);
        
    }
    const deleteRow = (id) =>{
        setTaskList(taskList.filter(item=>item.id!==id));
    }

    return(
    <div className="centered">
       <div className='pageHeading'>TODO</div>
    <div className="row1">
      <input type="text" value={task} onChange={handleTask} className='inputBox'></input>
      <input type="text" value={priority} onChange={handlepriority} className='inputBox'></input>
      <input type="date" value={date} onChange={handleDate} className='inputBox'></input>
    </div>
    <div className='row1'><button onClick={handleSubmit} className = 'addButton'>Add</button></div>
    <div>
        <table className='tableStyle'>
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
            <td><button onClick={()=>deleteRow(t.id)} className='deleteBtn'>❌</button></td>
            </tr>
            // </div>
        ))}
        
        </tbody>
        </table>
    
    </div>
    </div>
    )
}