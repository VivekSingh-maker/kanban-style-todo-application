import axios from "axios";

export const callUserAuthApi = async () => {
  const response = { 
    data: {
      success: true,
      userInfo: {
        _id: "abc123y76zsfg",
      }
    }
  }

  return response?.data;
};

export const addNewTaskApi = async (formData) => {
  const response = await axios.post(
    "https://kanban-style-todo-applicationbackend.vercel.app/api/task/add-new-task",
    formData
  );

  return response?.data;
};

export const getAllTasksApi = async (getCurrentUserId) => {
  const response = await axios.get(
    `https://kanban-style-todo-applicationbackend.vercel.app/api/task/get-all-tasks-by-userid/${getCurrentUserId}`
  );

  return response?.data;
};

export const updateTaskApi = async (formData) => {
  const response = await axios.put(
    `https://kanban-style-todo-applicationbackend.vercel.app/api/task/update-task`,
    formData
  );

  return response?.data;
};

export const deleteTaskApi = async (getCurrentTaskId) => {
  const response = await axios.delete(
    `https://kanban-style-todo-applicationbackend.vercel.app/api/task/delete-task/${getCurrentTaskId}`
  );

  return response?.data;
};
