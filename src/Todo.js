import React, { useState } from "react";
export default function Todo() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState(null);

  // ******Add Task******
  const addTask = () => {
    if (!inputData) {
      alert("Please add task");
    } else if (edit === null) {
      setItems([...items, inputData]);
      setInputData("");
    } else {
      items.splice(edit, 0, inputData);
      setInputData("");
    }
  };
  // ****** Delete Task *******
  const deleteItem = (id) => {
    const updatedItem = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatedItem);
  };

  //*****Edit Button*******
  const editItem = (id) => {
    let newEditItem = items.find((elem, ind) => {
      return id === ind;
    });
    const finalData = items.splice(id, 1);
    setEdit(id);
    setInputData(finalData.toString());
  };
  //********Remove All ***********
  const removeAll = () => {
    setItems([]);
  };

  return (
    <>
      <div className="main-div">
        <h1 className="heading">
          To-Do <span>App 📝</span>
        </h1>
        <div className="addItems">
          <input
            type="text"
            className="col-sm-6 offset-sm todo_input"
            autoFocus
            value=""
            placeholder="✍️  Add your task.."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <i className="material-icons" title="Add Task" onClick={addTask}>
            &#xe146;
          </i>
        </div>
        <div className="taskList">
          {items.map((elem, ind) => {
            return (
              <div className="eachTask " key={ind}>
                <div className="task-item">
                  {elem}
                  <div className="task-actions">
                    <i
                      className="material-icons listiconedit"
                      title="Edit Task"
                      onClick={() => editItem(ind)}
                    >
                      &#xe22b;
                    </i>
                    <i
                      className="material-icons listicondelete"
                      title="Delete Task"
                      onClick={() => deleteItem(ind)}
                    >
                      &#xe872;
                    </i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
