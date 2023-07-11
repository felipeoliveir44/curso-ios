import React from 'react';
import { FaPlus } from 'react-icons/fa';

const NewTasks = () => {
  return (
    <header>
      <h2>Tarefas em Aberto</h2>
      <button>
        <FaPlus /> Add
      </button>
    </header>
  );
};

export default NewTasks;