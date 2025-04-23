"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import Pagination from "./Pagination";
import "../../styles/productos.css";

interface Subcategory {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
  icon?: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  subcategory: string;
  detailedDescription: string;
  gallery: string[];
}

interface ProductsGridProps {
  initialProducts: Product[];
  categories: Category[];
  initialCategory?: string;
  initialSubcategory?: string;
  initialPage?: number;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({
  initialProducts,
  categories,
  initialCategory = "todos",
  initialSubcategory = "todos",
  initialPage = 1,
}) => {
  // Estado
  const [currentCategory, setCurrentCategory] =
    useState<string>(initialCategory);
  const [currentSubcategory, setCurrentSubcategory] =
    useState<string>(initialSubcategory);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(initialProducts);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<string>("recomendado");
  const [activeFilters, setActiveFilters] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Refs para el carrusel de categorías
  const categoriesRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(true);

  // Productos por página (3x4 grid = 12 productos)
  const productsPerPage = 12;

  // Filtrar productos cuando cambian los filtros
  useEffect(() => {
    let filtered = [...initialProducts];

    // Filtrar por búsqueda
    if (searchTerm.trim() !== "") {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower)
      );
    }

    // Filtrar por categoría
    if (currentCategory !== "todos") {
      filtered = filtered.filter(
        (product) => product.category === currentCategory
      );

      // Filtrar por subcategoría
      if (currentSubcategory !== "todos") {
        filtered = filtered.filter(
          (product) => product.subcategory === currentSubcategory
        );
      }
    }

    // Ordenar productos
    if (sortOrder === "menor-precio") {
      filtered.sort((a, b) => {
        const priceA = Number.parseFloat(a.price.replace(/[^\d.-]/g, ""));
        const priceB = Number.parseFloat(b.price.replace(/[^\d.-]/g, ""));
        return priceA - priceB;
      });
    } else if (sortOrder === "mayor-precio") {
      filtered.sort((a, b) => {
        const priceA = Number.parseFloat(a.price.replace(/[^\d.-]/g, ""));
        const priceB = Number.parseFloat(b.price.replace(/[^\d.-]/g, ""));
        return priceB - priceA;
      });
    }

    setFilteredProducts(filtered);
    setTotalPages(Math.ceil(filtered.length / productsPerPage));
    setCurrentPage(1); // Resetear a la primera página cuando cambian los filtros

    // Contar filtros activos
    let count = 0;
    if (currentCategory !== "todos") count++;
    if (currentSubcategory !== "todos") count++;
    if (sortOrder !== "recomendado") count++;
    setActiveFilters(count);
  }, [
    currentCategory,
    currentSubcategory,
    initialProducts,
    searchTerm,
    sortOrder,
  ]);

  // Actualizar productos mostrados cuando cambia la página o los filtros
  useEffect(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    setDisplayedProducts(filteredProducts.slice(startIndex, endIndex));
  }, [currentPage, filteredProducts]);

  // Actualizar URL cuando cambian los filtros o la página
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (currentCategory !== "todos") {
      params.set("categoria", currentCategory);

      if (currentSubcategory !== "todos") {
        params.set("subcategoria", currentSubcategory);
      } else {
        params.delete("subcategoria");
      }
    } else {
      params.delete("categoria");
      params.delete("subcategoria");
    }

    if (currentPage > 1) {
      params.set("pagina", currentPage.toString());
    } else {
      params.delete("pagina");
    }

    if (searchTerm) {
      params.set("buscar", searchTerm);
    } else {
      params.delete("buscar");
    }

    if (sortOrder !== "recomendado") {
      params.set("ordenar", sortOrder);
    } else {
      params.delete("ordenar");
    }

    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;

    window.history.pushState(
      {
        categoria: currentCategory,
        subcategoria: currentSubcategory,
        pagina: currentPage,
        buscar: searchTerm,
        ordenar: sortOrder,
      },
      "",
      newUrl
    );
  }, [currentCategory, currentSubcategory, currentPage, searchTerm, sortOrder]);

  // Detectar si estamos en PC o móvil para establecer el modo de vista
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        // En PC, verificar si estamos viendo un producto individual
        const isProductDetail =
          window.location.pathname.includes("/productos/") &&
          !window.location.pathname.endsWith("/productos/");

        // Si estamos viendo un producto individual, usar vista de lista
        if (isProductDetail) {
          setViewMode("list");
        }
      } else {
        // En móvil, siempre usar vista de cuadrícula
        setViewMode("grid");
      }
    };

    // Ejecutar al cargar y cuando cambie el tamaño de la ventana
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Comprobar si se deben mostrar las flechas de navegación
  useEffect(() => {
    const checkArrows = () => {
      const container = categoriesRef.current;
      if (!container) return;

      setShowLeftArrow(container.scrollLeft > 10);
      setShowRightArrow(
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 10
      );
    };

    // Comprobar inicialmente
    checkArrows();

    // Añadir listener para el evento scroll
    const container = categoriesRef.current;
    if (container) {
      container.addEventListener("scroll", checkArrows);

      // Limpiar listener
      return () => {
        container.removeEventListener("scroll", checkArrows);
      };
    }
  }, []);

  // Comprobar flechas al cambiar el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      const container = categoriesRef.current;
      if (!container) return;

      setShowLeftArrow(container.scrollLeft > 10);
      setShowRightArrow(
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 10
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Manejadores de eventos
  const handleCategoryClick = (categoryId: string) => {
    setCurrentCategory(categoryId);
    setCurrentSubcategory("todos");
  };

  const handleSubcategoryClick = (subcategoryId: string) => {
    setCurrentSubcategory(subcategoryId);
    setShowFilters(false);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    // Eliminamos el scroll a la sección de productos porque ahora
    // el componente Pagination se encarga de hacer scroll al inicio de la página
  };

  // Manejador para el carrusel
  const scrollCategories = (direction: "left" | "right") => {
    if (!categoriesRef.current) return;

    const container = categoriesRef.current;
    const categoryWidth = 120; // Ancho aproximado de una categoría + margen
    const scrollAmount = direction === "left" ? -categoryWidth : categoryWidth;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  // Manejador para la búsqueda
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // La búsqueda ya se aplica en el useEffect
  };

  // Manejador para cambiar el modo de vista
  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };

  // Manejador para limpiar filtros
  const clearFilters = () => {
    setCurrentCategory("todos");
    setCurrentSubcategory("todos");
    setSortOrder("recomendado");
    setSearchTerm("");
    setShowFilters(false);
  };

  // Función para determinar si un nombre es largo
  const isLongName = (name: string) => {
    return name.length > 12;
  };

  // Renderizar carrusel de categorías
  const renderCategoryCarousel = () => {
    return (
      <div className="category-carousel-wrapper">
        {showLeftArrow && (
          <button
            className="category-arrow category-arrow-left"
            onClick={() => scrollCategories("left")}
            aria-label="Desplazar a la izquierda"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        )}

        <div className="category-carousel" ref={categoriesRef}>
          <div
            className={`category-item ${
              currentCategory === "todos" ? "active" : ""
            }`}
            onClick={() => handleCategoryClick("todos")}
            data-category="todos"
          >
            <div className="category-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
            <span className="category-name">Todos</span>
          </div>

          {categories.map((category) => (
            <div
              key={category.id}
              className={`category-item ${
                currentCategory === category.id ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category.id)}
              data-category={category.id}
            >
              <div className="category-icon">
                {category.icon ? (
                  <img
                    src={category.icon || "/img/placeholder.svg"}
                    alt={category.name}
                    width="30"
                    height="30"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="7"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                )}
              </div>
              <span
                className={`category-name ${
                  isLongName(category.name) ? "long-name" : ""
                }`}
              >
                {category.name}
              </span>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button
            className="category-arrow category-arrow-right"
            onClick={() => scrollCategories("right")}
            aria-label="Desplazar a la derecha"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        )}
      </div>
    );
  };

  // Renderizar barra de búsqueda y filtros
  const renderSearchAndFilters = () => {
    return (
      <div className="search-filter-container">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Buscar productos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </form>

        <button
          className="filter-button"
          onClick={() => setShowFilters(!showFilters)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="21" x2="4" y2="14"></line>
            <line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line>
            <line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line>
            <line x1="9" y1="8" x2="15" y2="8"></line>
            <line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
          {activeFilters > 0 && (
            <span className="filter-badge">{activeFilters}</span>
          )}
          <span>Filtros</span>
        </button>
      </div>
    );
  };

  // Renderizar modal de filtros
  const renderFilterModal = () => {
    if (!showFilters) return null;

    return (
      <div className="filter-modal-overlay">
        <div className="filter-modal">
          <div className="filter-modal-header">
            <h3>Filtros</h3>
            <div className="filter-actions">
              <button className="clear-filters-button" onClick={clearFilters}>
                Limpiar filtros
              </button>
              <button
                className="close-modal-button"
                onClick={() => setShowFilters(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          <div className="filter-section">
            <h4 className="filter-section-title">Ordenar por</h4>
            <div className="filter-options">
              <label className="filter-option">
                <input
                  type="radio"
                  name="sort"
                  value="recomendado"
                  checked={sortOrder === "recomendado"}
                  onChange={() => setSortOrder("recomendado")}
                />
                <span className="radio-custom"></span>
                Recomendado
              </label>
              <label className="filter-option">
                <input
                  type="radio"
                  name="sort"
                  value="menor-precio"
                  checked={sortOrder === "menor-precio"}
                  onChange={() => setSortOrder("menor-precio")}
                />
                <span className="radio-custom"></span>
                Menor precio
              </label>
              <label className="filter-option">
                <input
                  type="radio"
                  name="sort"
                  value="mayor-precio"
                  checked={sortOrder === "mayor-precio"}
                  onChange={() => setSortOrder("mayor-precio")}
                />
                <span className="radio-custom"></span>
                Mayor precio
              </label>
            </div>
          </div>

          {currentCategory !== "todos" && (
            <div className="filter-section">
              <h4 className="filter-section-title">
                {categories.find((cat) => cat.id === currentCategory)?.name ||
                  "Subcategorías"}
              </h4>
              <div className="filter-options subcategory-options">
                <label className="filter-option">
                  <input
                    type="radio"
                    name="subcategory"
                    value="todos"
                    checked={currentSubcategory === "todos"}
                    onChange={() => handleSubcategoryClick("todos")}
                  />
                  <span className="radio-custom"></span>
                  Todos
                </label>
                {categories
                  .find((cat) => cat.id === currentCategory)
                  ?.subcategories.map((subcategory) => (
                    <label key={subcategory.id} className="filter-option">
                      <input
                        type="radio"
                        name="subcategory"
                        value={subcategory.id}
                        checked={currentSubcategory === subcategory.id}
                        onChange={() => handleSubcategoryClick(subcategory.id)}
                      />
                      <span className="radio-custom"></span>
                      {subcategory.name}
                    </label>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Renderizar productos
  const renderProducts = () => {
    if (displayedProducts.length === 0) {
      return (
        <div className="no-products">
          <p>No se encontraron productos que coincidan con tu búsqueda.</p>
          <button className="clear-search-button" onClick={clearFilters}>
            Limpiar filtros
          </button>
        </div>
      );
    }

    // Determinar si estamos en la página de detalle de un producto individual
    const isProductDetail =
      typeof window !== "undefined" &&
      window.location.pathname.includes("/productos/") &&
      !window.location.pathname.endsWith("/productos/");

    // Aplicar la clase list-view si estamos en PC y viendo un producto individual
    const gridClassName = `products-grid ${
      isProductDetail && window.innerWidth >= 992 ? "list-view" : ""
    }`;

    return (
      <div className={gridClassName}>
        {displayedProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <a href={`/productos/${product.id}`}>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="product-info">
              <h3 className="product-title">
                <a href={`/productos/${product.id}`}>
                  {product.name}
                </a>
              </h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <a
                href={`/productos/${product.id}`}
                className="product-btn"
              >
                Ver detalles
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Renderizar información de depuración
  const renderDebugInfo = () => {
    if (typeof window === "undefined" || !import.meta.env.DEV) return null;

    return (
      <div className="debug-info">
        <p>Categoría: {currentCategory}</p>
        <p>Subcategoría: {currentSubcategory}</p>
        <p>Página: {currentPage}</p>
        <p>Búsqueda: {searchTerm}</p>
        <p>Orden: {sortOrder}</p>
        <p>Total productos filtrados: {filteredProducts.length}</p>
        <p>Productos en esta página: {displayedProducts.length}</p>
      </div>
    );
  };

  // Modificar el renderizado del encabezado para centrarlo mejor
  return (
    <>
      {renderDebugInfo()}
      <div className="products-header">
        <h2 className="category-title">
          {currentCategory !== "todos"
            ? categories.find((cat) => cat.id === currentCategory)?.name
            : "Todos los productos"}
        </h2>
        {currentSubcategory !== "todos" && (
          <h3 className="subcategory-title">
            {
              categories
                .find((cat) => cat.id === currentCategory)
                ?.subcategories.find((sub) => sub.id === currentSubcategory)
                ?.name
            }
          </h3>
        )}
      </div>

      {renderCategoryCarousel()}
      {renderSearchAndFilters()}
      {renderFilterModal()}

      <section className="products-section">
        <div className="products-container">
          {renderProducts()}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageClick}
          />
        </div>
      </section>
    </>
  );
};

export default ProductsGrid;
