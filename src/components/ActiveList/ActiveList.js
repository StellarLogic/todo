import { useContext } from "react";
import { TodoContext } from "../../context/TodoContextProvider";
import Empty from "../Empty/Empty";
import TodoRow from "../TodoRow/TodoRow";

const ActiveList = () => {
  const { activeTodoList, markComplete } = useContext(TodoContext);

  if (activeTodoList.length <= 0) return <Empty />;

  return (
    <div className="todo-container">
      {activeTodoList.map((todo, index) => (
        <TodoRow key={todo.id} {...todo} markComplete={markComplete} />
      ))}
    </div>
  );
};

export default ActiveList;
