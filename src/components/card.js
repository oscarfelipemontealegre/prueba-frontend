//card.js

import React, { useEffect, useState } from 'react';
import '../css/card.css';


function Cards() {
    const [cards, setCards] = useState([]);
    const cardApi = 'https://api.test.interactiva.net.co/api/get-categories/';

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch(cardApi);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCards(data);
                console.log('Cards data:', data);
            } catch (error) {
                console.log('Error al obtener las tarjetas:', error);
            }
        };

        fetchCards();
    }, []);

    return (
        <div className="row">
            {cards.map((card) => (
                    <div className="col-md-3 mb-3" key={card.id}>
                    <div className="image-container">
                    <img 
                        src={`https://api.test.interactiva.net.co${card.image_banner}`} 
                        className="card-img-top" 
                        alt={card.name} 
                    />
                    <div className="image-overlay">
                        <i className="bi bi-arrow-right-circle me-2"></i>
                        <p className="overlay-text">{card.name}</p>
                    </div>
                    
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;
