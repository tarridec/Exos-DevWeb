import {useState, useEffect, useMemo} from "react";
import { useParams } from 'react-router-dom';
import usePokemonList from "../contexts/pokemonList";
import {Link} from "react-router-dom";

export default function PokemonSingle() {
  const { id } = useParams();
  const [tasks] = usePokemonList();

  const current2 = useMemo(() => tasks.find(pokemon => `${pokemon.id}` === id), [id, tasks]);

  const [current, setCurrent] = useState(null);
  useEffect(() => {
    const pokemon = tasks.find(pokemon => `${pokemon.id}` === id);
    setCurrent(pokemon);
  }, [id, tasks])


  if (!current) return <>Loading...</>;

  return (
    <div className="px-6 py-4 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-2">{current.name}</h1>
      <p>PV: {current.attack}</p>
      <p>Attaque: {current.attack}</p>
      <p>Défense: {current.defense}</p>
      <p>Attaque Spéciale: {current.attack}</p>
      <p>Défense Spéciale: {current.attack}</p>
      <p>Vitesse: {current.attack}</p>
      <p>Type: {current.type}{current.type2 ? ` - ${current.type2}` : ""}</p>
      <Link to="/tasks" className="border px-4 py-2 text-base rounded mt-4">Back</Link>
    </div>
  )
}