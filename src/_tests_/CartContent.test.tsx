import { render, screen, fireEvent } from '@testing-library/react';
import { useCartStore } from '@/store';
import { useRouter } from 'next/navigation';
import CartContent from '@/components/cart/Cart';

// Mocks
jest.mock('@/store', () => ({
  useCartStore: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('CartContent', () => {
  const mockRemove = jest.fn();
  const mockUpdateQty = jest.fn();
  const mockPush = jest.fn();

  const mockItems = [
    {
      id: '1',
      name: 'Test Shoe',
      price: 50,
      quantity: 1,
      image: '/test.jpg',
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  it('renders empty state when cart is empty', () => {
    (useCartStore as unknown as jest.Mock).mockReturnValue({
      items: [],
      removeFromCart: jest.fn(),
      updateQuantity: jest.fn(),
      total: () => 0,
    });

    render(<CartContent />);
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
    expect(screen.getByAltText(/empty cart/i)).toBeInTheDocument();
  });

  it('renders items and handles cart actions', () => {
    (useCartStore as unknown as jest.Mock).mockReturnValue({
      items: mockItems,
      removeFromCart: mockRemove,
      updateQuantity: mockUpdateQty,
      total: () => 50,
    });

    render(<CartContent />);

    // Check that the cart content is rendered
    expect(
      screen.getByRole('heading', { name: /your cart/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/test shoe/i)).toBeInTheDocument();

    // There are 3 occurrences of ₦50.00 — unit price, subtotal, total
    expect(screen.getAllByText(/₦50\.00/)).toHaveLength(3);

    // Quantity +
    fireEvent.click(screen.getByText('+'));
    expect(mockUpdateQty).toHaveBeenCalledWith('1', 2);

    // Quantity −
    fireEvent.click(screen.getByText('−'));
    expect(mockUpdateQty).toHaveBeenCalledWith('1', 1);

    // Remove
    fireEvent.click(screen.getByText(/remove/i));
    expect(mockRemove).toHaveBeenCalledWith('1');

    // Proceed to checkout
    fireEvent.click(screen.getByText(/proceed to checkout/i));
    expect(mockPush).toHaveBeenCalledWith('/checkout');
  });
});
