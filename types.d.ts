type Product = {
  label: string;
  subLabel: string[];
  id: string[];
  ENGSize: string[];
  secondSize?: string[];
  description: string;
  category: string;
  variety: string;
  amount: string;
  isInStock: string;
  img: string;
  price: string;
  title: string;
  type: string;
  typeOfSize: string;
  metaType: string;
  secondFilter?: string;
};

type Catergories = {
  img: string;
  label: string;
  href: string;
  metaData: string;
  links: [
    {
      title: string;
      link: string;
      img: string;
    }
  ];
};
