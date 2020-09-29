import React, {useState, useEffect, FormEvent} from 'react';
import {Form, Tasks, Title, SubTitle, SandboxButton} from './styles';
import GlobalStyle from './styles/global';
import {FiCheck} from 'react-icons/fi';
import {format} from 'date-fns';

interface Task {
  title: string;
  checked: boolean;
}

const App: React.FC = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storagedTasks = localStorage.getItem(
      '@Task:tasks',
    );

    if (storagedTasks) {
      return JSON.parse(storagedTasks);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@Task:tasks',
      JSON.stringify(tasks),
    );
  }, [tasks]);

  async function handleAddTask(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
      const task = {
        title: newTask,
        checked: false
      }

      setTasks([...tasks, task]);
      setNewTask('');
  }

  async function handleRemoveTask(title: string): Promise<void> {

    const newTasks = tasks.filter((task) => task.title !== title);

    setTasks(newTasks);
  }



  return (
    <>
      <SandboxButton href="https://sandbox.design/">created by sandbox.design</SandboxButton>
      <Title>Slow and always, turtle</Title>
      <SubTitle>Today is {format(new Date(), 'MMMM dd')}</SubTitle>
      <Form onSubmit={handleAddTask}>
        <input
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="✚ Add new task"
          type="text"
        />
        <button type="submit">Add</button>
      </Form>
      <Tasks>
        {tasks.map(task => (
          <div key={task.title}>
            <span>{task.title}</span>
            <FiCheck size={30} onClick={() => handleRemoveTask(task.title)}/>
          </div>
        ))}
      </Tasks>
      <GlobalStyle />
    </>
  );
}

export default App;
