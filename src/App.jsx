import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./routes/Layout";
import Calc from "./routes/Calculatrice";
import PokemonSingle from "./routes/PokemonSingle";
import PokemonList from "./routes/PokemonList";
import ToDoList from "./routes/ToDoList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <></>,
      }, {
        path: "/calc",
        element: <Calc />
      }, {
        path: "/pokemons",
        element: <PokemonList />
      }, {
        path: "/pokemons/:id",
        element: <PokemonSingle />
      }, {
        path: "/toDoList",
        element: <ToDoList />
      }
    ]
  }
])
const App = () => {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;