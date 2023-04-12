import { nanoid } from "nanoid";
import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContextProvider";
import { COLOR_LIST } from "../../utils/constants";

const TodoForm = () => {
  const [todoText, setTodoText] = useState("");
  const [error, setError] = useState("");

  const { addNewTodo, isLoading } = useContext(TodoContext);

  const handleChange = ({ target }) => {
    if (error) setError("");
    const value = target.value;
    setTodoText(value);
  };

  const handleAddNewTodo = () => {
    if (todoText.length <= 0) return setError("Todo Can't be Empty");

    const randomIndex = Math.floor(Math.random() * COLOR_LIST.length);

    addNewTodo({
      id: nanoid(),
      item: todoText,
      isCompleted: false,
      color: COLOR_LIST[randomIndex],
    });
    reset();
  };

  const reset = () => {
    setTodoText("");
    setError("");
  };

  return (
    <div className="form-container">
      <div className="form">
        <input
          className="add-input"
          disabled={isLoading}
          value={todoText}
          onChange={handleChange}
        />
        <button
          disabled={isLoading}
          className="add-new-btn"
          onClick={handleAddNewTodo}
        >
          + Add
        </button>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default TodoForm;
