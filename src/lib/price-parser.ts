import type { ParsedPrice } from "../types/product"

export function parseBulkPrice(priceString: string): ParsedPrice | null {
  if (!priceString) return null

  // Formato: "$2.25 USD X 100 UNIDADES"
  const priceMatch = priceString.match(/\$?([\d.]+)\s*USD/i)
  const quantityMatch = priceString.match(/X\s*(\d+)\s*UNIDADES/i)

  if (priceMatch) {
    const unitPrice = Number.parseFloat(priceMatch[1])
    const quantity = quantityMatch ? Number.parseInt(quantityMatch[1]) : 1

    return {
      amount: unitPrice * quantity, // Precio total del bulto
      currency: "USD",
      quantity: quantity, // Cantidad de unidades en el bulto
      unitPrice: unitPrice, // Precio por unidad individual
    }
  }
  return null
}

export function parseUnitPrice(priceString: string): ParsedPrice | null {
  if (!priceString) return null

  // Formato: "$3400 ARS (MINIMO $100K)"
  const match = priceString.match(/\$?([\d.]+)\s*ARS/i)
  if (match) {
    return {
      amount: Number.parseFloat(match[1]),
      currency: "ARS",
    }
  }
  return null
}

export function formatPrice(amount: number, currency: "USD" | "ARS"): string {
  if (currency === "USD") {
    return `$${amount.toFixed(2)} USD`
  }
  return `$${amount.toLocaleString("es-AR")} ARS`
}
