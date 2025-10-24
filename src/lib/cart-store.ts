import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { CartItem, Product, PurchaseType } from "../types/product"
import { parseBulkPrice, parseUnitPrice } from "./price-parser"

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  addItem: (product: Product, purchaseType: PurchaseType) => void
  removeItem: (productId: string, purchaseType: PurchaseType) => void
  updateQuantity: (productId: string, purchaseType: PurchaseType, quantity: number) => void
  clearCart: () => void
  getTotals: () => { totalUSD: number; totalARS: number; itemCount: number }
  canCheckout: () => boolean
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      setIsOpen: (isOpen) => set({ isOpen }),

      addItem: (product, purchaseType) => {
        const items = get().items
        const existingIndex = items.findIndex(
          (item) => item.product.id === product.id && item.purchaseType === purchaseType,
        )

        let price = 0
        let currency: "USD" | "ARS" = "ARS"

        if (purchaseType === "bulk") {
          const parsed = parseBulkPrice(product.price || "")
          if (parsed) {
            price = parsed.amount
            currency = "USD"
          }
        } else {
          const parsed = parseUnitPrice(product.minimumPrice || "")
          if (parsed) {
            price = parsed.amount
            currency = "ARS"
          }
        }

        if (existingIndex >= 0) {
          const newItems = [...items]
          newItems[existingIndex].quantity += 1
          set({ items: newItems })
        } else {
          set({
            items: [
              ...items,
              {
                product,
                quantity: 1,
                purchaseType,
                price,
                currency,
              },
            ],
          })
        }
      },

      removeItem: (productId, purchaseType) => {
        set({
          items: get().items.filter((item) => !(item.product.id === productId && item.purchaseType === purchaseType)),
        })
      },

      updateQuantity: (productId, purchaseType, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, purchaseType)
          return
        }

        const items = get().items
        const index = items.findIndex((item) => item.product.id === productId && item.purchaseType === purchaseType)

        if (index >= 0) {
          const newItems = [...items]
          newItems[index].quantity = quantity
          set({ items: newItems })
        }
      },

      clearCart: () => set({ items: [] }),

      getTotals: () => {
        const items = get().items
        let totalUSD = 0
        let totalARS = 0
        let itemCount = 0

        items.forEach((item) => {
          if (item.currency === "USD") {
            totalUSD += item.price * item.quantity
          } else {
            totalARS += item.price * item.quantity
          }
          itemCount += item.quantity
        })

        return { totalUSD, totalARS, itemCount }
      },

      canCheckout: () => {
        const items = get().items
        const { totalARS } = get().getTotals()
        const hasUnitItems = items.some((item) => item.purchaseType === "unit")
        const hasBulkItems = items.some((item) => item.purchaseType === "bulk")

        // Si no hay items, no permitir checkout
        if (items.length === 0) {
          return false
        }

        // Si hay al menos 1 bulto, permitir checkout
        if (hasBulkItems) {
          return true
        }

        // Si solo hay productos por unidad, verificar el mínimo de 100.000 ARS
        if (hasUnitItems && totalARS >= 100000) {
          return true
        }

        return false
      },
    }),
    {
      name: "volt-cart-storage",
    },
  ),
)
