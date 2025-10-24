import type { CartItem } from "../types/product"
import { formatPrice } from "./price-parser"

const WHATSAPP_NUMBER = "5491154962132" // Número de Volt

export function generateWhatsAppMessage(items: CartItem[], totalUSD: number, totalARS: number): string {
  let message = "🛒 *PEDIDO VOLT*\n\n"

  // Separar items por moneda
  const bulkItems = items.filter((item) => item.currency === "USD")
  const unitItems = items.filter((item) => item.currency === "ARS")

  if (bulkItems.length > 0) {
    message += "💰 *PRODUCTOS POR BULTO (USD)*\n"
    bulkItems.forEach((item) => {
      message += `\n• ${item.product.name}\n`
      message += `  Cantidad de bultos: ${item.quantity}\n`
      message += `  Precio por bulto: ${formatPrice(item.price, "USD")}\n`
      message += `  Subtotal: ${formatPrice(item.price * item.quantity, "USD")}\n`
    })
    message += `\n*Total USD: ${formatPrice(totalUSD, "USD")}*\n`
  }

  // Productos por unidad (ARS)
  if (unitItems.length > 0) {
    if (bulkItems.length > 0) message += "\n---\n\n"
    message += "💵 *PRODUCTOS POR UNIDAD (ARS)*\n"
    unitItems.forEach((item) => {
      message += `\n• ${item.product.name}\n`
      message += `  Cantidad: ${item.quantity}\n`
      message += `  Precio unitario: ${formatPrice(item.price, "ARS")}\n`
      message += `  Subtotal: ${formatPrice(item.price * item.quantity, "ARS")}\n`
    })
    message += `\n*Total ARS: ${formatPrice(totalARS, "ARS")}*\n`
  }

  message += "\n---\n"
  message += "📦 *RESUMEN*\n"
  message += `Total de productos: ${items.reduce((sum, item) => sum + item.quantity, 0)}\n`
  if (totalUSD > 0) message += `Total USD: ${formatPrice(totalUSD, "USD")}\n`
  if (totalARS > 0) message += `Total ARS: ${formatPrice(totalARS, "ARS")}\n`

  if (totalUSD > 0) {
    message += "\n💱 *Nota:* El valor en dólares se toma a cotización del día en pesos.\n"
  }

  return message
}

export function sendWhatsAppMessage(items: CartItem[], totalUSD: number, totalARS: number): void {
  const message = generateWhatsAppMessage(items, totalUSD, totalARS)
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
  window.open(whatsappUrl, "_blank")
}
