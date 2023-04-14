import { render, screen } from "@testing-library/react";
import React from "react";
import { TodoContext } from "../../context/TodoContextProvider";
import { activeTabOptions } from "../../utils/constants";
import TodoList from "./TodoList";

describe("TodoList component", () => {
  test("renders Loader when isLoading is true", () => {
    const todoContextValues = {
      isLoading: true,
      activeTab: activeTabOptions.TODO,
      activeTodoList: [],
      completedTodoList: [],
    };
    render(
      <TodoContext.Provider value={todoContextValues}>
        <TodoList />
      </TodoContext.Provider>
    );
    const loaderElement = screen.getByTestId("loader");
    expect(loaderElement).toBeInTheDocument();
  });

  // test("renders ActiveList when activeTab is TODO", () => {
  //   const todoContextValues = {
  //     isLoading: false,
  //     activeTab: activeTabOptions.TODO,
  //   };
  //   render(
  //     <TodoContext.Provider value={todoContextValues}>
  //       <TodoList />
  //     </TodoContext.Provider>
  //   );
  //   const activeListElement = screen.getByTestId("active-list");
  //   expect(activeListElement).toBeInTheDocument();
  // });

  // test("renders CompletedList when activeTab is COMPLETED", () => {
  //   const todoContextValues = {
  //     isLoading: false,
  //     activeTab: activeTabOptions.COMPLETED,
  //   };
  //   render(
  //     <TodoContext.Provider value={todoContextValues}>
  //       <TodoList />
  //     </TodoContext.Provider>
  //   );
  //   const completedListElement = screen.getByTestId("completed-list");
  //   expect(completedListElement).toBeInTheDocument();
  // });
});
