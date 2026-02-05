"use client";

import { useState } from "react";
import Image from "next/image";
import BuilderClient from "./components/BuilderClient";
import FlowClient from "./components/FlowClient";


import './globals.css';

export default function Home() {
  const [selectedSvg, setSelectedSvg] = useState<string | null>(null);

  function handleSelectModel(svg: string) {
    setSelectedSvg(svg);
    const el = document.getElementById("model-preview");
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="scroll-root">
      <aside className="scroll-indicator" aria-hidden>
        <div className="dot" />
      </aside>

      <section className="section hero-section">
        <div className="wrap">
          <header className="hero">
            <div className="brand">
              <Image src="/decor/crest.svg" alt="crest" className="crest" width={50} height={50} />
              <h1>FigurineForge</h1>
            </div>
            <div className="hero-copy">
              <h2>From Character Sheet to Shipped Figurine</h2>
              <p className="lead">Describe your character — we generate art, convert it to a 3D model, print, and ship the finished miniature.</p>
              <div className="cta-row">
                <a href="#builder-section" className="btn primary">Open Builder</a>
                <a href="#pricing" className="btn ghost">See Pricing</a>
              </div>
            </div>
            <div className="hero-art">
              <Image src="/figures/fpic1.png" alt="example figure" className="hero-figure" width={400} height={400} />
            </div>
            <div className="figure-gallery" style={{marginTop:12, display:'flex', gap:10, justifyContent:'center'}}>
              <Image src="/figures/fpic1.png" alt="photo 1" className="figure-thumb" width={100} height={100} onClick={() => setSelectedSvg('<img src="/figures/fpic1.png" alt="selected" />')} />
              <Image src="/figures/fpic2.png" alt="photo 2" className="figure-thumb" width={100} height={100} onClick={() => setSelectedSvg('<img src="/figures/fpic2.png" alt="selected" />')} />
              <Image src="/figures/fpic3.png" alt="photo 3" className="figure-thumb" width={100} height={100} onClick={() => setSelectedSvg('<img src="/figures/fpic3.png" alt="selected" />')} />
            </div>
          </header>
        </div>
      </section>

      <section id="pricing" className="section pricing-section">
        <div className="wrap">
          <h2>Pricing</h2>
          <div className="pricing-grid">
            <div className="card">
              <h3>Digital</h3>
              <p className="price">$9</p>
              <p>Images + low-res 3D preview</p>
            </div>
            <div className="card featured">
              <h3>Print</h3>
              <p className="price">$39</p>
              <p>Printed figurine with basic finishing (US)</p>
            </div>
            <div className="card">
              <h3>Premium</h3>
              <p className="price">$79</p>
              <p>Hand-painted finish and priority handling</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section features-section">
        <div className="wrap">
          <h2>How it Works</h2>
          <ul className="steps">
            <li>Build — Fill the builder with character details.</li>
            <li>Generate — We create multiple image options.</li>
            <li>Select — Pick your favorite image.</li>
            <li>Convert & Print — We create a 3D model, you pay, we print & ship.</li>
          </ul>
        </div>
      </section>

      <section id="builder-section" className="section builder-section">
        <div className="wrap builder-wrap">
          <h2>Character Builder</h2>
          <div className="builder-columns">
            <div className="panel">
              <BuilderClient onSelect={handleSelectModel} />
            </div>
            <aside className="panel preview-side">
              <h3>Live Preview</h3>
              <div className="preview-box">
                {selectedSvg ? (
                  <div dangerouslySetInnerHTML={{ __html: selectedSvg }} />
                ) : (
                  <Image src="/figures/fpic2.png" alt="placeholder" style={{maxWidth:'100%',height:'auto'}} width={300} height={300} />
                )}
              </div>
              <p className="hint">Select an image to see the model page.</p>
            </aside>
          </div>
          <div className="demo-flow">
            <h3>Quick Demo Flow</h3>
            <FlowClient />
          </div>
        </div>
      </section>

      <section id="model-preview" className="section model-section">
        <div className="wrap">
          <h2>Selected Model & Order</h2>
          <div className="model-canvas">
            {selectedSvg ? (
              <div dangerouslySetInnerHTML={{ __html: selectedSvg }} />
            ) : (
              <div className="placeholder">No selection yet — pick an image in the builder.</div>
            )}
          </div>
          <div className="order-actions">
            <button className="btn primary">Order Print</button>
            <button className="btn">Request 3D Model</button>
          </div>
        </div>
      </section>

      <footer className="section footer-section">
        <div className="wrap">
          <p>© FigurineForge — built for tabletop creators.</p>
        </div>
      </footer>
    </div>
  );
}