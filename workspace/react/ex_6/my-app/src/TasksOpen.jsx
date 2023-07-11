import React from 'react';
import { FaTimes, FaToggleOff } from 'react-icons/fa';

const TasksOpen = () => {
  const tasks = []; // Adicione as tarefas em aberto aqui

  if (tasks.length === 0) {
    return <p>Não há tarefas em aberto.</p>;
  }

  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index}>
          <span>{task}</span>
          <button>
            <FaTimes />
          </button>
          <button>
            <FaToggleOff />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TasksOpen;