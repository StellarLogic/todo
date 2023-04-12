import { useContext } from "react";
import { TodoContext } from "../../context/TodoContextProvider";
import Empty from "../Empty/Empty";
import TodoRow from "../TodoRow/TodoRow";

const CompletedList = () => {
  const { completedTodoList, undoComplete, removeCompletedTodo } =
    useContext(TodoContext);

  if (completedTodoList.length <= 0) return <Empty />;

  return (
    <div className="todo-container completed">
      {completedTodoList.map((todo) => (
        <TodoRow
          key={todo.id}
          {...todo}
          undoComplete={undoComplete}
          removeCompletedTodo={removeCompletedTodo}
        />
      ))}
    </div>
  );
};

export default CompletedList;
