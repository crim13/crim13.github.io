import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductContextProps {
  products: Product[];
  loading: boolean;
  cart: Product[];
  favorites: Product[];
  updateProducts: (newProducts: Product[]) => void;
  updateCart: (newCart: Product[]) => void;
  updateFavorites: (newFavorites: Product[]) => void;
}

const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [cart, setCart] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .then(() => setLoading(false))
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const updateProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
  };

  const updateCart = (newCart: Product[]) => {
    setCart(newCart);
  };

  const updateFavorites = (newFavorites: Product[]) => {
    setFavorites(newFavorites);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        cart,
        favorites,
        updateProducts,
        updateCart,
        updateFavorites,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
