import { create } from 'zustand';

interface StoreState {
  cart: any[];
  addToCart: (item: any) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}


interface NavbarState {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const useStore = create<StoreState & NavbarState>((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (id) => set((state) => ({ cart: state.cart.filter(item => item.id !== id) })),
  clearCart: () => set({ cart: [] }),
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));

export default useStore;
    