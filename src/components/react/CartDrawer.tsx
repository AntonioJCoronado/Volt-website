"use client"

import { useCartStore } from "../../lib/cart-store"
import { formatPrice } from "../../lib/price-parser"
import { sendWhatsAppMessage } from "../../lib/whatsapp"

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, clearCart, getTotals, canCheckout, isOpen, setIsOpen } = useCartStore()
  const { totalUSD, totalARS, itemCount } = getTotals()

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleCheckout = () => {
    if (!canCheckout()) return
    sendWhatsAppMessage(items, totalUSD, totalARS)
    handleClose()
  }

  const hasUnitItems = items.some((item) => item.purchaseType === "unit")
  const hasBulkItems = items.some((item) => item.purchaseType === "bulk")
  const minimumNotMet = hasUnitItems && !hasBulkItems && totalARS < 100000

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="cart-drawer-overlay open" onClick={handleClose} />

      {/* Drawer */}
      <div className="cart-drawer open">
        {/* Header */}
        <div className="cart-header">
          <h2>Carrito ({itemCount})</h2>
          <button onClick={handleClose} className="cart-close">
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="cart-content">
          {items.length === 0 ? (
            <div className="cart-empty">
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.product.id}-${item.purchaseType}`} className="cart-item">
                <img
                  src={item.product.image || "/placeholder.svg"}
                  alt={item.product.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.product.name}</h3>
                  <p className="cart-item-type">
                    {item.purchaseType === "bulk" ? "Por Bulto (USD)" : "Por Unidad (ARS)"}
                  </p>
                  <p className="cart-item-price">
                    {item.purchaseType === "bulk"
                      ? `Precio total del bulto: ${formatPrice(item.price, item.currency)}`
                      : `Precio unitario: ${formatPrice(item.price, item.currency)}`}
                  </p>
                  <p className="cart-item-subtotal">
                    Subtotal: {formatPrice(item.price * item.quantity, item.currency)}
                  </p>

                  <div className="cart-item-controls">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.purchaseType, item.quantity - 1)}
                      className="cart-item-btn"
                    >
                      -
                    </button>
                    <span className="cart-item-quantity">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.purchaseType, item.quantity + 1)}
                      className="cart-item-btn"
                    >
                      +
                    </button>
                    <button onClick={() => removeItem(item.product.id, item.purchaseType)} className="cart-item-remove">
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-totals">
              {totalUSD > 0 && (
                <div className="cart-total-row">
                  <span>Total USD:</span>
                  <span>{formatPrice(totalUSD, "USD")}</span>
                </div>
              )}
              {totalARS > 0 && (
                <div className="cart-total-row main">
                  <span>Total ARS:</span>
                  <span>{formatPrice(totalARS, "ARS")}</span>
                </div>
              )}
            </div>

            {totalUSD > 0 && (
              <div className="cart-info">💱 El valor en dólares se toma a cotización del día en pesos</div>
            )}

            {minimumNotMet && (
              <div className="cart-warning">⚠️ Mínimo de compra: $100.000 ARS para productos por unidad</div>
            )}

            <button onClick={handleCheckout} disabled={!canCheckout()} className="cart-checkout-btn">
              <img
                src="/images/logos/logo-whatsapp.svg"
                alt="WhatsApp"
                style={{
                  width: "24px",
                  height: "24px",
                  filter: "brightness(0) invert(1)",
                }}
              />
              Cerrar Pedido
            </button>

            <button
              onClick={clearCart}
              style={{
                width: "100%",
                padding: "0.75rem",
                backgroundColor: "transparent",
                color: "#6b7280",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                fontSize: "0.9rem",
                cursor: "pointer",
                marginTop: "0.5rem",
              }}
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </>
  )
}
