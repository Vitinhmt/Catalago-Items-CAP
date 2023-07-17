import { createContext, useContext } from "react";

import { useFetch } from "../hooks/useFetch";

const url =
  "https://raw.githubusercontent.com/Josuerx12/josuerx12/main/Base%20para%20o%20cat%C3%A1logo.json";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { data, loading, error } = useFetch(url);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const database = () => {
  return useContext(DataContext);
};
