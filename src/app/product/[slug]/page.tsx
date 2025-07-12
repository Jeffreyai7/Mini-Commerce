import { usePathname } from "next/navigation";
import React from "react";

const ProductDetail = () => {

  const pathname = usePathname();
  return <div>Product Detail: {pathname}</div>;
};

export default ProductDetail;
