"use client";

import { useRef, useState } from "react";

type Option = {
  label: string;
  value: string;
};

const races: Option[] = [
  { label: "Human", value: "human" },
  { label: "Elf", value: "elf" },
  { label: "Dwarf", value: "dwarf" },
  { label: "Orc", value: "orc" },
];

const classes: Option[] = [
  { label: "Fighter", value: "fighter" },
  { label: "Wizard", value: "wizard" },
  { label: "Rogue", value: "rogue" },
  { label: "Cleric", value: "cleric" },
];

export default function Builder() {
  const [race, setRace] = useState<string>(races[0].value);
  const [klass, setKlass] = useState<string>(classes[0].value);
  const [color, setColor] = useState<string>("#6b46c1");
  const [scale, setScale] = useState<number>(100);
  const [svg, setSvg] = useState<string>(generateSvg(races[0].value, classes[0].value, "#6b46c1", 1));
  const previewRef = useRef<HTMLDivElement | null>(null);

  function handleGenerate(e?: React.FormEvent) {
    e?.preventDefault();
    const s = generateSvg(race, klass, color, scale / 100);
    setSvg(s);
  }

  function handlePrint() {
    const w = window.open("", "_blank", "noopener,noreferrer");
    if (!w) return;
    const html = `<!doctype html><html><head><meta charset=\"utf-8\"><title>Print Figurine</title><style>body{display:flex;align-items:center;justify-content:center;height:100vh;margin:0}svg{width:80vmin;height:auto}</style></head><body>${svg}</body></html>`;
    w.document.open();
    w.document.write(html);
    w.document.close();
    setTimeout(() => { w.print(); }, 300);
  }

  return (
    <div className="landing-root">
      <header className="hero">
        <h1 className="title">Create & Print Your Custom D&D Figurine</h1>
        <p className="subtitle">Design a compact 2D model you can print and assemble.</p>
      </header>

      <main className="container">
        <section className="controls">
          <form onSubmit={handleGenerate} className="form">
            <label>
              Race
              <select value={race} onChange={(e) => setRace(e.target.value)}>
                {races.map((r) => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
            </label>

            <label>
              Class
              <select value={klass} onChange={(e) => setKlass(e.target.value)}>
                {classes.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </label>

            <label>
              Primary Color
              <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            </label>

            <label>
              Scale ({scale}%)
              <input type="range" min={50} max={150} value={scale} onChange={(e) => setScale(Number(e.target.value))} />
            </label>

            <div className="buttons">
              <button type="submit" className="btn primary">Generate</button>
              <button type="button" className="btn" onClick={handlePrint}>Print Figurine</button>
            </div>
          </form>
        </section>

        <section className="preview" ref={previewRef} aria-label="Figurine preview">
          <div className="preview-canvas" dangerouslySetInnerHTML={{ __html: svg }} />
          <p className="preview-hint">Tip: use Print Figurine to open a print-friendly view.</p>
        </section>
      </main>

      <footer className="footer">Built for tabletop creators — printable SVGs ready to scale.</footer>
    </div>
  );
}

function generateSvg(race: string, klass: string, color: string, scale = 1) {
  const head = `<circle cx=\"100\" cy=\"70\" r=\"30\" fill=\"${color}\" stroke=\"#222\" stroke-width=\"3\"/>`;
  const body = `<rect x=\"70\" y=\"100\" width=\"60\" height=\"90\" rx=\"8\" fill=\"${shade(color, -20)}\" stroke=\"#222\" stroke-width=\"3\"/>`;
  const icon = `<text x=\"100\" y=\"150\" font-size=\"18\" text-anchor=\"middle\" fill=\"#fff\">${klass[0].toUpperCase()}</text>`;
  const raceBadge = `<text x=\"100\" y=\"200\" font-size=\"12\" text-anchor=\"middle\" fill=\"#444\">${race}</text>`;

  const svg = `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 ${220 * scale}\" width=\"${200 * scale}\" height=\"${220 * scale}\">${head}${body}${icon}${raceBadge}</svg>`;
  return svg;
}

function shade(hex: string, percent: number) {
  const num = parseInt(hex.replace('#',''),16);
  const r = Math.min(255, Math.max(0, (num>>16) + percent));
  const g = Math.min(255, Math.max(0, ((num>>8)&0x00FF) + percent));
  const b = Math.min(255, Math.max(0, (num & 0x0000FF) + percent));
  return `#${(r<<16 | g<<8 | b).toString(16).padStart(6,'0')}`;
}
