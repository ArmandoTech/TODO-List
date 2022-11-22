import './App.css';
import { CreateButton } from "./components/createButton"
import { TodoCounter } from "./components/todoCounter"
import { TodoItem } from "./components/todoItem"
import { TodoList } from "./components/todoList"
import { TodoSearch } from "./components/todoSearch"


const examples= [
  {text: 'Something 1', completed: true},
  {text: 'Something 2', completed: false},
  {text: 'Something 3', completed: false},
  {text: 'Something 4', completed: false}
]

function App() {
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
      {examples.map((element, index) => ( 
        <TodoItem text={element.text} completed={element.completed} key={index}/>
      ))}
      </TodoList>

      <CreateButton/> 
    </>
  );
}

export default App;
