// This is the component that will handle when a product comes
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductView = () => {
  const productId = useParams();

  useEffect(() => console.log(productId), []);

  return <div>ProductView</div>;
};

export default ProductView;
