import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import "./ProductListing.css";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=300",
  },
  {
    id: 2,
    name: "Spider Plant",
    price: 20,
    category: "Air Purifying",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 18,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=300",
  },
  {
    id: 4,
    name: "Jade Plant",
    price: 30,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=300",
  },
  {
    id: 5,
    name: "Peace Lily",
    price: 35,
    category: "Flowering",
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=300",
  },
  {
    id: 6,
    name: "Orchid",
    price: 40,
    category: "Flowering",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=300",
  },
];

const ProductListing = () => {
  const dispatch = useDispatch();

  const [addedItems, setAddedItems] = useState({});

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedItems((prev) => ({
      ...prev,
      [plant.id]: true,
    }));
  };

  return (
    <div className="products-container">
      <h1>Our Houseplants</h1>

      {categories.map((category) => (
        <div key={category}>
          <h2 className="category-title">{category}</h2>

          <div className="products-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />

                  <h3>{plant.name}</h3>

                  <p className="price">${plant.price}</p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems[plant.id]}
                  >
                    {addedItems[plant.id]
                      ? "Added ✓"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
