import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import TodoContextProvider from "./context/TodoContextProvider";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Header />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}
