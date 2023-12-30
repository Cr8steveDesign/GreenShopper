import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CategoryCard = ({ imageUrl, link, description }) => {
  return (
    <Link to={link}>
      <div className="p-3 max-w-[200px] max-h-[213px] object-contain hover:shadow-lg transition-all ease-in duration-300 hover:border hover:border-green-700">
        <img src={imageUrl} alt={description} className="mb-3 w-full" />

        <p className="cursor-pointer hover:text-[#00B207] transition-colors ease-in-out">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
