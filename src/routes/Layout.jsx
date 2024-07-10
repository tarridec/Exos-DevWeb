import { Outlet, Link } from "react-router-dom"

export default function Layout() {
  return (
    <div>
      <div className="h-16 border-b flex items-center px-6 gap-5">
        <Link to="/" className="border px-4 py-2 text-base rounded">Home</Link>
        <Link to="/calc" className="border px-4 py-2 text-base rounded">Calculatrice</Link>
        <Link to="/pokemons" className="border px-4 py-2 text-base rounded">Pokémon</Link>
        <Link to="/toDoList" className="border px-4 py-2 text-base rounded">ToDo List</Link>
      </div>
      <Outlet />
    </div>
  )
}