import React from "react";
import Task from "./Task";
import { TASKS } from "../data";

function TaskList() {
  const tasks = TASKS.map((task) => (
    <Task key={task.text} text={task.text} category={task.category} />
  ));

  return <div className="tasks">{tasks}</div>;
}

export default TaskList;