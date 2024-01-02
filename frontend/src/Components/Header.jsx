import { Link } from "react-router-dom";

const Header = () => {
  // Define Functions
  const user = null;

  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <header className="flex flex-col w-full items-center box-border">
      <div className="flex justify-between item-center p-6 w-[100%] max-w-screen-xl">
        <Link to="/">
          <h1 className=" text-xl sm:text-3xl font-black ">
            <span className="text-[#00B207]">Green</span>Shopper 🌿
          </h1>
        </Link>

        {/* Form goes here */}
        <form
          onSubmit={handleSearch}
          className="sm:text-xs md:text-sm hidden sm:block"
        >
          <input
            type="text"
            placeholder="Search Available Products"
            className="p-2 outline outline-1 outline-slate-400 rounded-s-lg"
            required
          />
          <input
            type="submit"
            value="Search"
            className="bg-[#00B207] text-white p-2  outline outline-1 outline-[#00B207] rounded-e-lg hover:cursor-pointer hover:opacity-90 transition-opacity ease-out"
          />
        </form>

        {/* Wishlist and Shopping Cart */}
        <section className="flex justify-between gap-2 ">
          <img
            src="/Vector.png"
            alt="Wish List"
            title="Wish List"
            className=" scale-75"
          />
          <div className="flex justify-between gap-3 h-[80%] relative">
            <p
              id="Shopping-Cart-Count"
              className="bg-[#00B207] rounded-full p-1 absolute -top-1 w-5 h-5 text-xs text-center text-white left-4"
            >
              0
            </p>
            <img src="/Bag.png" alt="Cart" />
            <p className="font-bold"> N0.00</p>
          </div>
        </section>
      </div>

      {/* Navigation Section */}
      <nav className="w-full flex justify-center bg-black text-slate-100 py-4 text-[10px] md:text-lg">
        <div className="flex justify-between w-[100%] max-w-screen-xl px-6">
          <ul className="flex flex-row justify-between gap-7 cursor-pointer">
            <Link to="/">
              <li className="hover:text-[#00B207] transition-opacity ease-in">
                Home
              </li>
            </Link>

            <Link to="/shop">
              <li className="hover:text-[#00B207] transition-opacity ease-in">
                Shop
              </li>
            </Link>

            <Link to={user ? "/account" : "/signup"}>
              <li className="hover:text-[#00B207] transition-opacity ease-in">
                {user ? "My Account" : "Get Started"}
              </li>
            </Link>

            <Link to="/about-us">
              <li className="hover:text-[#00B207] transition-opacity ease-in">
                About Us
              </li>
            </Link>

            <Link to="/contact-us">
              <li className="hover:text-[#00B207] transition-opacity ease-in">
                Contact Us
              </li>
            </Link>
          </ul>

          {/* Telephone details */}
          <p className="sm:block hidden">+2348174050194</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
