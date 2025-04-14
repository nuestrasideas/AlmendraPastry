import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface AppContextProps {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <AppContext.Provider value={{ user, setUser, cart, setCart, products, setProducts }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
};
