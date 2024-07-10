import {createContext, useContext, useState} from "react";

const ctx = createContext();

const PokemonListProvider = ({children}) => {
  const [state, setState] = useState([]);

  return (
    <ctx.Provider value={[state, setState]}>
      {children}
    </ctx.Provider>
  );
};

const usePokemonList = () => {
  const [state, setState] = useContext(ctx);

  return [state, setState];
}

export {PokemonListProvider, usePokemonList}
export default usePokemonList;