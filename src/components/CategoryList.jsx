import React from "react";
import { useState } from "react";
import './styles/CategoryList.css'


function CategoryList() {
  // cette partie est fait pour faire les mises à jours de la vue   
  const categories = ['tous','Musique', 'Danse', 'Art', 'Cuisine', 'Mode'];
  const [activeCategory, setActiveCategory] = useState("tous"); 
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Catégories</h2>
      <div className="categories">
        {categories.map((cat, index) => (
          <button key={index} className="categoryBtn">{cat}</button>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;