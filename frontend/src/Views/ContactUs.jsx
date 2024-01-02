// Contact Us Page - Containing a Form to collect details from the user
import { motion } from "framer-motion";
import ContactInformation from "../Components/ContactInformation.jsx";
import MapEmbed from "../Utils/MapEmbed.jsx";

const ContactUs = () => {
  return (
    <motion.div initial={{ x: "-90%" }} animate={{ x: 0 }} exit={{ x: "-130%" }}>
      <ContactInformation />
      <MapEmbed />
    </motion.div>
  );
};

export default ContactUs;
