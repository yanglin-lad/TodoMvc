import TodoHeader from "./components/TodoHeader.jsx";
import ToDoMain from "./components/ToDoMain.jsx";
import ToDoFooter from "./components/ToDoFooter.jsx";

function App() {

  return (
    <div className={'todoapp'}>
      <TodoHeader />
      <ToDoMain />
      <ToDoFooter />
    </div>
  )
}

export default App
