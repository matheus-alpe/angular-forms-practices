export enum ThemeOptions {
  Light = 'light',
  Dark = 'dark',
  System = 'system',
}

export interface ProductOrder {
  id: string;
  name: string;
  quantity: number;
}

export interface LoginData {
  email: string;
  password: string;
  profile: {
    firstName: string;
    lastName: string;
  };
  settings: {
    theme: ThemeOptions;
  };
  products: ProductOrder[];
  isPublic: boolean;
  publicUrl: string;
}
