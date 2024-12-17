import PropTypes from "prop-types";
import { FilterInputHero, FilterInputMainSection, ProductCard } from "./index";
import { Link } from "react-router-dom";

function HomeContent({ searchTerm, setSearchTerm, filteredProducts }) {
  return (
    <div className="flex-grow">
      <div
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511317559916-56d5ddb62563?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center py-20 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Welcome to Shop:it
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-white max-w-2xl mx-auto">
            Shop til you drop! Discover the best deals and latest trends in
            fashion, electronics, and more.
          </p>
          <div className="max-w-[300px] mx-auto">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("productsContainer")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 inline-block bg-zinc-900 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-zinc-800 w-full"
            >
              Start Shopping
            </Link>
            <FilterInputHero products={filteredProducts} />
          </div>
        </div>
      </div>
      <main
        id="productsContainer"
        className="py-4 px-1 sm:px-4 container mx-auto max-w-[447px] sm:max-w-[550px] md:sm:max-w-[850px] xl:max-w-[1100px]"
      >
        <h2 className="py-2 text-3xl text-center font-semibold">Products</h2>
        <div className="px-2 grid grid-cols-1 mx-auto">
          <FilterInputMainSection
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="px-2 my-8 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6 mx-auto">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

HomeContent.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  filteredProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }).isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default HomeContent;
