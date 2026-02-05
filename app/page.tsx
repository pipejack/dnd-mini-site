import Link from "next/link";

export default function Home() {
  return (
    <div className="dndb-root">
      <nav className="nav">
        <div className="nav-inner">
          <div className="logo">FigurineForge</div>
          <div className="nav-links">
            <Link href="#features">Features</Link>
            <Link href="#how">How it works</Link>
            <Link href="/builder">Builder</Link>
            <a href="#pricing">Pricing</a>
          </div>
        </div>
      </nav>

      <header className="hero-cta">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>Create a Custom D&D Figurine — From Sheet to Shipped Model</h1>
            <p>Enter your character details, pick a generated image, convert to a 3D model, then we print and ship it. Quick, secure, and handcrafted-ready.</p>

            <div className="hero-actions">
              <Link href="/builder" className="btn primary">Start Building</Link>
              <a href="#how" className="btn ghost">Learn More</a>
            </div>
          </div>

          <div className="hero-preview" aria-hidden>
            <svg viewBox="0 0 300 360" className="hero-figure" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="80" width="260" height="220" rx="12" fill="#0f172a" opacity="0.06" />
              <circle cx="150" cy="120" r="44" fill="#6b46c1" stroke="#222" strokeWidth="3" />
              <rect x="110" y="160" width="80" height="120" rx="10" fill="#4c1d95" />
            </svg>
            <div className="hero-badges">
              <span>Fast turnaround</span>
              <span>Secure payments</span>
              <span>High-quality prints</span>
            </div>
          </div>
        </div>
      </header>

      <section id="features" className="features">
        <div className="section-inner">
          <h2>Features</h2>
          <div className="cards">
            <div className="card">
              <h3>AI-powered image generation</h3>
              <p>We create several art variations from your description so you can pick the perfect look.</p>
            </div>
            <div className="card">
              <h3>Image → 3D conversion</h3>
              <p>Selected artwork is converted into a printable 3D model using our pipeline.</p>
            </div>
            <div className="card">
              <h3>Print & Ship</h3>
              <p>We print, finish, and ship the figurine to your address — ready to play.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="how">
        <div className="section-inner">
          <h2>How it works</h2>
          <ol>
            <li>Fill out the character builder with details and preferences.</li>
            <li>We generate several preview images for you to choose from.</li>
            <li>Pick a preview; we convert it to a 3D model, then you pay to finalize the order.</li>
            <li>We print, finish, and ship your figurine.</li>
          </ol>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="section-inner">
          <h2>Pricing</h2>
          <div className="pricing-grid">
            <div className="price-card">
              <h3>Digital</h3>
              <p className="price-amount">$9</p>
              <p>Image generation and 3D model (low-res preview)</p>
            </div>
            <div className="price-card featured">
              <h3>Print</h3>
              <p className="price-amount">$39</p>
              <p>Printed figurine, basic finishing, shipping included (US)</p>
            </div>
            <div className="price-card">
              <h3>Premium</h3>
              <p className="price-amount">$79</p>
              <p>Hand-painted finish and priority shipping</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">© FigurineForge — custom miniatures made with care.</footer>
    </div>
  );
}
