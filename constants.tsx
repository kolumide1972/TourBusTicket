
import { StateInfo, BusOperator, Destination } from './types';

export const STATES: StateInfo[] = [
  { id: 'edo', name: 'Edo', capital: 'Benin City', description: 'The Heartbeat of the Nation.', image: 'https://picsum.photos/seed/edo/800/600' },
  { id: 'ogun', name: 'Ogun', capital: 'Abeokuta', description: 'The Gateway State.', image: 'https://picsum.photos/seed/ogun/800/600' },
  { id: 'osun', name: 'Osun', capital: 'Osogbo', description: 'State of the Living Spring.', image: 'https://picsum.photos/seed/osun/800/600' },
  { id: 'oyo', name: 'Oyo', capital: 'Ibadan', description: 'The Pacesetter State.', image: 'https://picsum.photos/seed/oyo/800/600' },
  { id: 'lagos', name: 'Lagos', capital: 'Ikeja', description: 'Center of Excellence.', image: 'https://picsum.photos/seed/lagos/800/600' },
  { id: 'ekiti', name: 'Ekiti', capital: 'Ado Ekiti', description: 'Land of Honour and Integrity.', image: 'https://picsum.photos/seed/ekiti/800/600' },
];

export const BUS_OPERATORS: BusOperator[] = [
  { id: 'edo-line', name: 'New Edo Line', logo: '🚌' },
  { id: 'eagle-line', name: 'Eagle Line', logo: '🦅' },
  { id: 'muyi', name: 'Muyi', logo: '🚍' },
  { id: 'libra', name: 'Libra', logo: '⚖️' },
  { id: 'gig', name: 'God is Good', logo: '✨' },
  { id: 'edegbe', name: 'Edegbe', logo: '🛣️' },
];

export const DESTINATIONS: Record<string, Destination[]> = {
  'edo-line': [
    { name: 'Port Harcourt', price: 25000, vehicle: 'Toyota Hiace Bus', imageUrl: 'https://picsum.photos/seed/hiace1/400/300' },
    { name: 'Ibadan', price: 20000, vehicle: 'Toyota Hiace Bus', imageUrl: 'https://picsum.photos/seed/hiace2/400/300' },
    { name: 'Abuja', price: 28000, vehicle: 'Toyota Hiace Bus', imageUrl: 'https://picsum.photos/seed/hiace3/400/300' },
    { name: 'Lagos', price: 18000, vehicle: 'Toyota Hiace Bus', imageUrl: 'https://picsum.photos/seed/hiace4/400/300' },
  ]
};
