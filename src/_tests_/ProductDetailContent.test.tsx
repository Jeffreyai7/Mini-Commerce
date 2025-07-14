import { render, screen, fireEvent } from '@testing-library/react';
import { useProducts } from '@/hooks/useProducts';
import { useCartStore } from '@/store';
import { useParams } from 'next/navigation';
import ProductDetailContent from '@/components/global/ProductDetail';

// Mock all hooks
jest.mock('@/hooks/useProducts');
jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
}));
jest.mock('@/store', () => ({
  useCartStore: jest.fn(),
}));

describe('ProductDetailContent', () => {
  const mockAddToCart = jest.fn();
  const mockUpdateQuantity = jest.fn();
  const mockItems = [
    {
      id: '1',
      slug: 'test-product',
      name: 'Test Product',
      price: 49.99,
      description: 'A test product',
      image: '/test.jpg',
      quantity: 1,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();

    // Mock the Zustand store
    (useCartStore as unknown as jest.Mock).mockReturnValue({
      addToCart: mockAddToCart,
      updateQuantity: mockUpdateQuantity,
      items: mockItems,
    });

    // Mock router params
    (useParams as jest.Mock).mockReturnValue({ slug: 'test-product' });
  });

  it('renders product details and handles add to cart', () => {
    (useProducts as jest.Mock).mockReturnValue({
      data: mockItems,
      isLoading: false,
      isError: false,
    });

    render(<ProductDetailContent />);

    // Assert product heading
    expect(
      screen.getByRole('heading', { name: /Test Product/i })
    ).toBeInTheDocument();

    // Assert price with Naira symbol
    expect(screen.getByText(/₦\s*49.99/)).toBeInTheDocument();

    // Click Add to Cart
    fireEvent.click(screen.getByText(/Add to Cart/i));

    // Assert addToCart is called
    expect(mockAddToCart).toHaveBeenCalledWith(
      expect.objectContaining({ slug: 'test-product' })
    );
  });

  it('renders loading state', () => {
    (useProducts as jest.Mock).mockReturnValue({
      data: [],
      isLoading: true,
      isError: false,
    });

    render(<ProductDetailContent />);
    expect(screen.getByText(/Loading, please wait/i)).toBeInTheDocument();
  });

  it('renders error state', () => {
    (useProducts as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      isError: true,
    });

    render(<ProductDetailContent />);
    expect(screen.getByText(/oops! something went wrong/i)).toBeInTheDocument();
  });
});
