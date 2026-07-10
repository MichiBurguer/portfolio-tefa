// Puedes meter esto directamente en tu archivo de páginas o en App.jsx reemplazando el Home anterior
const Home = () => {
  // Datos quemados (fijos) de prueba. Luego estos vendrán de Firestore.
  const proyectosPrueba = [
    { id: 1, titulo: "Freshbite", categoria: "UI/UX Design", img: "https://via.placeholder.com/300x200" },
    { id: 2, titulo: "Leaf & Co.", categoria: "Brand Identity", img: "https://via.placeholder.com/300x200" },
    { id: 3, titulo: "Wander", categoria: "Web Design", img: "https://via.placeholder.com/300x200" }
  ];

  return (
    <div className="portfolio-container">
      
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-subtitle">Hello, I'm</p>
          <h1 className="hero-title">Mariana<br />Napolitani</h1>
          <p className="hero-role">Designer & Visual Creator</p>
          <p className="hero-description">
            I craft playful, premium and purposeful digital experiences that connect brands with people.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-dark">View Work ↗</button>
            <button className="btn btn-light">About Me ↗</button>
          </div>
        </div>
        
        <div className="hero-image-container">
          {/* probable foto */}
          <div className="hero-avatar-placeholder">
            <img src="https://via.placeholder.com/350x450" alt="Mariana" />
          </div>
        </div>
      </section>

      {/* 2. SELECTED WORKS  */}
      <section className="works-section">
        <div className="works-header">
          <h2>Selected Works ✨</h2>
          <div className="filter-tabs">
            <span className="tab active">All</span>
            <span className="tab">Web Design</span>
            <span className="tab">Branding</span>
            <span className="tab">UI/UX</span>
          </div>
        </div>

        <div className="works-grid">
          {proyectosPrueba.map((proyecto) => (
            <div key={proyecto.id} className="project-card">
              <div className="card-image">
                <img src={proyecto.img} alt={proyecto.titulo} />
              </div>
              <div className="card-info">
                <div>
                  <h3>{proyecto.titulo}</h3>
                  <p>{proyecto.categoria}</p>
                </div>
                <span className="card-arrow">↗</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};