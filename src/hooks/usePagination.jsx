import { useState } from "react";
const itensPorPagina = 20;
export const usePagination = (collection) => {
  // pagina for 1, itens da posição 0 a 29 de filteredProducts
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itensPorPagina;
  const endIndex = startIndex + itensPorPagina;

  const totalPages = collection
    ? Math.ceil(collection.length / itensPorPagina)
    : 1;

  // Slice separa uma parte do array de objetos!!!! importantissimo
  const paginatedCollection =
    collection && collection.slice(startIndex, endIndex);

  if (currentPage > totalPages) {
    setCurrentPage(totalPages);
  }

  return { paginatedCollection, currentPage, totalPages, setCurrentPage };
};
