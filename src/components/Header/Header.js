import { useContext } from "react";
import { TodoContext } from "../../context/TodoContextProvider";
import { activeTabOptions } from "../../utils/constants";
import TodoForm from "../TodoForm/TodoForm";

const Header = () => {
  const {
    activeTab,
    activeTodoList,
    completedTodoList,
    setActiveTodo,
    setActiveCompleted,
  } = useContext(TodoContext);

  const emptyTodoList = activeTodoList.length === 0;
  const emptyCompletedList = completedTodoList.length === 0;

  return (
    <>
      <div className="header">
        <div
          className={`toggle-btn ${
            activeTabOptions.TODO === activeTab ? "active" : ""
          }`}
          onClick={setActiveTodo}
        >
          <span className="text">Todo</span>
          <span className={`count ${emptyTodoList ? "empty" : ""}`}>
            {activeTodoList.length}
          </span>
        </div>
        <div
          className={`toggle-btn ${
            activeTabOptions.COMPLETED === activeTab ? "active" : ""
          }`}
          onClick={setActiveCompleted}
        >
          <span className="text">Completed</span>
          <span className={`count ${emptyCompletedList ? "empty" : ""}`}>
            {completedTodoList.length}
          </span>
        </div>
      </div>
      {activeTab === activeTabOptions.TODO && <TodoForm />}
    </>
  );
};

export default Header;
