import { useQuery } from '@tanstack/react-query';

const fetchProducts = async (): Promise<Product[]> => {
  const cached = localStorage.getItem('productsv5-cache');
  if (cached) return JSON.parse(cached);

  // Fetch products from a local JSON file if not cached

  const res = await fetch('/data/products.json');
  const data = await res.json();
  localStorage.setItem('productsv5-cache', JSON.stringify(data));
  return data;
};

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ['productsv5-cache'],
    queryFn: fetchProducts,
  });
};
