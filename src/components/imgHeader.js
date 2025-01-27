import React, { useEffect, useState } from 'react';
import '../css/navbar.css';
import Cards from './card'; // Asegúrate de que el archivo sea 'card.js'
import Navbar from './navbar';

const ImgHeader = () => {
    const [banner, setBanner] = useState(null); // Inicializa el estado como null
    const bannerApi = 'https://api.test.interactiva.net.co/api/get-banners/'; // URL de la API para obtener banners

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const response = await fetch(bannerApi);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBanner(data[0]); // Asumimos que la API devuelve un array y tomamos el primer elemento
                console.log('Banner data:', data[0]); // Verifica el objeto completo
            } catch (error) {
                console.error('Error al obtener el banner:', error);
            }
        };

        fetchBanner();
    }, []);

    return (
        <div className="header-container">
            {/* Navbar */}
            <Navbar />

            {/* Imagen de fondo */}
            {banner?.image && (
                <img 
                    src={`https://api.test.interactiva.net.co${banner.image}`} 
                    alt="Imagen de fondo" 
                    className="banner" 
                />
            )}
            

            {/* Título y subtítulo del banner */}
            {banner && (
                <div className="text-overlay">
                    <h1>{banner.title || 'The Travel'}</h1> {/* Título dinámico o predeterminado */}
                    <p>{banner.subtitle || 'Experience'}</p> {/* Subtítulo dinámico o predeterminado */}
                </div>
            )}

            {/* Contenedor para la tarjeta */}
            <div className="card-overlay">
                <Cards /> 
            </div>
        </div>
    );
};

export default ImgHeader;

