import { createContext, useEffect, useMemo, useState } from "react";
import { activeTabOptions } from "../utils/constants";

export const TodoContext = createContext(null);

const TodoContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [activeTab, setActiveTab] = useState(activeTabOptions.TODO);

  useEffect(() => {
    const prepareState = async () => {
      try {
        setIsLoading(true);

        const localTodoListString = await localStorage.getItem(
          "local-todo-list"
        );
        if (localTodoListString) {
          const localTodoList = JSON.parse(localTodoListString);
          setTodoList(localTodoList);
        }
      } catch (error) {
        console.log(
          "🚀 ~ file: TodoContextProvider.js:24 ~ prepareState ~ error:",
          error
        );
      }
      setIsLoading(false);
    };

    prepareState();
  }, []);

  useEffect(() => {
    updateLocalTodoList(todoList);
  }, [todoList]);

  const updateLocalTodoList = async (todoList) => {
    if (todoList.length <= 0) return;

    const stringTodoList = JSON.stringify(todoList);
    localStorage.setItem("local-todo-list", stringTodoList);
  };

  const setActiveTodo = () => setActiveTab(activeTabOptions.TODO);

  const setActiveCompleted = () => setActiveTab(activeTabOptions.COMPLETED);

  const markComplete = (id) => {
    const updatedList = todoList.map((todo) => {
      if (todo.id === id)
        return {
          ...todo,
          isCompleted: true,
        };

      return todo;
    });

    setTodoList(updatedList);
  };

  const undoComplete = (id) => {
    const updatedList = todoList.map((todo) => {
      if (todo.id === id)
        return {
          ...todo,
          isCompleted: false,
        };

      return todo;
    });

    setTodoList(updatedList);
  };

  const removeCompletedTodo = (id) => {
    const updatedList = todoList.filter((todo) => todo.id !== id);

    setTodoList(updatedList);
  };

  const addNewTodo = (todo) => {
    setTodoList([todo, ...todoList]);
  };

  const activeTodoList = useMemo(
    () => todoList.filter((todo) => !todo.isCompleted),
    [todoList]
  );

  const completedTodoList = useMemo(
    () => todoList.filter((todo) => todo.isCompleted),
    [todoList]
  );

  return (
    <TodoContext.Provider
      value={{
        todoList,
        isLoading,
        activeTab,
        addNewTodo,
        setActiveTodo,
        setActiveCompleted,
        activeTodoList,
        completedTodoList,
        markComplete,
        undoComplete,
        removeCompletedTodo,
      }}
      className="App"
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
