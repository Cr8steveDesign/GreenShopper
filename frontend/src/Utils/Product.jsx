/* eslint-disable react/prop-types */
// Product Component will be usable across different pages

import { Link } from "react-router-dom";

const Product = ({
  imgUrl,
  productName,
  price,
  rating,
  productId,
  inStock,
  discount,
  discountPrice,
  discountPercent,
  category,
  tags,
}) => {
  // Doing this to remove unused variable thingy
  category, tags;

  discountPrice = discountPrice.toFixed(2);

  return (
    <Link to={`/product/${productId}`}>
      <div className="min-w-[248px] min-h-[339] p-4 relative hover:shadow-lg transition-all ease-in duration-300 hover:border hover:border-green-700">
        {/*  */}
        {/* Conditionally render Out of Stock Label */}
        {inStock === false && (
          <p className=" bg-red-600 w-fit p-2 text-xs text-white rounded-lg absolute top-4 left-3 hover:opacity-80 transition-opacity ease-in">
            OUT OF STOCK
          </p>
        )}
        {/*  */}
        {/* Condtitionally render Discount Label */}
        {discount === true && (
          <p className="bg-[#00B207] w-fit p-2 text-xs text-white rounded-lg absolute top-4 left-3 hover:opacity-80 transition-opacity ease-in">
            SALE {discountPercent}% OFF
          </p>
        )}

        {/* WishList Icon - Implement function to add to user's Wishlist */}
        <img
          src="Vector.png"
          alt="Wishlist"
          title="Add to Wish List"
          className="absolute top-4 right-3 hover:opacity-80 transition-opacity ease-in"
        />
        <img
          src={imgUrl}
          alt={productName}
          className="max-w-[248px] max-h-[248px] "
        />

        {/* product details and cart */}
        <section className="flex justify-between text-left ">
          <div>
            <p>{productName}</p>
            {discount === true ? (
              <p>
                <span>N{discountPrice} </span>
                <span className="line-through">N{price}</span>
              </p>
            ) : (
              <p>N{price}</p>
            )}
            {rating > 0 ? <p>{"⭐".repeat(rating)}</p> : <p>No Rating!</p>}
          </div>

          {/* Add to Cart */}
          <div>
            <img src="shopping-bag.png" alt="Add to Cart" title="Add to Cart" />
          </div>
        </section>
      </div>
    </Link>
  );
};

export default Product;
