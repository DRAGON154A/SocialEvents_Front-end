import React from 'react';
import Header from '../components/header'; 
import Footer from '../components/footer';
import '../components/styles/homepage.css'; 
import CategoryList from '../components/CategoryList'; 
import EventCard from '../components/EventList'; 
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  
  
  const categories = [
  { 
    id: 1, 
    name: "Explorations Artistiques", 
    items: ["Galerie virtuelle", "Artistes à suivre", "Expos en cours"]
  },
  { 
    id: 2, 
    name: "Patrimoine & Traditions", 
    items: ["Fêtes locales", "Savoir-faire", "Légendes"]
  },
  {
    id:3,
    name:" Evenements a venir",
    items:["concerts","festivals","spectacles","expositions"]
  },
    {
        id:4,
        name:"Evenements passés",
        items:["concerts","festivals","spectacles","expositions"]
    },
    {
        id:5,
        name:"Evenements populaires",
        items:["concerts","festivals","spectacles","expositions"]
    },
    {
        id:6,
        name:"Evenements recommandés",
        items:["concerts","festivals","spectacles","expositions"]
    },
    {
        id:7,
        name:"Evenements à proximité",
        items:["concerts","festivals","spectacles","expositions"]
    },
    {
        id:8,
        name:"Evenements à venir",
        items:["concerts","festivals","spectacles","expositions"]
    },
    {
        id:9,
        name:"Evenements à venir",
        items:["concerts","festivals","spectacles","expositions"]
    },
    {
        id:10,
        name:"Evenements à venir",
        items:["concerts","festivals","spectacles","expositions"]
    },
   
    
  
];

const events = [
    {
      id: 1,
      name: "Les lions plus fort",
      description: "Découvre toute la puissance des lions avec hardeur et expertise",
      supporters: 10500, 
      category: "A",
      checked: true,
      status: "ongoing", // 'upcoming', 'past'
      imageUrl: "/images/lions-event.jpg"
    },
    {
      id: 2,
      name: "Festival des Arts Urbains",
      description: "Exploration des dernières tendances street art",
      supporters: 8700,
      category: "B",
      checked: false,
      status: "upcoming",
      imageUrl: "/images/street-art.jpg"
    },
    {
      id: 3,
      name: "Exposition Renaissance",
      description: "Chefs-d'œuvre de la période Renaissance",
      supporters: 12400,
      category: "C",
      checked: true,
      status: "past",
      imageUrl: "/images/renaissance.jpg"
    }
  ];

  return (
    <div className="home-page">
      <Header />
    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <div className="hero-section">
      <h1>Bienvenue sur notre plateforme d'événements</h1>
      <p>Découvrez, explorez et participez à des événements uniques.</p>
    </div>
    
    <main className="main-content">
      <section className="categories-section">
        <h2>Catégories Populaires</h2>
        <CategoryList categories={categories} />
      </section>
      
      <section className="events-section">
        <h2>Événements à Venir</h2>
        <div className="events-grid">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </main>
      
      <div className="content-wrapper">
        <CategoryList categories={categories} searchQuery={searchQuery}  />
        <EventCard events={events} searchQuery={searchQuery} />
      </div>
      <Footer />
    </div>
    
          
          
  );
};

export default HomePage;