// Shop Component housing Products and Filter Options
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
//  When you use this above hook, you create a path in the Router place too

const Shop = () => {
  const { para } = useParams();

  para;

  return (
    <motion.div initial={{ x: "90%" }} animate={{ x: 0 }} exit={{ x: "-130%" }}>
      This right here is the Shop Component
    </motion.div>
  );
};

export default Shop;
