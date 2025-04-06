"use client";

import type React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const showFirst = currentPage > 3;
  const showLast = currentPage < totalPages - 2;
  const showPrevious = currentPage > 1;
  const showNext = currentPage < totalPages;

  // Crear array de páginas a mostrar
  let pages: number[] = [];
  if (totalPages <= 5) {
    // Si hay 5 o menos páginas, mostrar todas
    pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    // Siempre incluir la página actual
    pages.push(currentPage);

    // Incluir una o dos páginas antes de la actual
    if (currentPage > 1) pages.unshift(currentPage - 1);
    if (currentPage > 2) pages.unshift(currentPage - 2);

    // Incluir una o dos páginas después de la actual
    if (currentPage < totalPages) pages.push(currentPage + 1);
    if (currentPage < totalPages - 1) pages.push(currentPage + 2);

    // Limitar a 5 páginas
    if (pages.length > 5) {
      if (currentPage < totalPages - 2) {
        pages = pages.slice(0, 5);
      } else {
        pages = pages.slice(pages.length - 5);
      }
    }
  }

  return (
    <div className="pagination">
      {showPrevious && (
        <button
          className="pagination-item pagination-arrow"
          onClick={() => {
            onPageChange(currentPage - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          &laquo; Anterior
        </button>
      )}

      {showFirst && (
        <>
          <button
            className="pagination-item"
            onClick={() => {
              onPageChange(1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            1
          </button>
          {currentPage > 4 && <span className="pagination-ellipsis">...</span>}
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          className={`pagination-item ${page === currentPage ? "active" : ""}`}
          onClick={() => {
            onPageChange(page);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {page}
        </button>
      ))}

      {showLast && (
        <>
          {currentPage < totalPages - 3 && (
            <span className="pagination-ellipsis">...</span>
          )}
          <button
            className="pagination-item"
            onClick={() => {
              onPageChange(totalPages);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {totalPages}
          </button>
        </>
      )}

      {showNext && (
        <button
          className="pagination-item pagination-arrow"
          onClick={() => {
            onPageChange(currentPage + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Siguiente &raquo;
        </button>
      )}
    </div>
  );
};

export default Pagination;
