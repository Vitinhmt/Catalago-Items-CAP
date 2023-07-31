import { createContext, useContext } from "react";

import { useFilter } from "../hooks/useFilter";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const {
    filteredProducts,
    setCode,
    setDesc,
    setCategory,
    cleanFilters,
    loading,
    error,
  } = useFilter();

  return (
    <DataContext.Provider
      value={{
        filteredProducts,
        setCode,
        setDesc,
        setCategory,
        loading,
        error,
        cleanFilters,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const database = () => {
  return useContext(DataContext);
};
