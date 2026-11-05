import ServicePage, { generateMetadata as serviceMetadata } from '../components/ServicePage/ServicePage';

const props = { params: Promise.resolve({ slug: 'hjulinstallning-dack' }) };

export function generateMetadata() {
  return serviceMetadata(props);
}

export default function Page() {
  return ServicePage(props);
}
