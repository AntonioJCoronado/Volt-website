"use client"

import { useState } from "react"
import { useCartStore } from "../../lib/cart-store"
import type { Product } from "../../types/product"
import { parseBulkPrice, parseUnitPrice } from "../../lib/price-parser"

interface Props {
  product: Product
}

export default function AddToCartButtons({ product }: Props) {
  const addItem = useCartStore((state) => state.addItem)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const items = useCartStore((state) => state.items)
  const [addedUnit, setAddedUnit] = useState(false)
  const [addedBulk, setAddedBulk] = useState(false)
  const [unitQuantity, setUnitQuantity] = useState(1)
  const [bulkQuantity, setBulkQuantity] = useState(1)

  const hasBulkPrice = parseBulkPrice(product.price || "") !== null
  const hasUnitPrice = parseUnitPrice(product.minimumPrice || "") !== null

  const unitItem = items.find((item) => item.product.id === product.id && item.purchaseType === "unit")
  const bulkItem = items.find((item) => item.product.id === product.id && item.purchaseType === "bulk")

  const handleAdd = (type: "unit" | "bulk") => {
    const quantity = type === "unit" ? unitQuantity : bulkQuantity
    const existingItem = type === "unit" ? unitItem : bulkItem

    if (existingItem) {
      // Si ya existe, actualizar la cantidad sumando la nueva
      updateQuantity(product.id, type, existingItem.quantity + quantity)
    } else {
      // Si no existe, agregar múltiples veces
      for (let i = 0; i < quantity; i++) {
        addItem(product, type)
      }
    }

    // Mostrar feedback visual
    if (type === "unit") {
      setAddedUnit(true)
      setTimeout(() => setAddedUnit(false), 1500)
      setUnitQuantity(1) // Reset cantidad
    } else {
      setAddedBulk(true)
      setTimeout(() => setAddedBulk(false), 1500)
      setBulkQuantity(1) // Reset cantidad
    }
  }

  return (
    <div className="add-to-cart-buttons">
      {hasUnitPrice && (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <label style={{ fontSize: "0.875rem", color: "#666", minWidth: "70px" }}>Cantidad:</label>
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
          <button onClick={() => handleAdd("unit")} className={`add-to-cart-btn ${addedUnit ? "added" : ""}`}>
            {addedUnit
              ? "✓ Agregado"
              : unitItem
                ? `Agregar más (${unitItem.quantity} en carrito)`
                : "Agregar por Unidad"}
          </button>
        </div>
      )}
      {hasBulkPrice && (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <label style={{ fontSize: "0.875rem", color: "#666", minWidth: "70px" }}>Cantidad:</label>
            <input
              type="number"
              min="1"
              value={bulkQuantity}
              onChange={(e) => setBulkQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
              style={{
                width: "80px",
                padding: "0.5rem",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
                fontSize: "0.9rem",
              }}
            />
          </div>
          <button onClick={() => handleAdd("bulk")} className={`add-to-cart-btn ${addedBulk ? "added" : ""}`}>
            {addedBulk
              ? "✓ Agregado"
              : bulkItem
                ? `Agregar más (${bulkItem.quantity} en carrito)`
                : "Agregar por Bulto"}
          </button>
        </div>
      )}
    </div>
  )
}
