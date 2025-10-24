"use client"

import { useCartStore } from "../../lib/cart-store"

export default function CartButton() {
  const { getTotals, setIsOpen } = useCartStore()
  const { itemCount } = getTotals()

  const handleClick = () => {
    setIsOpen(true)
  }

  if (itemCount === 0) return null

  return (
    <button onClick={handleClick} className="cart-button">
      🛒{itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
    </button>
  )
}
