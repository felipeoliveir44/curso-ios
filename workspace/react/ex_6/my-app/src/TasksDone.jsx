import React from 'react';
import { FaTimes, FaToggleOn } from 'react-icons/fa';

const TasksDone = () => {
  const tasks = []; // Adicione as tarefas concluídas aqui

  if (tasks.length === 0) {
    return <p>Não há tarefas concluídas.</p>;
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
            <FaToggleOn />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TasksDone;