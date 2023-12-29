// Shop Component housing Products and Filter Options
import { useParams } from "react-router-dom";
//  When you use this above hook, you create a path in the Router place too

const Shop = () => {
  const { para } = useParams();

  para;

  return <div>This right here is the Shop Component</div>;
};

export default Shop;
