import React, { useEffect, useState } from "react";
import "../css/blogs.css";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const blogsApi = "https://api.test.interactiva.net.co/api/get-blogs/";

    useEffect(() => {
        const fetchAllBlogs = async () => {
            try {
                const response = await fetch(blogsApi);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setBlogs(data); // Asumimos que la API devuelve un array
                console.log('Blogs data:', data); // Verifica la respuesta
            } catch (error) {
                console.error('Error al obtener los blogs:', error);
            }
        };

        fetchAllBlogs();
    }, []); // Llama al efecto solo una vez

    return (
        <div className="blogs-container">
            <h2 className="blogs-title">BLOGS</h2>
            <div className="blogs-grid">
                {blogs.map((blog) => (
                    <div className="blog-card" key={blog.id}>
                        <img
                            src={`https://api.test.interactiva.net.co${blog.image_cover}`} // Asegúrate de que la URL sea correcta
                            className="blog-image"
                            alt={blog.title}
                        />
                        <div className="blog-content">
                            <h3 className="blog-title">{blog.title}</h3>
                            <p className="blog-description">
                                {blog.description || "Descripción no disponible."}
                            </p>
                            <a
                                href={blog.url_front || "#"}
                                className="blog-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LEER MÁS
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;