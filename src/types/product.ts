export interface Product {
  id: string
  name: string
  description: string
  image: string
  category: string
  price?: string // Precio por bulto en USD - ej: "$2.25 USD X 100 UNIDADES"
  minimumPrice?: string // Precio por unidad en ARS - ej: "$3400 ARS (MINIMO $100K)"
  images?: string[]
}

export interface ParsedPrice {
  amount: number
  currency: "USD" | "ARS"
  quantity?: number // Para bultos
}

export type PurchaseType = "unit" | "bulk"

export interface CartItem {
  product: Product
  quantity: number
  purchaseType: PurchaseType
  price: number
  currency: "USD" | "ARS"
}
