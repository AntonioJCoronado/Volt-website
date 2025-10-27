"use client"

import { useCartStore } from "../../lib/cart-store"

export default function CartButton() {
  const { getTotals } = useCartStore()
  const { itemCount } = getTotals()

  const handleClick = () => {
    window.location.href = "/ver-pedido"
  }

  if (itemCount === 0) return null

  return (
    <button onClick={handleClick} className="cart-button" aria-label="Ver carrito">
      🛒{itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
    </button>
  )
}
