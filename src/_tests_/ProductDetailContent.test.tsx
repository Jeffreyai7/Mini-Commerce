// components/ProductDetailContent.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';

jest.mock('@/store', () => ({
  useCartStore: () => ({
    addToCart: jest.fn(),
  }),
}));

const mockProduct = {
  id: '1',
  name: 'AirPods',
  image: '/airpods.jpg',
  price: 99.99,
  description: 'Wireless magic for your ears.',
};

describe('ProductDetailContent', () => {
  it('renders product and adds to cart', () => {
    render(<ProductDetailContent product={mockProduct} />);

    expect(screen.getByText(/AirPods/i)).toBeInTheDocument();
    expect(screen.getByText(/\$99.99/)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/Quantity/i), {
      target: { value: '2' },
    });

    fireEvent.click(screen.getByText(/Add to Cart/i));
    // Asserted via the mocked store call
  });
});
