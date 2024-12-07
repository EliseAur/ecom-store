import PropTypes from "prop-types";
import { FilterInput } from "./index";
import { ProductCard } from "./index";

function HomeContent({ searchTerm, setSearchTerm, filteredProducts }) {
  return (
    <div id="main-container" className="container mx-auto">
      <div className="text-center py-4">
        <h1 className="text-3xl font-bold">
          HOME - Welcome to Shop:it - Shop til you drop
        </h1>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          necessitatibus incidunt ducimus in ab ratione voluptas, a possimus
          aperiam cumque, ipsa quae dolorem doloremque odio. Exercitationem,
          aspernatur accusamus? Illo, consequatur?
        </p>
        <FilterInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <main className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[300px] mx-auto sm:max-w-none">
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
