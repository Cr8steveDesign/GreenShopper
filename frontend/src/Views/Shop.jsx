// Shop Component housing Products and Filter Options
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import homeVariant from "../variants/homeVariants.js";
//  When you use this above hook, you create a path in the Router place too

const Shop = () => {
  const { para } = useParams();

  para;

  return (
    <motion.div initial={"start"} animate={"end"} variants={homeVariant}>
      This right here is the Shop Component
    </motion.div>
  );
};

export default Shop;
