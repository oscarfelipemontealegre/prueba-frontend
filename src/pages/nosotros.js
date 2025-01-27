import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/nosotros.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



const Nosotros = () => {
    const [nosotros, setNosotros] = useState([]); // Estado para las imágenes de Instagram
    const [company, setCompany] = useState(null); // Estado para los datos de la compañía
    const InstaApi = 'https://api.test.interactiva.net.co/api/get-feed_instagram/'; 
    const CompanyApi = 'https://api.test.interactiva.net.co/api/get-companies/';

    // Fetch para las imágenes de Instagram
    useEffect(() => {
        const fetchNosotros = async () => {
            try {
                const response = await fetch(InstaApi);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Datos de Instagram:', data); // Verifica los datos aquí
                setNosotros(data);
            } catch (error) {
                console.error('Error al obtener las imágenes:', error);
            }
        };

        // Fetch para los datos de la compañía
        const fetchCompany = async () => {
            try {
                const response = await fetch(CompanyApi);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCompany(data[0]); // Suponemos que el primer elemento contiene la información deseada
            } catch (error) {
                console.error('Error al obtener los datos de la compañía:', error);
            }
        };

        fetchNosotros();
        fetchCompany();
    }, []);

    return (
        <div className="container mt-5">
            {/* Ícono de Instagram */}
            <div className="instagram-link mb-3">
                {company?.instagram_account && (
                    <a 
                        href={`https://www.instagram.com/${company.instagram_account}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="instagram-icon"
                    >
                        {/* Aquí puedes agregar un ícono de Instagram */}
                    </a>
                )}
            </div>

            {/* Sección de Nosotros */}
            <h2 className="nosotros">NOSOTROS</h2>
            <p className="parrafo">
                Un copy cercano como hablándole a un amigo. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>

            {/* Carrusel de Imágenes */}
            {nosotros.length > 0 && (
                <Carousel className="custom-carousel">
                    {nosotros.map((item) => (
                        <Carousel.Item key={item.id}>
                            <div className="carousel-image-container">
                                <img
                                    className="d-block w-100 carousel-image"
                                    src={`https://api.test.interactiva.net.co${item.image}`}
                                    alt={`Imagen de Instagram ${item.id}`}
                                />
                                <div className="carousel-overlay">
                                    <i className="bi bi-instagram carousel-icon"></i>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )}

            {/* Muestra el enlace de la cuenta de Instagram */}
            <div className="instagram-account mt-3">
                {company?.instagram_account && (
                    <h3>
                        <a 
                            href={`https://www.instagram.com/${company.instagram_account}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            @{company.instagram_account}
                        </a>
                    </h3>
                )}
            </div>
            
            
        </div>
    );
};

export default Nosotros;