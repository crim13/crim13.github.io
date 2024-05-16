import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useProductContext } from "../../data";
import ProductCard from "../ProductCard";
import men from "./men.jpg";
import woman from "./woman.jpg";
import electronics from "./electronics.jpg";
import jewelery from "./jewelery.jpg";
import $ from "./index.module.css";
interface GalleryInterface {
  limit: number;
  filters: boolean;
}
const ProductGallery = ({ limit, filters }: GalleryInterface) => {
  const { products, loading } = useProductContext();
  const [showProd, setShowProd] = useState<number>(limit);

  const cats = Array.from(new Set(products.map((item) => item.category)));
  const [prods, setProds] = useState<any[]>();
  const [activeCat, setActiveCat] = useState<string>();
  const [favorites, setFavorites] = useState<any[]>([]);
  const [viewType, setViewType] = useState<string>("3r");
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const categoryImages: any[] = [men, jewelery, electronics, woman];

  const navigate = useNavigate();
  const onCatFilter = (cat: string) => {
    const filteredProds = products.filter((prod) => prod.category === cat);
    setProds(filteredProds);
    setActiveCat(cat);
  };
  const onAddToFav = (prod: any) => {
    if (favorites.some((favorite) => favorite.id === prod.id)) {
      console.log("Already in");
    } else {
      setFavorites((prev) => [...prev, prod]);
      console.log(favorites);
    }
  };
  const onSeeProd = (prod: any) => {
    const catPath = prod.category.replace(/ /g, "-");
    const prodPath = prod.title.split(" ").slice(0, 3).join("-");
    // navigate(`/${catPath}/${prodPath}`);
    console.log("ecommerce/" + catPath + "/" + prodPath);
  };
  const onSort = (order: string) => {
    let sortedProds: any[];
    if (prods && prods.length > 0) {
      switch (order) {
        case "pa":
          sortedProds = [...prods].sort((a, b) => a.price - b.price);
          setProds(sortedProds);
          break;
        case "pd":
          sortedProds = [...prods].sort((a, b) => b.price - a.price);
          setProds(sortedProds);
          break;
        case "rd":
          sortedProds = [...prods].sort(
            (a, b) => b.rating.rate - a.rating.rate
          );
          setProds(sortedProds);
          break;
        case "ra":
          sortedProds = [...prods].sort(
            (a, b) => a.rating.rate - b.rating.rate
          );
          setProds(sortedProds);
          break;
        case "az":
          sortedProds = [...prods].sort((a, b) =>
            a.title.localeCompare(b.title)
          );
          setProds(sortedProds);
          break;
        case "za":
          sortedProds = [...prods].sort((a, b) =>
            b.title.localeCompare(a.title)
          );
          setProds(sortedProds);
          break;
        default:
          setProds(prods);
          break;
      }
    }
  };
  useEffect(() => {
    setProds(products);
  }, [products]);

  return (
    <div className={$.Wrapper}>
      {filters ? (
        <div className={$.FilterWrapper}>
          <div className={$.FilterContainer}>
            {cats.map((cat, index) => (
              <div
                className={$.CategoryCard}
                // style={{ backgroundImage: `url(${products[index].image})` }}
              >
                <img src={categoryImages[index]} alt={cat} />
                <button
                  key={index}
                  className={activeCat === cat ? $.ActiveFilter : ""}
                  onClick={() => onCatFilter(cat)}
                >
                  {cat}
                </button>
              </div>
            ))}
          </div>
          <div className={$.FilterContainer1}>
            <button
              className={$.FiltersButton}
              onClick={() => setShowFilters(!showFilters)}
            >
              <span></span>
              Filter
            </button>
            <div className={$.Organiser}>
              <span
                className={`${$.Grid2} ${viewType === "2r" ? $.Active : ""}`}
                onClick={() => setViewType("2r")}
              ></span>
              <span
                className={`${$.Grid3} ${viewType === "3r" ? $.Active : ""}`}
                onClick={() => setViewType("3r")}
              ></span>
              <span
                className={`${$.Grid4} ${viewType === "4r" ? $.Active : ""}`}
                onClick={() => setViewType("4r")}
              ></span>
              <span
                className={`${$.List} ${viewType === "ls" ? $.Active : ""}`}
                onClick={() => setViewType("ls")}
              ></span>
            </div>
            <div className={$.SortBy}>
              <span>Sort by: </span>
              <select onChange={(e) => onSort(e.target.value)}>
                <option value=" ">Select</option>
                <option value="pa">Price (asc)</option>
                <option value="pd">Price (desc)</option>
                <option value="ra">Rating (asc)</option>
                <option value="rd">Rating (desc)</option>
                <option value="az">Alphabetically (a-z)</option>
                <option value="za">Alphabetically (z-a)</option>
              </select>
            </div>
          </div>
          {showFilters ? (
            <div className={$.FilterContainer2}>
              <div>
                <span>Min Price</span>
                <input type="range" min="1" max="100" value="0" />
              </div>
              <div>
                <span>Max Price</span>
                <input type="range" min="1" max="100" value="100" />
              </div>
              <div>
                <span>Min Rating</span>
                <input type="range" min="1" max="5" value="3" />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : null}
      {loading ? (
        <div style={{ textAlign: "center" }}>Loading...</div>
      ) : (
        <div
          className={`${$.Gallery} ${
            viewType === "2r"
              ? $.Grid2Col
              : viewType === "3r"
              ? $.Grid3Col
              : viewType === "4r"
              ? $.Grid4Col
              : viewType === "ls"
              ? $.List
              : ""
          }`}
        >
          {prods
            ? prods
                .slice(0, showProd)
                .map((prod, index) => (
                  <ProductCard
                    key={index}
                    property={prod}
                    addToFav={(favProd) => onAddToFav(favProd)}
                    seeProduct={(product) => onSeeProd(product)}
                    cardType={viewType === "ls" ? "ls" : "grid"}
                  />
                ))
            : null}
        </div>
      )}
      <button
        className={$.Button}
        onClick={() => setShowProd((prev) => prev + 8)}
      >
        Load More
      </button>
    </div>
  );
};
export default ProductGallery;
