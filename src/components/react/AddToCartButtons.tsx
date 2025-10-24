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
  const [addedUnit, setAddedUnit] = useState(false)
  const [addedBulk, setAddedBulk] = useState(false)

  const hasBulkPrice = parseBulkPrice(product.price || "") !== null
  const hasUnitPrice = parseUnitPrice(product.minimumPrice || "") !== null

  const handleAdd = (type: "unit" | "bulk") => {
    addItem(product, type)

    // Mostrar feedback visual
    if (type === "unit") {
      setAddedUnit(true)
      setTimeout(() => setAddedUnit(false), 1500)
    } else {
      setAddedBulk(true)
      setTimeout(() => setAddedBulk(false), 1500)
    }
  }

  return (
    <div className="add-to-cart-buttons">
      {hasUnitPrice && (
        <button onClick={() => handleAdd("unit")} className={`add-to-cart-btn ${addedUnit ? "added" : ""}`}>
          {addedUnit ? "✓ Agregado" : "Agregar por Unidad"}
        </button>
      )}
      {hasBulkPrice && (
        <button onClick={() => handleAdd("bulk")} className={`add-to-cart-btn ${addedBulk ? "added" : ""}`}>
          {addedBulk ? "✓ Agregado" : "Agregar por Bulto"}
        </button>
      )}
    </div>
  )
}
