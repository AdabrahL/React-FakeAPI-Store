import { useContext } from "react";
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero'
const Home = () => {
  const { products } = useContext(ProductContext);



  return (
    <div>
      <Hero/>
       <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;
