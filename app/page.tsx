"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";

const BuilderClient = dynamic(() => import("./components/BuilderClient"), { ssr: false });

export default function Home() {
  const [selectedSvg, setSelectedSvg] = useState<string | null>(null);

  function handleSelectModel(svg: string) {
    setSelectedSvg(svg);
    setTimeout(() => {
      const el = document.getElementById("model-preview");
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 150);
  }

  return (
    <div className="dndb-root">
      <nav className="nav">
        <div className="nav-inner">
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <Image src="/decor/crest.svg" alt="crest" className="crest" width={32} height={32} />
            <div className="logo">FigurineForge</div>
          </div>
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
              <rect x="20" y="80" width="260" height="220" rx="12" fill="#0f172a" opacity="0.04" />
              <circle cx="150" cy="120" r="44" fill="#6b46c1" stroke="#222" strokeWidth="3" />
              <rect x="110" y="160" width="80" height="120" rx="10" fill="#4c1d95" />
            </svg>

            <div className="figure-gallery" role="list">
              <Image src="/figures/fig1.svg" alt="figurine option 1" width="100" height="100" className="figure-thumb" />
              <Image src="/figures/fig2.svg" alt="figurine option 2" width="100" height="100" className="figure-thumb" />
              <Image src="/figures/fig3.svg" alt="figurine option 3" width="100" height="100" className="figure-thumb" />
            </div>

            {/* Decorative parchment frame (fixed nesting) */}
            <div className="parchment-frame ornate-border">
              <div className="embers" aria-hidden>
                {Array.from({ length: 10 }).map((_, i) => (
                  <span
                    key={i}
                    className="ember"
                    style={{ left: `${10 + (i * 9) % 84}%`, bottom: `${5 + (i * 7) % 28}%`, animationDelay: `${(i % 4) * 0.45}s`, width: `${4 + (i % 3) * 3}px`, height: `${4 + (i % 3) * 3}px` }}
                  />
                ))}
              </div>

              <div className="hero-inner">
                <div className="hero-copy parallax">
                  <Image src="/decor/scroll.svg" alt="scroll banner" className="scroll-banner scroll-unfurl" width={200} height={100} />
                  <h1 className="flicker">Create a Custom D&D Figurine — From Sheet to Shipped Model</h1>
                  <p>Enter your character details, pick a generated image, convert to a 3D model, then we print and ship it. Quick, secure, and handcrafted-ready.</p>

                  <div className="hero-actions">
                    <Link href="/builder" className="btn primary">Start Building</Link>
                    <a href="#how" className="btn ghost">Learn More</a>
                  </div>
                </div>

                <div className="hero-preview" aria-hidden>
                  <Image src="/decor/torch.svg" alt="torch" className="torch parallax" width={50} height={150} />
                  <svg viewBox="0 0 300 360" className="hero-figure" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="80" width="260" height="220" rx="12" fill="#0f172a" opacity="0.04" />
                    <circle cx="150" cy="120" r="44" fill="#6b46c1" stroke="#222" strokeWidth="3" />
                    <rect x="110" y="160" width="80" height="120" rx="10" fill="#4c1d95" />
                  </svg>

                  <div className="figure-gallery" role="list">
                    <Image src="/figures/fig1.svg" alt="figurine option 1" className="figure-thumb parallax" width={100} height={100} />
                    <Image src="/figures/fig2.svg" alt="figurine option 2" className="figure-thumb parallax" width={100} height={100} />
                    <Image src="/figures/fig3.svg" alt="figurine option 3" className="figure-thumb parallax" width={100} height={100} />
                  </div>
                </div>

                <div className="hero-badges">
                  <span>Fast turnaround</span>
                  <span>Secure payments</span>
                  <span>High-quality prints</span>
                </div>
              </div>
            </div>
            {/* end parchment-frame */}

          </div>
        </div>
      </header>

      <section id="how" className="how-it-works">
        <div className="section-inner">
          <h2>How It Works</h2>
          <ol className="steps">
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
      <section id="builder-section" className="builder-section" data-section>
        <div className="section-inner">
          <h2>Character Builder & Preview</h2>
          <div className="builder-area">
            <div className="builder-panel">
              <BuilderClient onSelect={handleSelectModel} />
            </div>
            <div className="preview-panel">
              <h3>Preview</h3>
              <div className="preview-canvas big">
                {selectedSvg ? (
                  <div dangerouslySetInnerHTML={{ __html: selectedSvg }} />
                ) : (
                  <Image src="/figures/fig1.svg" alt="placeholder" width={220} height={280} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="model-preview" className="model-preview" data-section>
        <div className="section-inner">
          <h2>Selected Model</h2>
          {selectedSvg ? (
            <div className="model-canvas" dangerouslySetInnerHTML={{ __html: selectedSvg }} />
          ) : (
            <p className="muted">Select an image in the builder to see the 3D conversion preview and ordering options.</p>
          )}
          <div className="model-actions">
            <button className="btn primary">Order Print</button>
            <button className="btn">Request 3D Model</button>
          </div>
        </div>
      </section>

      <footer className="footer">© FigurineForge — custom miniatures made with care.</footer>
    </div>
  );
}
// ...existing code...