import CarMakesHero from './CarMakesHero';
import CarMakesContent from './CarMakeContent';
import { CAR_MAKES_DATA } from './carMakesData';

export default function CarMakeSelection() {
  return (
    <section className="car-makes-section" aria-labelledby="car-makes-heading">
      <CarMakesHero />
      <CarMakesContent makes={CAR_MAKES_DATA} />
    </section>
  );
}