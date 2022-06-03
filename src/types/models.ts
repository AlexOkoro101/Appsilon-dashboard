import React, { ReactElement } from 'react';

export interface Admin {
  first_name: string;
  last_name: string;
  image: string;
  plan: string;
};

export interface Route {
  path: string;
  name: string;
  icon: ReactElement;
  component: React.ReactNode;
  bottom: boolean;
};

export interface Card {
  price: number;
  name: string;
  policy: {
    price: number;
    range: number;
  };
  claim: {
    price: number;
    range: number;
  };
};
