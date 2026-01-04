
export interface StateInfo {
  id: string;
  name: string;
  capital: string;
  description: string;
  image: string;
}

export interface BusOperator {
  id: string;
  name: string;
  logo: string;
}

export interface Destination {
  name: string;
  price: number;
  vehicle: string;
  imageUrl: string;
}

export enum AppRoute {
  HOME = 'home',
  STATE = 'state',
  BUS_TICKETING = 'bus-ticketing',
  OPERATOR_DETAIL = 'operator',
  HOTEL = 'hotel',
  RESTAURANT = 'restaurant',
  PAYMENT_GATEWAY = 'payment-gateway'
}
