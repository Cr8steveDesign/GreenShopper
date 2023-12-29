const Header = () => {
  // Define Functions

  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <header className="flex flex-col w-full items-center box-border">
      <div className="flex justify-between item-center p-6 w-[100%] max-w-screen-xl">
        <h1 className=" text-3xl font-black ">
          <span className="text-[#00B207]">Green</span>Shopper
        </h1>

        {/* Form goes here */}
        <form onSubmit={handleSearch} className="text-sm">
          <input
            type="text"
            placeholder="Search Available Products"
            className="p-2 outline outline-1 outline-slate-400 min-w-[300px] rounded-s-lg"
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
            src="/public/Vector.png"
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
            <img src="/public/Bag.png" alt="Cart" />
            <p className="font-bold"> N0.00</p>
          </div>
        </section>
      </div>

      {/* Navigation Section */}
      <nav className="w-full flex justify-center bg-black text-slate-100 py-4 text-sm">
        <div className="flex justify-between w-[100%] max-w-screen-xl px-6">
          <ul className="flex flex-row justify-between gap-7 cursor-pointer">
            <li className="hover:opacity-85 transition-opacity ease-in">
              Home
            </li>
            <li className="hover:opacity-85 transition-opacity ease-in">
              Shop
            </li>
            <li className="hover:opacity-85 transition-opacity ease-in">
              Blog
            </li>
            <li className="hover:opacity-85 transition-opacity ease-in">
              About Us
            </li>
            <li className="hover:opacity-85 transition-opacity ease-in">
              Contact Us
            </li>
          </ul>

          {/* Telephone details */}
          <p>+2348174050194</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
