import ProductDetailContent from '@/components/global/ProductDetail';

const ProductDetail = ({ params }: PageProps) => {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <ProductDetailContent />
    </div>
  );
};

export default ProductDetail;
