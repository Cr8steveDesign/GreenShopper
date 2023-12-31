const Footer = () => {
  // Function to handle Newsletter Subscription
  const handleSubscribeNewsLetter = (e) => {
    e.preventDefault();
    console.log("Subscribed to Newsletter!");
  };
  return (
    <footer className="w-full bg-black flex flex-col items-center">
      <section className="w-full bg-slate-200">
        <div className=" w-full mx-auto max-w-screen-xl flex md:flex-row flex-col justify-between items-center p-6">
          {/*  */}
          <div className=" w-full  md:w-[30%] lg:w-[40%] md:text-xs">
            {" "}
            <h3 className="font-extrabold text-xl text-center md:text-left">
              Subscribe To Our Newsletter
            </h3>
            <p className="text-center text-xs mb-2 md:mb-0 md:text-base md:text-left">
              Get weekly updates about the latest fresh food recipie, best deals
              and lots more. Subscribe Now!
            </p>
          </div>

          {/* Form for Newsletter */}
          <div className="flex gap-3 items-center flex-wrap sm:flex-nowrap">
            <form onSubmit={handleSubscribeNewsLetter}>
              <input
                className="p-2 text-sm rounded-s-xl"
                type="email"
                placeholder="Your email address."
                required
              />
              <input
                className="p-2 text-sm text-white rounded-xl -translate-x-2 bg-[#00B207] hover:opacity-85 transition-opacity ease-in"
                type="submit"
                value="Subscribe"
              ></input>
            </form>

            {/* Social Media Links */}
            <ul className="flex gap-2">
              {/* Facebook */}
              <li className=" h-10 w-10 p-2 object-contain rounded-full hover:bg-[#00B207] transition-colors ease-in flex justify-center items-center cursor-pointer">
                <img className="w-full" src="/facebook.png" alt="Facebook" />
              </li>
              {/* Twitter */}
              <li className=" h-10 w-10 p-2 object-contain rounded-full hover:bg-[#00B207] transition-colors ease-in flex justify-center items-center cursor-pointer">
                <img className="w-full" src="/twitter.png" alt="Twitter" />
              </li>
              {/* Facebook */}
              <li className=" h-10 w-10 p-2 object-contain rounded-full hover:bg-[#00B207] transition-colors ease-in flex justify-center items-center cursor-pointer">
                <img className="w-full" src="/pinterest.png" alt="Pinterest" />
              </li>
              {/* Facebook */}
              <li className=" h-10 w-10 p-2 object-contain rounded-full hover:bg-[#00B207] transition-colors ease-in flex justify-center items-center cursor-pointer">
                <img className="w-full" src="/instagram.png" alt="Instagram" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full mx-auto max-w-screen-xl text-slate-300 flex items-center p-6">
        <div className="flex flex-row flex-wrap gap-x-8 gap-y-4 md:gap-15 lg:gap-10 md:justify-between mx-auto">
          {/* Company */}
          <section className=" max-w-[300px] w-3/4 md:w-1/4 sm:w-7/12">
            <h3 className="font-extrabold">GreenShopper</h3>
            <ul>
              <li className="text-xs">
                We pride ourselves in delivering fresh and high quality foods to
                our customers. Get your healthy foods from us and be sure of
                getting the best.
              </li>
              <li className="font-bold mt-2 text-xs">
                +2348174050194 or steve@greenshopper.com
              </li>
            </ul>
          </section>
          {/* User */}
          <section className=" w-fit">
            <h3 className="font-extrabold">My Account</h3>
            <ul>
              <li className="hover:opacity-75 transition-opacity ease-in-out text-sm cursor-pointer">
                My Account
              </li>
              <li className="hover:opacity-80 transition-opacity ease-in-out text-sm cursor-pointer">
                Order History
              </li>
              <li className="hover:opacity-80 transition-opacity ease-in-out text-sm cursor-pointer">
                Shopping Cart
              </li>
              <li className="hover:opacity-80 transition-opacity ease-in-out text-sm cursor-pointer">
                Wish List
              </li>
            </ul>
          </section>
          {/* Category */}
          <section className="w-fit">
            <h3 className="font-extrabold">Categories</h3>
            <ul>
              <li className="hover:opacity-80 transition-opacity ease-in-out text-sm cursor-pointer">
                Fruits & Vegetables
              </li>
              <li className="hover:opacity-80 transition-opacity ease-in-out text-sm cursor-pointer">
                Meat and Fish
              </li>
              <li className="hover:opacity-80 transition-opacity ease-in-out text-sm cursor-pointer">
                Bread and Bakery
              </li>
              <li className="hover:opacity-80 transition-opacity ease-in-out text-sm cursor-pointer">
                Beauty and Health
              </li>
            </ul>
          </section>
          {/* Enquiries */}
          <section className="w-fit">
            <h3 className="font-extrabold">Enquiries</h3>
            <ul>
              <li className="hover:opacity-80 transition-opacity ease-in-out text-sm cursor-pointer">
                Contact Us
              </li>
              <li className="hover:opacity-80 transition-opacity ease-in-out text-sm cursor-pointer">
                FAQs
              </li>
              <li className="hover:opacity-80 transition-opacity ease-in-out text-sm cursor-pointer">
                Terms and Conditions
              </li>
              <li className="hover:opacity-80 transition-opacity ease-in-out text-sm cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </section>
          {/* Navigation */}
          <section className="w-fit">
            <h3 className="font-extrabold">Navigation</h3>
            <ul>
              <li className="hover:opacity-80 transition-opacity ease-in-out text-sm cursor-pointer">
                About Us
              </li>
              <li className="hover:opacity-80 transition-opacity ease-in-out text-sm cursor-pointer">
                Shop
              </li>
              <li className="hover:opacity-80 transition-opacity ease-in-out text-sm cursor-pointer">
                Product
              </li>
              <li className="hover:opacity-80 transition-opacity ease-in-out text-sm cursor-pointer">
                Track Order
              </li>
            </ul>
          </section>
        </div>
      </section>
      {/* Divider */}
      <hr className="border-slate-800  border w-full" />

      {/* CopyRight and Payment Sponsors */}
      <section className="text-slate-200 text-sm flex flex-col text-center sm:text-left sm:flex-row sm:justify-between p-6">
        <p>
          GreenShopper eCommerce (c) 2024.{" "}
          <a
            href="https://twitter.com/Cre8steveDev"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-[#00B207]">Developed by Cre8Steve Dev</span>
          </a>
        </p>
        <img
          src="/payments.png"
          alt="Payment Systems"
          className=" w-1/4 hover:scale-110 transition-transform ease-in-out mx-auto mt-3 sm:mt-0 sm:mx-0"
        />
      </section>
    </footer>
  );
};

export default Footer;
