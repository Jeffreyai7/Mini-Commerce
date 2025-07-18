import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StoreState {
  items: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
}

interface NavbarState {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const useCartStore = create<StoreState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product) => {
        const items = get().items;
        const existing = items.find((item) => item.id === product.id);

        if (existing) {
          // 🟢 add the incoming quantity instead of hard‑coded +1
          set({
            items: items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + product.quantity }
                : item
            ),
          });
        } else {
          set({
            items: [...items, { ...product, quantity: product.quantity || 1 }],
          });
        }
      },
      removeFromCart: (id) =>
        set({ items: get().items.filter((item) => item.id !== id) }),
      updateQuantity: (id, quantity) =>
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }),
      clearCart: () => set({ items: [] }),
      total: () =>
        get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    }),
    {
      name: 'cart-storage', // unique name for storage key
    }
  )
);

const useNavbarStore = create<NavbarState>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));

export { useCartStore, useNavbarStore };
