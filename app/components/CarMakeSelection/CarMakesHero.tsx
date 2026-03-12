import Link from 'next/link';
import './carMakeSelection.css';

export default function CarMakesHero() {
  return (
    <div className="cm-hero">
      <h1 id="car-makes-heading">Välj ditt bilmärke</h1>
      <p>Specialiserad service på flera märken — med kvalitet, erfarenhet och omtanke.</p>
      <div className="cm-hero-btns">
        <Link href="/booking" className="cm-btn-primary">Serviceförfrågan</Link>
        <Link href="/contact" className="cm-btn-secondary">Kontakta oss</Link>
      </div>
    </div>
  );
}