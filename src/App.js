import React , { useState } from 'react'
import Tasks from './components/Tasks'
import Header from './components/Header'
import AddTask from './components/AddTask'
// import { v4 as uuid } from "uuid"; 
import './App.css';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(true)
 const [tasks , setTasks] = useState([
    { 
        id : 1 ,
        text : 'Doctors Appointement' ,
        day : 'Feb 5th at 2:30pm' ,
        reminder : true ,
    },

    { 
        id : 2 ,
        text : 'Meeting At School' ,
        day : 'Feb 6th at 1:30pm' ,
        reminder : true ,
    },
   
    { 
        id : 3 ,
        text : 'Food Shopping' ,
        day : 'Feb 5th at 2:30pm' ,
        reminder : false ,
    },


 ])

// Add Task
const addTask = (task) => {
    // console.log('added' , task)f
    const id = Date.now();
// or const id = math.floor(math.random() * 10000) + 1
    const newTask = { id , ...task }
    setTasks([ ...tasks , newTask ])
}



//  Delete Task
const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    // if(tasks.length === 2) {
    //     alert('YOU DELETED 2 TASKS')
    // }
}

// Toggle reminder
const toggleReminder = (id) => {
    // console.log('toggled' , id)
    setTasks(tasks.map((task) => task.id === id ? {...task , reminder : !task.reminder} : task ))
}

// const toggleReminder = (id) => {
//     setTasks(tasks.map((task) => {
//         if(task.id === id){
//             task.reminder = !task.reminder
//         }
//         return task
//     }))
// }


   
  return (
    <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
            {showAddTask && <AddTask onAdd={addTask} />}
               {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                'No Tasks To Show'
              )}
        
    </div>
  );
}



export default App;
