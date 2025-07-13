import { render, screen, fireEvent } from '@testing-library/react';
import { useProducts } from '@/hooks/useProducts';
import toast from 'react-hot-toast';
import ProductDetailContent from '@/components/global/ProductDetail';

// 🧪 Mock Zustand cart store
jest.mock('@/store', () => ({
  useCartStore: () => ({
    addToCart: jest.fn(),
  }),
}));

// 🧪 Mock useParams (Next.js App Router)
jest.mock('next/navigation', () => ({
  useParams: () => ({ slug: 'test-slug' }),
}));

// 🧪 Mock toast
jest.mock('react-hot-toast', () => ({
  success: jest.fn(),
}));

// 🧪 Mock product fetching hook
jest.mock('@/hooks/useProducts', () => ({
  useProducts: jest.fn(),
}));

describe('ProductDetailContent', () => {
  const product = {
    id: '1',
    name: 'Test Product',
    slug: 'test-slug',
    image: '/test.jpg',
    price: 49.99,
    description: 'A test product',
  };

  it('renders product details and handles add to cart', () => {
    // @ts-ignore - override mock return
    useProducts.mockReturnValue({
      data: [product],
      isLoading: false,
      isError: false,
    });

    render(<ProductDetailContent />);

    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByText(/\$49.99/)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/Quantity/i), {
      target: { value: '2' },
    });

    fireEvent.click(screen.getByText(/Add to Cart/i));

    // Assert toast and addToCart
    expect(toast.success).toHaveBeenCalledWith(
      '2 Test Product(s) added to cart'
    );
  });

  it('renders loading state', () => {
    // @ts-ignore
    useProducts.mockReturnValue({
      data: [],
      isLoading: true,
      isError: false,
    });

    render(<ProductDetailContent />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it('renders error state', () => {
    // @ts-ignore
    useProducts.mockReturnValue({
      data: [],
      isLoading: false,
      isError: true,
    });

    render(<ProductDetailContent />);
    expect(screen.getByText(/Error loading product/i)).toBeInTheDocument();
  });

  it('renders fallback if product not found', () => {
    // @ts-ignore
    useProducts.mockReturnValue({
      data: [],
      isLoading: false,
      isError: false,
    });

    render(<ProductDetailContent />);
    expect(screen.getByText(/Product not found/i)).toBeInTheDocument();
  });
});
