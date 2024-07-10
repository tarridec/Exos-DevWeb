import {createContext, useContext, useState} from "react";

const ctx = createContext();

/*
const defaultValue = {
  user: null,
  loading: true
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
  }
}
*/

const Provider = ({children}) => {
  const [state, setState] = useState([]);

  return (
    <ctx.Provider value={[state, setState]}>
      {children}
    </ctx.Provider>
  );
};

const useCtx = () => {
  const [state, setState] = useContext(ctx);

  return [state, setState];
}

export {Provider}
export default useCtx;