import { useContext } from "react";
import { TodoContext } from "../../context/TodoContextProvider";
import { activeTabOptions } from "../../utils/constants";
import ActiveList from "../ActiveList/ActiveList";
import CompletedList from "../CompletedList/CompletedList";
import Loader from "../Loader/Loader";

const TodoList = () => {
  const { activeTab, isLoading } = useContext(TodoContext);

  if (isLoading) return <Loader />;

  return activeTab === activeTabOptions.TODO ? (
    <ActiveList />
  ) : (
    <CompletedList />
  );
};

export default TodoList;
