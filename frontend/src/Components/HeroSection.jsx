// Hero Section

const HeroSection = () => {
  return (
    <div className=" max-w-screen-xl w-full grid grid-cols-3 gap-4 shadow-xl p-3 rounded-xl">
      <section className="col-span-3 sm:col-span-2">
        <img
          src="/banner-big-1.png"
          alt="Home Screen Banner"
          className="w-full"
        />
      </section>
      <aside className="flex col-span-3 sm:col-span-1 sm:flex-col gap-4">
        <section className="">
          <img src="/hero-02.png" alt="Summer Sale" />
        </section>

        <section className="">
          <img src="/hero-03.png" alt="Special Products Deal" />
        </section>
      </aside>
    </div>
  );
};

export default HeroSection;
