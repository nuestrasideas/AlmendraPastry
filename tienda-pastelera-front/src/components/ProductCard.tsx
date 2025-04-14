import React from 'react';

// Definir los tipos para las props
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="col-md-4">
      <div className="card product-card">
        <img src={product.imageUrl} alt="Pastel" className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-text">{product.description}</p>
          <p><strong>Precio: ${product.price}</strong></p>
          <button className="btn btn-primary" onClick={() => onAddToCart(product)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
