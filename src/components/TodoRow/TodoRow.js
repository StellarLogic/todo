import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaTrash, FaUndoAlt } from "react-icons/fa";

const TodoRow = ({
  id,
  item,
  color,
  isCompleted,
  markComplete,
  undoComplete,
  removeCompletedTodo,
}) => {
  return (
    <div className="todo-row">
      <div className="text-row">
        <div className="bar" style={{ background: color }}></div>
        <h4 className={`text ${isCompleted ? "complete" : ""}`}>{item}</h4>
      </div>
      {!isCompleted ? (
        <button className="btn complete" onClick={() => markComplete(id)}>
          <BsFillCheckCircleFill size="20" />
        </button>
      ) : (
        <>
          <button className="btn undo" onClick={() => undoComplete(id)}>
            <FaUndoAlt size="16" />
          </button>
          <button
            className="btn delete"
            onClick={() => removeCompletedTodo(id)}
          >
            <FaTrash size="16" />
          </button>
        </>
      )}
    </div>
  );
};

export default TodoRow;
