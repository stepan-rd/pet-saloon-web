export type Service = {
  name: string;
  desc: string;
  includes: string;
}

type Pricing = {
  [service: string]: number;
}

type AnimalSize = {
  size: string;
  weight: string;
  imgSrc: string;
  priceStart: Pricing;
}

export type Animal = {
  type: string;
  sizes: AnimalSize[];
}
