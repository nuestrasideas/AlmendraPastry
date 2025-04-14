
import React, { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Carrusel from '../components/Carrusel';
import Footer from '../components/Footer'; 


interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Home: React.FC = () => {
  const { products, setProducts, setCart } = useAppContext();

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  useEffect(() => {
   
    setProducts([
      { id: 1, name: 'Carrot Cake', description: 'Delicioso Bizcocho suave con zanahoria, canela y nueces cubierto con frosting de queso crema y zanahoria', price: 12.000, imageUrl: "/assets/imagenes/IMG_0008.jpg" },
      { id: 2, name: 'Carrot Cake', description:'Delicioso Bizcocho suave con zanahoria, canela y nueces cubierto con frosting de queso crema y zanahoria', price: 12, imageUrl: "/assets/imagenes/IMG_0008.jpg"}, 
      { id: 3, name: 'Carrot Cake', description: 'Delicioso Bizcocho suave con zanahoria, canela y nueces cubierto con frosting de queso crema y zanahoria', price: 12, imageUrl: "/assets/imagenes/IMG_0008.jpg"}, 
      { id: 4,  name: 'Carrot Cake', description: 'Delicioso Bizcocho suave con zanahoria, canela y nueces cubierto con frosting de queso crema y zanahoria', price: 12, imageUrl: "/assets/imagenes/IMG_0008.jpg"}, 
      { id: 5, name: 'Carrot Cake', description: 'Delicioso Bizcocho suave con zanahoria, canela y nueces cubierto con frosting de queso crema y zanahoria', price: 12, imageUrl: "/assets/imagenes/IMG_0008.jpg"}, 
      { id: 6, name: 'Carrot Cake', description: 'Delicioso Bizcocho suave con zanahoria, canela y nueces cubierto con frosting de queso crema y zanahoria', price: 12, imageUrl: "/assets/imagenes/IMG_0008.jpg"}, 
    ]);
  }, [setProducts]);

  return (
    <div>
      <Header/>
      

      
      <Carrusel/>


      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};



      <Footer />
   




export default Home;
