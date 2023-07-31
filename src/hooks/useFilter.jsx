import { useState } from "react";
import { useFetch } from "./useFetch";

const url =
  "https://raw.githubusercontent.com/Josuerx12/josuerx12/main/Base%20para%20o%20cat%C3%A1logo.json";

export const useFilter = () => {
  const { data, loading, error } = useFetch(url);
  const [code, setCode] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");

  function cleanFilters() {
    setCode("");
    setDesc("");
    setCategory("");
  }

  const filteredProducts =
    loading === false &&
    error === "" &&
    data
      .filter(
        (produto) =>
          !code ||
          produto.Codigo_Produto.toLowerCase().includes(code.toLowerCase())
      )
      .filter(
        (produto) =>
          !desc || produto.Descricao.toLowerCase().includes(desc.toLowerCase())
      )
      .filter(
        (produto) =>
          !category ||
          produto.Categoria.toLowerCase().includes(category.toLowerCase())
      );

  return {
    filteredProducts,
    setCode,
    setDesc,
    setCategory,
    cleanFilters,
    loading,
    error,
  };
};
