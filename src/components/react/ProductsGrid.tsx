"use client"

import type React from "react"
import { useState, useEffect } from "react"
import '../../styles/productos.css'

interface Subcategory {
  id: string
  name: string
}

interface Category {
  id: string
  name: string
  subcategories: Subcategory[]
}

interface Product {
  id: string
  name: string
  description: string
  price: string
  image: string
  category: string
  subcategory: string
  detailedDescription: string
  gallery: string[]
}

interface ProductsGridProps {
  initialProducts: Product[]
  categories: Category[]
  initialCategory?: string
  initialSubcategory?: string
  initialPage?: number
}

const ProductsGrid: React.FC<ProductsGridProps> = ({
  initialProducts,
  categories,
  initialCategory = "todos",
  initialSubcategory = "todos",
  initialPage = 1,
}) => {
  // Estado
  const [currentCategory, setCurrentCategory] = useState<string>(initialCategory)
  const [currentSubcategory, setCurrentSubcategory] = useState<string>(initialSubcategory)
  const [currentPage, setCurrentPage] = useState<number>(initialPage)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts)
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([])
  const [totalPages, setTotalPages] = useState<number>(1)

  const productsPerPage = 9 // 3x3 grid

  // Filtrar productos cuando cambian los filtros
  useEffect(() => {
    let filtered = [...initialProducts]

    if (currentCategory !== "todos") {
      filtered = filtered.filter((product) => product.category === currentCategory)

      if (currentSubcategory !== "todos") {
        filtered = filtered.filter((product) => product.subcategory === currentSubcategory)
      }
    }

    setFilteredProducts(filtered)
    setTotalPages(Math.ceil(filtered.length / productsPerPage))
    setCurrentPage(1) // Resetear a la primera página cuando cambian los filtros
  }, [currentCategory, currentSubcategory, initialProducts])

  // Actualizar productos mostrados cuando cambia la página o los filtros
  useEffect(() => {
    const startIndex = (currentPage - 1) * productsPerPage
    const endIndex = startIndex + productsPerPage
    setDisplayedProducts(filteredProducts.slice(startIndex, endIndex))
  }, [currentPage, filteredProducts])

  // Actualizar URL cuando cambian los filtros o la página
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    if (currentCategory !== "todos") {
      params.set("categoria", currentCategory)

      if (currentSubcategory !== "todos") {
        params.set("subcategoria", currentSubcategory)
      } else {
        params.delete("subcategoria")
      }
    } else {
      params.delete("categoria")
      params.delete("subcategoria")
    }

    if (currentPage > 1) {
      params.set("pagina", currentPage.toString())
    } else {
      params.delete("pagina")
    }

    const newUrl = params.toString() ? `${window.location.pathname}?${params.toString()}` : window.location.pathname

    window.history.pushState(
      { categoria: currentCategory, subcategoria: currentSubcategory, pagina: currentPage },
      "",
      newUrl,
    )
  }, [currentCategory, currentSubcategory, currentPage])

  // Manejadores de eventos
  const handleCategoryClick = (categoryId: string) => {
    setCurrentCategory(categoryId)
    setCurrentSubcategory("todos")
  }

  const handleSubcategoryClick = (categoryId: string, subcategoryId: string) => {
    setCurrentCategory(categoryId)
    setCurrentSubcategory(subcategoryId)
  }

  const handlePageClick = (page: number) => {
    setCurrentPage(page)
    // Scroll al inicio de los productos
    document.querySelector(".products-section")?.scrollIntoView({ behavior: "smooth" })
  }

  // Renderizar categorías
  const renderCategories = () => {
    return (
      <section className="categories-section">
        <div className="main-categories-container">
          <button
            className={`category-btn ${currentCategory === "todos" ? "active" : ""}`}
            onClick={() => handleCategoryClick("todos")}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${currentCategory === category.id ? "active" : ""}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="subcategories-container">
          {currentCategory === "todos" ? (
            categories.map((category) => (
              <div className="subcategory-group" key={category.id}>
                <h3 className="subcategory-title">{category.name}</h3>
                <ul className="subcategory-list">
                  <li className="subcategory-item">
                    <button
                      className={`subcategory-link ${currentSubcategory === "todos" && currentCategory === category.id ? "active" : ""}`}
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      Todos
                    </button>
                  </li>
                  {category.subcategories.map((subcategory) => (
                    <li className="subcategory-item" key={subcategory.id}>
                      <button
                        className={`subcategory-link ${currentSubcategory === subcategory.id && currentCategory === category.id ? "active" : ""}`}
                        onClick={() => handleSubcategoryClick(category.id, subcategory.id)}
                      >
                        {subcategory.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <div className="subcategory-group">
              <h3 className="subcategory-title">{categories.find((cat) => cat.id === currentCategory)?.name}</h3>
              <ul className="subcategory-list">
                <li className="subcategory-item">
                  <button
                    className={`subcategory-link ${currentSubcategory === "todos" ? "active" : ""}`}
                    onClick={() => setCurrentSubcategory("todos")}
                  >
                    Todos
                  </button>
                </li>
                {categories
                  .find((cat) => cat.id === currentCategory)
                  ?.subcategories.map((subcategory) => (
                    <li className="subcategory-item" key={subcategory.id}>
                      <button
                        className={`subcategory-link ${currentSubcategory === subcategory.id ? "active" : ""}`}
                        onClick={() => setCurrentSubcategory(subcategory.id)}
                      >
                        {subcategory.name}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    )
  }

  // Renderizar productos
  const renderProducts = () => {
    if (displayedProducts.length === 0) {
      return (
        <div className="no-products">
          <p>No se encontraron productos en esta categoría.</p>
        </div>
      )
    }

    return (
      <div className="products-grid">
        {displayedProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <a href={`/productos/${product.id}`}>
                <img src={product.image || "/placeholder.svg"} alt={product.name} loading="lazy" />
              </a>
            </div>
            <div className="product-info">
              <h3 className="product-title">
                <a href={`/productos/${product.id}`}>{product.name}</a>
              </h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <a href={`/productos/${product.id}`} className="product-btn">
                Ver detalles
              </a>
            </div>
          </div>
        ))}
      </div>
    )
  }

  // Renderizar paginación
  const renderPagination = () => {
    if (totalPages <= 1) return null

    const showFirst = currentPage > 3
    const showLast = currentPage < totalPages - 2
    const showPrevious = currentPage > 1
    const showNext = currentPage < totalPages

    // Crear array de páginas a mostrar
    let pages: number[] = []
    if (totalPages <= 5) {
      // Si hay 5 o menos páginas, mostrar todas
      pages = Array.from({ length: totalPages }, (_, i) => i + 1)
    } else {
      // Siempre incluir la página actual
      pages.push(currentPage)

      // Incluir una o dos páginas antes de la actual
      if (currentPage > 1) pages.unshift(currentPage - 1)
      if (currentPage > 2) pages.unshift(currentPage - 2)

      // Incluir una o dos páginas después de la actual
      if (currentPage < totalPages) pages.push(currentPage + 1)
      if (currentPage < totalPages - 1) pages.push(currentPage + 2)

      // Limitar a 5 páginas
      if (pages.length > 5) {
        if (currentPage < totalPages - 2) {
          pages = pages.slice(0, 5)
        } else {
          pages = pages.slice(pages.length - 5)
        }
      }
    }

    return (
      <div className="pagination">
        {showPrevious && (
          <button className="pagination-item pagination-arrow" onClick={() => handlePageClick(currentPage - 1)}>
            &laquo; Anterior
          </button>
        )}

        {showFirst && (
          <>
            <button className="pagination-item" onClick={() => handlePageClick(1)}>
              1
            </button>
            {currentPage > 4 && <span className="pagination-ellipsis">...</span>}
          </>
        )}

        {pages.map((page) => (
          <button
            key={page}
            className={`pagination-item ${page === currentPage ? "active" : ""}`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}

        {showLast && (
          <>
            {currentPage < totalPages - 3 && <span className="pagination-ellipsis">...</span>}
            <button className="pagination-item" onClick={() => handlePageClick(totalPages)}>
              {totalPages}
            </button>
          </>
        )}

        {showNext && (
          <button className="pagination-item pagination-arrow" onClick={() => handlePageClick(currentPage + 1)}>
            Siguiente &raquo;
          </button>
        )}
      </div>
    )
  }

  // Renderizar información de depuración
  const renderDebugInfo = () => {
    if (typeof window === "undefined" || !import.meta.env.DEV) return null

    return (
      <div className="debug-info">
        <p>Categoría: {currentCategory}</p>
        <p>Subcategoría: {currentSubcategory}</p>
        <p>Página: {currentPage}</p>
        <p>Total productos filtrados: {filteredProducts.length}</p>
        <p>Productos en esta página: {displayedProducts.length}</p>
      </div>
    )
  }

  return (
    <>
      {renderDebugInfo()}
      {renderCategories()}
      <section className="products-section">
        <div className="products-container">
          {renderProducts()}
          {renderPagination()}
        </div>
      </section>
    </>
  )
}

export default ProductsGrid

