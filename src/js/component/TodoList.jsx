import React, { useState } from "react";

const TodoList = () => {
  const [taskA,  setTaskAuwu] = useState([]);
  const [tasknwn, setTasknwn] = useState("");

  function addTask(event) {
    if (event.key === "Enter") {
      setTasknwn(event.target.value);
       setTaskAuwu([...taskA, tasknwn]);
    }
  }

  function deleteTask(id) {
    const deleteThisTask = taskA.filter((tasknwn, index) => index !== id);
     setTaskAuwu(deleteThisTask);
  
    
  }

  return (
    <div className="container-flex align-items-center">
      <div className="pt-2 fs-1 text-white">Todos</div>
      <div className="card mt-3 mx-auto p-1" style={{ width: "45rem" }}>
        <input
          type="text"
          placeholder="What to do?"
          onKeyDown={(event) => addTask(event)}
          onChange={(event) => setTasknwn(event.target.value)}
          value={tasknwn}
        />
        <ul className="list-group d-flex justify-content-around my-1">
          {taskA.map((tasknwn, id) => {
            return (
              <li className="list-group-item d-flex justify-content-between px-3" key={`tasknwn-${id}`}>
                {tasknwn}
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm border-0"
                  onClick={() => deleteTask(id)}
                >
                  <i class="fas fa-minus-circle"></i>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;