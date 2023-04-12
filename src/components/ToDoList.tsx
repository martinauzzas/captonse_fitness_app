import { ChangeEvent, useEffect, useState } from 'react';
import Input from './Input';
import '../index.css'


// FIRST SECTION: HEADER
// To do list state, we are making a interface out of it to add the type of input
// We're gonna pass this interface into a usestate function
interface TaskProps {
    taskName: string;
    deadLine?: number;

}

// SECOND SECTION: DISPLAYING: 
    // Iterating throught the task and render them in the page.
    // The interface receives the props that we already made and we
    // add a function that handle the data once the user wants to delete it ("X")
interface DeleteProps {
    task: TaskProps;
    completeTask( taskNameToDelete: string ): void;
}

// This constant let us add Todos to the list 
const ToDoTask = ({ task, completeTask }: DeleteProps) => {
    return (
        <div className="task">
            <button onClick= { () => {
                completeTask(task.taskName)
                }}
                className='todo-button'
            >
                <i className="todo-span fa-solid fa-dumbbell"></i>
                <span>{ task.taskName }</span>
            </button>
        </div>
    )
}

const ToDoList = ( props: TaskProps ) => {

    // Setting the two input that we will receive into a usestate function
    const [ task, setTask ] = useState<string>("");
    const [ deadLine, setDeadLine ] = useState<number>(0);

    // Here we pass the interface that we created before
    const [ toDo, setToDo ] = useState<TaskProps[]>(
        () => JSON.parse(localStorage.getItem("tasks") as string) ?? []
    )

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(toDo))
    }, [toDo])


    // Function that handle the events and store it
    const handleChange = (event:ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name == "task"){
            setTask(event.target.value);
        } else {
            setDeadLine(Number(event.target.value));
        }
    }
    
    // Const that adds task every time the user clicks the add button
    const addTask = ():void => {
        const newTask = {
            taskName: task,
            deadLine: deadLine
        };
        setToDo([...toDo, newTask]);
        setTask("");
        setDeadLine(0);
    }
    
    // This function will receive the task.name and delete it
    const completeTask = ( taskNameToDelete:string ): void => {
        setToDo(toDo.filter((task)=> {
            return task.taskName != taskNameToDelete
        }))

    }

    return (
        <div className='todo-list'>
            <div className="header">
                <div className="inputContainer">
                    <input type="text" name="task" placeholder='Add your Challenge' value= { task } onChange={ handleChange } className= 'input-type mt-4'/>
                <button onClick={ addTask }><i className="fa-solid fa-medal ml-5 text-2xl text-slate-700"></i></button>
                </div>
            </div>
            <div className="todoList">
                { toDo &&
                    toDo.map(( task:TaskProps, key: number ) => {
                    return <ToDoTask key={key} task= {task} completeTask = {completeTask} />
                })}
            </div>
        </div>
    )
}

export default ToDoList

