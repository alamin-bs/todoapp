import { createSlice } from "@reduxjs/toolkit";
import taskModel from "./../components/interfaces/task";

let id = 0;
const slice = createSlice({
  name: "tasks",
  initialState: [] as taskModel[],
  reducers: {
    taskAdded: (tasks, action) => {
      tasks.push({
        id: ++id,
        name: action.payload.name,
        isDone: false,
        taskDuration: 0,
      });
    },
    taskRemoved: (tasks, action) => {
      const index = tasks.findIndex((task) => task.id === action.payload.id);
      tasks.splice(index, 1);
    },
    taskDone: (tasks, action) => {
      const index = tasks.findIndex((task) => task.id === action.payload.id);
      tasks[index].isDone = true;
      tasks[index].taskDuration = action.payload.taskDuration;
    },
  },
});

export const getDoneUndoneBug = (tasks: taskModel[]) => {
  let done: number = 0;
  let undone: number = 0;
  tasks.forEach((x) => (x.isDone ? done++ : undone++));
  if (!done && !undone) return [{ title: "no task available", total: 1 }];
  return [
    {
      title: "Done tasks",
      total: done,
    },
    { title: "Undone tasks", total: undone },
  ];
};

export const { taskAdded, taskRemoved, taskDone } = slice.actions;

export default slice.reducer;
