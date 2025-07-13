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

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
    (useCartStore as unknown as jest.Mock).mockReturnValue({
      addToCart: mockAddToCart,
    });
    (useParams as jest.Mock).mockReturnValue({ slug: 'test-product' });
  });

  it('renders product details and handles add to cart', () => {
    (useProducts as jest.Mock).mockReturnValue({
      data: [
        {
          slug: 'test-product',
          name: 'Test Product',
          price: 49.99,
          description: 'A test product',
          image: '/test.jpg',
        },
      ],
      isLoading: false,
      isError: false,
    });

    render(<ProductDetailContent />);

    //  Use getByRole to avoid text collisions
    expect(
      screen.getByRole('heading', { name: /Test Product/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/\$49.99/)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/Quantity/i), {
      target: { value: '2' },
    });

    fireEvent.click(screen.getByText(/Add to Cart/i));
    expect(mockAddToCart).toHaveBeenCalledWith(
      expect.objectContaining({ slug: 'test-product', quantity: 2 })
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
