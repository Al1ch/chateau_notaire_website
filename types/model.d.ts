export type SvgComponent =  React.FC<React.SVGProps<SVGSVGElement>>;


export type Domain = {
  title: string;
  description: string;
  id: number;
  services: Services[];
};


type Services = {
    title: string;
    price: string;
    id: number;
  };
  