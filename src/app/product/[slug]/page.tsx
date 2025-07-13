import ProductDetailContent from '@/components/global/ProductDetail';

const ProductDetail = ({params}: PageProps) => {

 
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <ProductDetailContent />
    </div>
  );
};

export default ProductDetail;