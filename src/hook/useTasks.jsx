import { useEffect, useState } from "react";
import axios from "axios";

const useTasks = (url) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tasks on load
  useEffect(() => {
    const abortCont =new AbortController();

    const fetchTasks = async () => {
    try {
      const response = await axios.get(url, {signal: abortCont.signal});
      setTasks(response.data);
      setLoading(false);
    } catch (err) {
      setError(`Failed to load tasks: ${err.message}`);
      setLoading(false);
    }
  };
    fetchTasks();

    return ()=> abortCont.abort();
  }, [url]);

  

  const addTask = async (text) => {
    try {
      const newTask = { text, completed: false };
      const response = await axios.post(url, newTask);
      setTasks((prev) => [...prev, response.data]);
    } catch (err) {
      setError(`Failed to add task: ${err.message}`);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (err) {
      setError(`Failed to delete task: ${err.message}`);
    }
  };

  return { tasks, loading, error, addTask, deleteTask };
};

export default useTasks;
