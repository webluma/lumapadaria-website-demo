// Layout Types
export interface HeaderProps {
  className?: string;
}

export interface FooterProps {
  brandName: string;
  description: string;
  links: {
    title: string;
    href: string;
  }[];
  copyright: string;
  developer: string;
}

// Section Types
export interface HeroProps {
  images: string[];
  title: string;
  subtitle?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ProductsProps {
  products: Product[];
}

export interface TarteletteProps {
  title: string;
  subtitle: string;
  description: string;
}

export interface OrderOption {
  id: string;
  title: string;
  description: string;
  buttons: {
    text: string;
    href: string;
    variant: "primary" | "secondary";
  }[];
}

export interface OrdersProps {
  title: string;
  subtitle: string;
  options: OrderOption[];
}

export interface Unit {
  id: string;
  name: string;
  address: string;
}

export interface UnitsProps {
  title: string;
  subtitle: string;
  units: Unit[];
}

// Data Types
export interface SiteData {
  hero: {
    images: string[];
    title: string;
  };
  delicias: {
    title: string;
    subtitle: string;
    description: string[];
  };
  products: Product[];
  tartelette: {
    title: string;
    subtitle: string;
    description: string;
  };
  quality: {
    description: string;
  };
  orders: {
    title: string;
    subtitle: string;
    options: OrderOption[];
  };
  units: {
    title: string;
    subtitle: string;
    units: Unit[];
  };
  finalCta: {
    title: string;
  };
  footer: {
    brandName: string;
    description: string;
    links: {
      title: string;
      href: string;
    }[];
    copyright: string;
    developer: string;
  };
}


