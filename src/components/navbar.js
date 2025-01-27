//navbar
import  { useEffect, useState } from 'react';
import '../css/navbar.css'
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [company, setCompany] = useState(); // Cambiar a un solo objeto para la compañía
    const UrlApi = 'https://api.test.interactiva.net.co/api/get-companies/';
    
    
    useEffect(() => {
        const fetchCompany = async () => {
            try {
                const response = await fetch(UrlApi);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCompany(data[0]);  // Asumimos que la API devuelve un array y tomamos el primer elemento
            } catch (error) {
                console.log('Error al obtener la compañía:', error);
            }
        };

        fetchCompany();
    }, []);

    return (
        
        <nav className="navbar">
        
            <div className="navbar-brand">
                {company && (
                    <>
                        <img 
                            src={`https://api.test.interactiva.net.co${company.logo}`} 
                            
                            alt={`${company.name} Logo`} 
                            className="navbar-logo" 
                        />
                    </>
                )}
            </div>
            <ul className="navbar-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to={'/nosotros'}>Nosotros</Link></li>
            <li><Link to="/viajes">Viajes</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contacto">contacto</Link></li>
                
                
            </ul>
        </nav>
    
    );
};

export default Navbar;