"use client"

import { useState } from "react"
import { useCartStore } from "../../lib/cart-store"
import { parseBulkPrice, parseUnitPrice } from "../../lib/price-parser"
import type { Product } from "../../types/product"

interface Props {
  product: Product
}

export default function ProductDetailActions({ product }: Props) {
  const { items, addItem, updateQuantity, removeItem } = useCartStore()
  const [unitQuantity, setUnitQuantity] = useState(1)
  const [bulkQuantity, setBulkQuantity] = useState(1)
  const [addedUnit, setAddedUnit] = useState(false)
  const [addedBulk, setAddedBulk] = useState(false)

  const hasBulkPrice = parseBulkPrice(product.price || "") !== null
  const hasUnitPrice = parseUnitPrice(product.minimumPrice || "") !== null

  const unitItem = items.find((item) => item.product.id === product.id && item.purchaseType === "unit")
  const bulkItem = items.find((item) => item.product.id === product.id && item.purchaseType === "bulk")

  const handleAdd = (type: "unit" | "bulk") => {
    const quantity = type === "unit" ? unitQuantity : bulkQuantity
    const existingItem = type === "unit" ? unitItem : bulkItem

    if (existingItem) {
      updateQuantity(product.id, type, existingItem.quantity + quantity)
    } else {
      for (let i = 0; i < quantity; i++) {
        addItem(product, type)
      }
    }

    if (type === "unit") {
      setAddedUnit(true)
      setTimeout(() => setAddedUnit(false), 1500)
      setUnitQuantity(1)
    } else {
      setAddedBulk(true)
      setTimeout(() => setAddedBulk(false), 1500)
      setBulkQuantity(1)
    }
  }

  const handleRemove = (type: "unit" | "bulk") => {
    removeItem(product.id, type)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "1.5rem" }}>
      {hasUnitPrice && (
        <div
          style={{
            padding: "1.5rem",
            backgroundColor: "#f9fafb",
            borderRadius: "12px",
            border: "2px solid #e5e7eb",
          }}
        >
          <h3 style={{ fontSize: "1.125rem", fontWeight: "700", marginBottom: "1rem", color: "#111" }}>
            Comprar por Unidad (ARS)
          </h3>

          {unitItem ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                }}
              >
                <span style={{ fontSize: "0.95rem", color: "#666" }}>En el carrito:</span>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <button
                    onClick={() => updateQuantity(product.id, "unit", unitItem.quantity - 1)}
                    style={{
                      width: "36px",
                      height: "36px",
                      border: "1px solid #e5e7eb",
                      background: "white",
                      borderRadius: "6px",
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    -
                  </button>
                  <span style={{ fontSize: "1.125rem", fontWeight: "700", minWidth: "40px", textAlign: "center" }}>
                    {unitItem.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(product.id, "unit", unitItem.quantity + 1)}
                    style={{
                      width: "36px",
                      height: "36px",
                      border: "1px solid #e5e7eb",
                      background: "white",
                      borderRadius: "6px",
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem" }}>
                <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <label style={{ fontSize: "0.875rem", color: "#666", whiteSpace: "nowrap" }}>Agregar más:</label>
                  <input
                    type="number"
                    min="1"
                    value={unitQuantity}
                    onChange={(e) => setUnitQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                    style={{
                      width: "80px",
                      padding: "0.5rem",
                      border: "1px solid #e5e7eb",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
                <button
                  onClick={() => handleAdd("unit")}
                  style={{
                    padding: "0.625rem 1.5rem",
                    backgroundColor: addedUnit ? "#10b981" : "#0066cc",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {addedUnit ? "✓ Agregado" : "Agregar"}
                </button>
              </div>

              <button
                onClick={() => handleRemove("unit")}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  backgroundColor: "#fee",
                  color: "#dc2626",
                  border: "1px solid #fecaca",
                  borderRadius: "8px",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                Eliminar del carrito
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <label style={{ fontSize: "0.875rem", color: "#666", minWidth: "70px" }}>Cantidad:</label>
                <input
                  type="number"
                  min="1"
                  value={unitQuantity}
                  onChange={(e) => setUnitQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                  style={{
                    width: "100px",
                    padding: "0.625rem",
                    border: "1px solid #e5e7eb",
                    borderRadius: "6px",
                    fontSize: "1rem",
                  }}
                />
              </div>
              <button
                onClick={() => handleAdd("unit")}
                style={{
                  width: "100%",
                  padding: "1rem",
                  backgroundColor: addedUnit ? "#10b981" : "#0066cc",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {addedUnit ? "✓ Agregado al Carrito" : "Agregar al Carrito"}
              </button>
            </div>
          )}
        </div>
      )}

      {hasBulkPrice && (
        <div
          style={{
            padding: "1.5rem",
            backgroundColor: "#f0fdf4",
            borderRadius: "12px",
            border: "2px solid #86efac",
          }}
        >
          <h3 style={{ fontSize: "1.125rem", fontWeight: "700", marginBottom: "1rem", color: "#111" }}>
            Comprar por Bulto (USD)
          </h3>

          {bulkItem ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  border: "1px solid #86efac",
                }}
              >
                <span style={{ fontSize: "0.95rem", color: "#666" }}>En el carrito:</span>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <button
                    onClick={() => updateQuantity(product.id, "bulk", bulkItem.quantity - 1)}
                    style={{
                      width: "36px",
                      height: "36px",
                      border: "1px solid #86efac",
                      background: "white",
                      borderRadius: "6px",
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    -
                  </button>
                  <span style={{ fontSize: "1.125rem", fontWeight: "700", minWidth: "40px", textAlign: "center" }}>
                    {bulkItem.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(product.id, "bulk", bulkItem.quantity + 1)}
                    style={{
                      width: "36px",
                      height: "36px",
                      border: "1px solid #86efac",
                      background: "white",
                      borderRadius: "6px",
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem" }}>
                <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <label style={{ fontSize: "0.875rem", color: "#666", whiteSpace: "nowrap" }}>Agregar más:</label>
                  <input
                    type="number"
                    min="1"
                    value={bulkQuantity}
                    onChange={(e) => setBulkQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                    style={{
                      width: "80px",
                      padding: "0.5rem",
                      border: "1px solid #86efac",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
                <button
                  onClick={() => handleAdd("bulk")}
                  style={{
                    padding: "0.625rem 1.5rem",
                    backgroundColor: addedBulk ? "#10b981" : "#16a34a",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {addedBulk ? "✓ Agregado" : "Agregar"}
                </button>
              </div>

              <button
                onClick={() => handleRemove("bulk")}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  backgroundColor: "#fee",
                  color: "#dc2626",
                  border: "1px solid #fecaca",
                  borderRadius: "8px",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                Eliminar del carrito
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <label style={{ fontSize: "0.875rem", color: "#666", minWidth: "70px" }}>Cantidad:</label>
                <input
                  type="number"
                  min="1"
                  value={bulkQuantity}
                  onChange={(e) => setBulkQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                  style={{
                    width: "100px",
                    padding: "0.625rem",
                    border: "1px solid #86efac",
                    borderRadius: "6px",
                    fontSize: "1rem",
                  }}
                />
              </div>
              <button
                onClick={() => handleAdd("bulk")}
                style={{
                  width: "100%",
                  padding: "1rem",
                  backgroundColor: addedBulk ? "#10b981" : "#16a34a",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {addedBulk ? "✓ Agregado al Carrito" : "Agregar al Carrito"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
