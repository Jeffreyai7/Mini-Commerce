import { render, screen, fireEvent } from '@testing-library/react';
import { useCartStore } from '@/store';
import { useRouter } from 'next/navigation';
import CartContent from '@/components/cart/Cart';

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
      slug: 'test-product',
      name: 'Test Shoe',
      price: 50,
      image: '/test.jpg',
      quantity: 1,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as unknown as jest.Mock).mockReturnValue({ push: mockPush });
  });

  it('shows empty cart state', () => {
    (useCartStore as unknown as jest.Mock).mockReturnValue({
      items: [],
      removeFromCart: mockRemove,
      updateQuantity: mockUpdateQty,
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

    // Product info
    expect(
      screen.getByRole('heading', { name: /your cart/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/test shoe/i)).toBeInTheDocument();
    expect(screen.getByText(/₦50\.00/)).toBeInTheDocument();

    // Quantity controls
    const plusBtn = screen.getByText('+');
    fireEvent.click(plusBtn);
    expect(mockUpdateQty).toHaveBeenCalledWith('1', 2);

    const minusBtn = screen.getByText('−');
    fireEvent.click(minusBtn);
    expect(mockUpdateQty).toHaveBeenCalledWith('1', 1);

    // Remove
    fireEvent.click(screen.getByText(/remove/i));
    expect(mockRemove).toHaveBeenCalledWith('1');

    // Proceed to checkout
    fireEvent.click(screen.getByText(/proceed to checkout/i));
    expect(mockPush).toHaveBeenCalledWith('/checkout');
  });
});
