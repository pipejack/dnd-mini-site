import Link from "next/link";

export default function Home() {
  return (
    <div className="entry-root">
      <header className="hero">
        <h1 className="title">Order a Custom D&D Figurine</h1>
        <p className="subtitle">From character sheet to shipped miniature — an easy, guided process.</p>
      </header>

      <main className="entry-container">
        <section className="process">
          <h2>How it works</h2>
          <ol>
            <li><strong>Build:</strong> Enter your character details in the builder.</li>
            <li><strong>Preview:</strong> We generate several images matching your description.</li>
            <li><strong>Choose:</strong> Pick the image you like best.</li>
            <li><strong>Convert:</strong> We run an image→3D-model AI to create a printable model.</li>
            <li><strong>Pay & Ship:</strong> Complete payment, and we print and ship your figurine.</li>
          </ol>
          <p className="note">We handle the 3D conversion and printing — you get a hand-painted-quality miniature delivered to your door.</p>
          <div className="entry-cta">
            <Link href="/builder" className="btn primary">Go to Character Builder</Link>
            <Link href="#pricing" className="btn">See Pricing</Link>
          </div>
        </section>

        <aside className="sidebar">
          <h3>Why choose us</h3>
          <ul>
            <li>Fast turnaround</li>
            <li>High-quality 3D prints</li>
            <li>Secure payments</li>
          </ul>
        </aside>
      </main>

      <footer className="footer">Ready to bring your character to life? Start by building them.</footer>
    </div>
  );
}
