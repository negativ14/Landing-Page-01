import { useContext, createContext, useState } from "react";

const ModelContext = createContext();

function ModelContextProvider({ children }) {
  const [activeModel, setActiveModel] = useState(false);

  return (
    <ModelContext.Provider value={{ activeModel, setActiveModel }}>
      {children}
    </ModelContext.Provider>
  );
}

function useModelContext(){
    return useContext(ModelContext);
}

export {
    ModelContextProvider,
    useModelContext
}