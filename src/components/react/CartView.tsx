"use client"

import { useCartStore } from "../../lib/cart-store"
import { formatPrice } from "../../lib/price-parser"
import { sendWhatsAppMessage } from "../../lib/whatsapp"
import "../../styles/cart.css"

export default function CartView() {
  const { items, removeItem, updateQuantity, clearCart, getTotals, canCheckout } = useCartStore()
  const { totalUSD, totalARS, itemCount } = getTotals()

  const handleCheckout = () => {
    if (!canCheckout()) return
    sendWhatsAppMessage(items, totalUSD, totalARS)
  }

  const hasUnitItems = items.some((item) => item.purchaseType === "unit")
  const hasBulkItems = items.some((item) => item.purchaseType === "bulk")
  const minimumNotMet = hasUnitItems && !hasBulkItems && totalARS < 100000

  return (
    <div className="cart-view-page">
      <div className="cart-view-header">
        <h1>Tu Pedido</h1>
        <p className="cart-view-subtitle">
          {itemCount === 0
            ? "No hay productos en tu pedido"
            : `${itemCount} producto${itemCount !== 1 ? "s" : ""} en tu pedido`}
        </p>
      </div>

      {items.length === 0 ? (
        <div className="cart-view-empty">
          <div className="empty-icon">🛒</div>
          <h2>Tu pedido está vacío</h2>
          <p>Agrega productos desde nuestro catálogo para comenzar</p>
          <a href="/productos" className="btn-primary">
            Ver Productos
          </a>
        </div>
      ) : (
        <>
          <div className="cart-view-items">
            {items.map((item) => (
              <div key={`${item.product.id}-${item.purchaseType}`} className="cart-view-item">
                <img
                  src={item.product.image || "/placeholder.svg"}
                  alt={item.product.name}
                  className="cart-view-item-image"
                />
                <div className="cart-view-item-details">
                  <h3 className="cart-view-item-name">{item.product.name}</h3>
                  <p className="cart-view-item-description">{item.product.description}</p>
                  <div className="cart-view-item-type">
                    <span className={`type-badge ${item.purchaseType}`}>
                      {item.purchaseType === "bulk" ? "Por Bulto (USD)" : "Por Unidad (ARS)"}
                    </span>
                  </div>
                  <div className="cart-view-item-pricing">
                    <div className="price-info">
                      <span className="price-label">
                        {item.purchaseType === "bulk" ? "Precio total del bulto:" : "Precio unitario:"}
                      </span>
                      <span className="price-value">{formatPrice(item.price, item.currency)}</span>
                    </div>
                    <div className="subtotal-info">
                      <span className="subtotal-label">Subtotal:</span>
                      <span className="subtotal-value">{formatPrice(item.price * item.quantity, item.currency)}</span>
                    </div>
                  </div>
                </div>
                <div className="cart-view-item-actions">
                  <div className="quantity-controls">
                    <label>Cantidad:</label>
                    <div className="quantity-buttons">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.purchaseType, item.quantity - 1)}
                        className="qty-btn"
                        aria-label="Disminuir cantidad"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => {
                          const newQty = Math.max(1, Number.parseInt(e.target.value) || 1)
                          updateQuantity(item.product.id, item.purchaseType, newQty)
                        }}
                        className="qty-input"
                      />
                      <button
                        onClick={() => updateQuantity(item.product.id, item.purchaseType, item.quantity + 1)}
                        className="qty-btn"
                        aria-label="Aumentar cantidad"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id, item.purchaseType)}
                    className="remove-btn"
                    aria-label="Eliminar producto"
                  >
                    <span>🗑️</span> Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-view-summary">
            <div className="summary-card">
              <h2>Resumen del Pedido</h2>

              <div className="summary-totals">
                {totalUSD > 0 && (
                  <div className="summary-row">
                    <span>Total USD:</span>
                    <span className="total-amount">{formatPrice(totalUSD, "USD")}</span>
                  </div>
                )}
                {totalARS > 0 && (
                  <div className="summary-row main-total">
                    <span>Total ARS:</span>
                    <span className="total-amount">{formatPrice(totalARS, "ARS")}</span>
                  </div>
                )}
              </div>

              {totalUSD > 0 && (
                <div className="summary-info">💱 El valor en dólares se toma a cotización del día en pesos</div>
              )}

              {minimumNotMet && (
                <div className="summary-warning">⚠️ Mínimo de compra: $100.000 ARS para productos por unidad</div>
              )}

              <div className="summary-actions">
                <button onClick={handleCheckout} disabled={!canCheckout()} className="checkout-btn">
                  <span>📱</span>
                  Cerrar Pedido
                </button>
                <button onClick={clearCart} className="clear-btn">
                  Vaciar pedido
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
