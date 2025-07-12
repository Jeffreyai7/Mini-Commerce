declare type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  description: string;
}

declare type PageProps = {
  params: {
    slug: string;
  };
};