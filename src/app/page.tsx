import TodoList from "./Components/TodoList";

export default function Home() {
  return (
    <div>
      <div className="m-20">
        <div className="text-center font-Poppins font-semibold">TODOLIST</div>
        <TodoList />
      </div>
    </div>
  )
}
