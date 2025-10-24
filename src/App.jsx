import React from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <header className="navbar">
        <h1 className="logo">SENA CGMLTI</h1>
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#programas">Programas</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-content">
          <h2>Bienvenido al Centro de Gestión de Mercados, Logística y TI</h2>
          <p>Formamos talento con visión tecnológica y humana para el futuro.</p>
          <button className="btn">Conoce más</button>
        </div>
      </section>

      <section id="programas" className="section">
        <h2>Programas Destacados</h2>
        <div className="cards">
          <div className="card">
            <h3>Análisis y Desarrollo de Software</h3>
            <p>Forma parte del mundo digital con uno de los programas más demandados.</p>
          </div>
          <div className="card">
            <h3>Gestión Empresarial</h3>
            <p>Desarrolla habilidades en liderazgo, administración y negocios.</p>
          </div>
          <div className="card">
            <h3>Logística</h3>
            <p>Optimiza procesos, gestiona inventarios y lidera la cadena de suministro.</p>
          </div>
        </div>
      </section>

      <section id="contacto" className="section contacto">
        <h2>Contáctanos</h2>
        <form className="formulario">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Correo electrónico" />
          <textarea placeholder="Mensaje"></textarea>
          <button className="btn">Enviar</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2025 SENA CGMLTI | Todos los derechos reservados</p>
      </footer>
    </>
  );
}
