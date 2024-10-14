import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [userTime, setUserTime] = useState(''); 

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleTimeChange = (event) => {
    setUserTime(event.target.value);
  };

  const handleAddTask = () => {
    if (task) {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      setTasks([...tasks, { task, userTime, createdAt: formattedTime }]);
      setTask(''); 
      setUserTime(''); 
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h3 id='hi'>Enter Task</h3>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder='Enter Task'
      />
      <input
        type="time"
        value={userTime}
        onChange={handleTimeChange}
      /><br></br>
      <button id='team' onClick={handleAddTask}>Add Task</button>
      {tasks.length > 0 ? (
        <b>
          <ul>
            {tasks.map((item, index) => (
              <li key={index}>
                {item.task} (Time: {item.userTime}) <span style={{ fontStyle: 'italic', marginLeft: '10px', color: 'gray' }}>{item.createdAt}</span>
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  onClick={() => handleDeleteTask(index)}
                  style={{ cursor: 'pointer', marginLeft: '10px', color: 'red' }}
                ></i>
              </li>
            ))}
          </ul>
        </b>
      ) : (
        <h3 id='hi'>No Task Added</h3>
      )}
    </div>
  );
}

export default App;
